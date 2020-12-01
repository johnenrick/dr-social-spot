<template>
  <div>
    <CreatePost @post="postCreated" />
    <template v-for="post in posts" :key="'post' + post['id']">
      <PostCard :post-data="post" />
    </template>
  </div>
</template>
<script>
import CreatePost from './post-components/CreatePost'
import PostCard from './post-components/PostCard'
import PostAPI from '@/api/post'
export default {
  props: {
    userIdFilter: Number
  },
  components: {
    CreatePost,
    PostCard
  },
  mounted(){
    this.getPosts()
  },
  data(){
    return {
      isLoading: false,
      posts: []
    }
  },
  methods: {
    postCreated(postId){
      this.getPosts(false, postId)
    },
    getPosts(isAppend = true, postId = null){
      this.isLoading = true
      let param = {
        select: {
          user: {
            select: {
              user_basic_information: {
                select: ['user_id', 'first_name', 'last_name', 'title']
              },
            }
          },
          post_reaction_count: {
            select: ['user_id', 'post_id']
          },
          post_reactions: {
            select: ['user_id', 'post_id']
          },
          ...(['content', 'user_id', 'created_at'])
        },
        condition: []
      }
      if(postId){
        param['condition'].push({
          column: 'id',
          value: postId
        })
      }
      PostAPI.retrieve(param).then(result => {
        console.log(param, result)
        if(result['data']){
          if(isAppend){
            this.posts = this.posts.concat(result['data'])
          }else{
            this.posts.unshift(result['data'][0])
          }
        }
        this.isLoading = false
      }).catch(error => {
        console.error(error)
        this.isLoading = false
      })
      
    }
  }
}
</script>