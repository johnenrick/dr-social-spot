<template>
  <div class="rounded pl-md-2">
    <PostList :user-id-filter="user['id']"/>
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