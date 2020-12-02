<template>
  <div class="mb-2 bg-white rounded shadow-sm p-2">
    <div class="d-flex align-items-center">
      <div>
        <img :src="postData['user'] && postData['user']['user_profile_picture'] ? postData['user']['user_profile_picture'] : noProfileLink" class="rounded-circle border p-1" style="height:40px; width:40px" />
      </div>
      <div class="px-2">
        <div class="font-weight-bold">{{userBasicInformation ? userBasicInformation['first_name'] + ' ' + userBasicInformation['last_name'] : ''}}</div>
        <div>{{userBasicInformation ? userBasicInformation['title'] : null}}</div>
        <div class="text-muted"><small>{{datetimeLapse(postData['created_at'])}}</small></div>
      </div>
    </div>
    <div class="px-2 pt-1 mb-2 text-break">
      {{postData['content']}}
    </div>
    <div class="px-2">
      <small><fa icon="thumbs-up" class="text-primary" /> {{postData['post_reactions'].length + (!hasReactionOnload && isReacted ? 1 : 0) + (hasReactionOnload && !isReacted ? -1 : 0)}}</small>
      <small class="float-right">{{(postData['post_comments'].length + newCommentCount) ? (postData['post_comments'].length + newCommentCount) + ' comments': 'No comment'}}</small>
    </div>
    <div class="d-flex">
      <button @click="reactPost" :disabled="isReacting" :class="isReacted ? 'text-primary' : ''" class="btn btn-sm btn-outline-secondary border-0  mx-2 flex-fill"><fa icon="thumbs-up" /> Like</button>
      <button @click="showComment = !showComment" class="btn btn-sm btn-outline-secondary border-0  mx-2 flex-fill"><fa icon="comment" /> Comment</button>
      <button class="btn btn-sm btn-outline-secondary border-0  mx-2 flex-fill"><fa icon="share" /> Share</button>
    </div>
    <PostCommentList v-show="showComment" :post-id="postData['id']" :post-comments="postData['post_comments']" @create="++newCommentCount" />
  </div>
</template>
<script>
import Auth from '@/core/auth'
import PostReactionAPI from '@/api/post-reaction'
import PostCommentList from './CommentList'
export default {
  components: {
    PostCommentList
  },
  props: {
    postData: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      user: Auth.user(),
      noProfileLink: require('@/assets/images/no-profile.png'),
      showComment: false,
      newCommentCount: 0,
      hasReactionOnload: false,
      isReacted: null, // post reaction id of the user
      isReacting: false
    }
  },
  methods: {
    reactPost(){
      this.isReacting = true
      if(this.isReacted){
        PostReactionAPI.delete({id: this.isReacted}).then(result => {
          if(result['data']['deleted']){
            this.isReacted = null
          }
          this.isReacting = false
        }).catch(() => {
          this.isReacting = false
        })
      }else{
        PostReactionAPI.create({post_id: this.postData['id'], type: 1}).then(result => {
          if(result['data']){
            this.isReacted = result['data']['id']
          }
          this.isReacting = false
        }).catch(() => {
          this.isReacting = false
        })
      }
    },
  },
  watch: {
    postData: {
      handler(postData){
        this.hasReactionOnload = false
        this.isReacted = null
        this.isReacting = true
        for(let x = 0; x < postData['post_reactions'].length; x++){
          if(postData['post_reactions'][x]['user_id'] * 1 === this.user['id']){
            this.isReacted = postData['post_reactions'][x]['id']
            this.hasReactionOnload = true
            break
          }
        }
        this.isReacting = false
      },
      immediate: true
    }
  },
  computed: {
    userBasicInformation(){
      return this.postData && typeof this.postData['user'] !== 'undefined' && typeof this.postData['user']['user_basic_information'] !== 'undefined' ? this.postData['user']['user_basic_information'] : null
    }
  }
}
</script>