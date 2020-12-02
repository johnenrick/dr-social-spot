<template>
  <div class="border-top p-2">
    <template v-for="comment in comments" :key="'asdd' + comment['id']">
      <CommentCard :comment="comment" :level="1"/>
    </template>
    <CreateComment :post-id="postId" @create="commentCreated" />
  </div>
</template>
<script>
import CreateComment from './CreateComment'
import CommentCard from './CommentCard'
export default {
  components: {
    CreateComment,
    CommentCard
  },
  props: {
    postId: {
      type: Number,
      required: true
    },
    postComments: Array
  },
  data(){
    return {
      noProfileLink: require('@/assets/images/no-profile.png'),
      comments: []
    }
  },
  methods: {
    commentCreated(newComment){
      this.comments.push(newComment)
      this.$emit('create', newComment)
    }
  },
  watch: {
    postComments: {
      handler(postCmments){
        if(postCmments){
          this.comments = JSON.parse(JSON.stringify(postCmments))
        }else{
          this.comments = []
        }
      },
      immediate: true
    }
  }
}
</script>
