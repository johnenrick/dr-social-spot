<template>
  <div class="d-flex">
    <div>
      <img :src="noProfileLink" class="rounded-circle border p-1" style="height:30px; width:30px" />
    </div>
    <div class="flex-fill pl-2 pt-1">
      <strong>{{user['first_name']}} {{user['last_name']}}</strong>
      <textarea @keydown.enter="submit" v-model="content" :disabled="isLoading" class="form-control mt-1" rows="1" placeholder="Write your comment">
      </textarea>
    </div>
  </div>
</template>
<script>
import PostCommentAPI from '@/api/post-comment'
import Auth from '@/core/auth'
export default {
  props: {
    postId: {
      type: Number,
      required: true
    },
    commentId: Number // parent comment id
  },
  emits: ['create'],
    data(){
    return {
      isLoading: false,
      content: '',
      user: Auth.user(),
      noProfileLink: require('@/assets/images/no-profile.png')
    }
  },
  methods: {
    submit(e){
      if(this.content === ''){
        e.preventDefault()
        return false
      }
      this.isLoading = true
      let param = {
        post_id: this.postId,
        content: this.content
      }
      if(this.commentId){
        param['post_comment_id'] = this.commentId
      }
      PostCommentAPI.create(param).then(result => {
        if(result['data']){
          this.$emit('create', {
            id: result['data']['id'],
            ...param,
            user: {
              user_basic_information: {
                first_name: this.user['first_name'],
                last_name: this.user['last_name'],
              },
              user_profile_picture: {
                file_name: this.noProfileLink
              }
            }
          })
          this.reset()
        }
        this.isLoading = false
      }).catch(error => {
        console.log(error)
        this.isLoading = false
      })
    },
    reset(){
      this.content = ''
    }
  }
}
</script>