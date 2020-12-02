<template>
  <div>
    <CreatePost @post="postCreated" />
    <template v-for="post in posts" :key="'post' + post['id']">
      <PostCard :post-data="post" />
    </template>
    <div v-if="!isLoading && posts.length === 0" class="text-center font-weight-bold text-secondary">
      There are no posts
    </div>
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
              user_profile_picture: {
                select: ['file_name']
              }
            }
          },
          post_reactions: {
            select: ['user_id', 'post_id']
          },
          post_comments: {
            select: {
              user: {
                select: {
                  user_basic_information: {
                    select: ['user_id', 'first_name', 'last_name', 'title']
                  },
                  user_profile_picture: {
                    select: ['file_name']
                  },
                }
              },
              ...(['user_id', 'post_id', 'post_comment_id', 'content']),
              post_comments:{
                select: {
                  user: {
                    select: {
                      user_basic_information: {
                        select: ['user_id', 'first_name', 'last_name', 'title']
                      },
                      user_profile_picture: {
                        select: ['file_name']
                      },
                    }
                  },
                  ...(['user_id', 'post_id', 'post_comment_id', 'content']),
                }
              }
            },
            condition: [{
              column: 'post_comment_id',
              clause: 'is_null'
            }]
          },
          ...(['content', 'user_id', 'created_at'])
        },
        condition: [],
        sort: [{
          column: 'created_at',
          order: 'desc'
        }]
      }
      if(postId){
        param['condition'].push({
          column: 'id',
          value: postId
        })
      }
      if(this.userIdFilter){
        param['condition'].push({
          column: 'user_id',
          value: this.userIdFilter
        })
      }
      PostAPI.retrieve(param).then(result => {
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