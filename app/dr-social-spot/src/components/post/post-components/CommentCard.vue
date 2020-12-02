<template>
  <div class="mb-2">
    <div class="d-flex">
      <div>
        <img :src="comment['user'] && comment['user']['user_profile_picture'] ? comment['user']['user_profile_picture']['file_name'] : noProfileLink" class="rounded-circle border p-1" style="height:30px; width:30px" />
      </div>
      <div class="flex-fill pl-2 pt-1">
        <strong>{{comment['user'] && comment['user']['user_basic_information'] ? comment['user']['user_basic_information']['first_name'] : 'The Nameless'}} {{comment['user'] && comment['user']['user_basic_information']? comment['user']['user_basic_information']['last_name'] : ''}}</strong>
        <div class="mt-1 bg-light pt-1 px-2 rounded text-break" >{{comment['content']}}</div>
        <div v-if="level === 1">
          <small v-if="replies.length">{{replies.length}} replies</small>
          <small  @click="showComment = !showComment" class="text-hover-underline c-pointer ml-1 font-weight-bold">Reply</small>

        </div>
        <div v-if="showComment" class="pt-1">
          <template v-for="reply in replies" :key="'asdd' + reply['id']">
            <CommentCard :comment="reply" :level="level + 1" />
          </template>
          <CreateComment :post-id="comment['post_id']" :comment-id="comment['id']" @create="replyCreated" />
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import CreateComment from './CreateComment'
import CommentCard from './CommentCard'
export default {
  name: 'CommentCard',
  components: {
    CreateComment,
    CommentCard
  },
  props: {
    level: Number,
    comment: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      noProfileLink: require('@/assets/images/no-profile.png'),
      showComment: false,
      replies: []
    }
  },
  methods: {
    replyCreated(newReply){
      this.replies.push(newReply)
    }
  },
  watch: {
    comment: {
      handler(comment){
        this.replies = []
        if(comment['post_comments']){
          this.replies = comment['post_comments']
        }
      },
      immediate: true
    }
  }
}
</script>
