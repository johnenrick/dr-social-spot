<template>
  <div class="container pt-2">
    <PostList />
  </div>
</template>
<script>
import PostList from '@/components/post/PostList'
import Auth from '@/core/auth'
export default {
  components: {
    PostList
  },
  data(){
    return {
      user: Auth.user()
    }
  }
}
</script>