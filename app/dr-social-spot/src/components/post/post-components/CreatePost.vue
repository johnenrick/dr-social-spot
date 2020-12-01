<template>
  <div class="bg-white p-2 rounded shadow-sm mb-2">
    <input v-model="post['content']" :disabled="isLoading" class="form-control" placeholder="What's on your mind?"/>
    <div class="text-right pt-2">
      <span v-if="isSuccess" class='text-success mr-2'><fa icon="check"  /> Posted!</span>
      <fa v-else-if="isLoading" icon="spinner" spin class="mr-2" />
      <button @click="save" :disabled="post['content'] === '' || isLoading" class="btn btn-primary">Post</button>
    </div>
  </div>
</template>
<script>
import PostAPI from '@/api/post'
export default {
  emits: ['post'],
  data(){
    return {
      isLoading: false,
      isSuccess: false,
      post: {
        content: ''
      }
    }
  },
  methods: {
    _reset(){
      this.post['content'] = ''
      this.isSuccess = false
      this.isLoading = false
    },
    save(){
      this.isLoading = true
      const param = {
        type: 1,
        ...this.post
      }
      PostAPI.create(param).then(result => {
        console.log(result)
        if(result['data']){
          this.isSuccess = true
          this.$emit('post', {
            id: result['data']['id'],
          })
          setTimeout(() => {
            this._reset()
          }, 1200)
        }
        this.isLoading = false
      }).catch(error => {
        this.isLoading = false
        console.log('error', error)
      })
    }
  }
}
</script>