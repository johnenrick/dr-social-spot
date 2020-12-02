<template>
  <div class="rounded pl-md-2">
    <PostList :user-id-filter="userId"/>
  </div>
</template>
<script>
import PostList from '@/components/post/PostList'
import Auth from '@/core/auth'
export default {
  components: {
    PostList
  },
  props: {
    userId: Number
  },
  data(){
    return {
      user: Auth.user()
    }
  }
}
</script>