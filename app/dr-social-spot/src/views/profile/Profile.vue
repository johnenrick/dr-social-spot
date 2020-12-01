<template>
  <div class="container py-2">
    <ProfileHeader
      :user-id="userId"
      :user-data="userData"
      :is-loading="isLoading"
      class="mb-2"
    />
    <div class="row">
      <div class="profileDdetail col-12 col-md-4">
        <ProfileDetails :user-data="userData" />
      </div>
      <div class="profileNewsfeed col-12 col-md-8">
        <Newsfeed />
      </div>
    </div>
  </div>  
</template>
<script>
import UserAPI from '@/api/user'
import Auth from '@/core/auth'
import ProfileHeader from './profile-components/Header'
import ProfileDetails from './profile-components/ProfileDetails'
import Newsfeed from './profile-components/Newsfeed'
export default {
  components: {
    ProfileHeader,
    ProfileDetails,
    Newsfeed
  },
  data(){
    return {
      user: Auth.user(),
      isLoading: true,
      userData: null
    }
  },
  methods: {
    initialize(){
      this.isLoading = true
      const param = {
        id: this.userId,
        select: {
          user_basic_information: {
            select: ['user_id', 'first_name', 'last_name', 'birthdate', 'address', 'gender']
          },
          user_profile_picture: {
            select: ['user_id', 'file_name']
          },
          ...(['email'])
        }
      }
      UserAPI.retrieve(param).then(result => {
        console.log(result)
        if(result['data']){
          this.userData = result['data']
          this.isLoading = false
        }
      }).catch(error => {
        console.error(error)
      })
    }
  },
  watch: {
    userId: {
      handler(userId){
        if(userId){
          this.initialize()
        }
      },
      immediate: true
    }
  },
  computed: {
    userId(){
      return typeof this.$route.params['userId'] !== 'undefined' ? this.$route.params['relationId'] : (this.user['id'])
    },
  }
}
</script>
<style>

</style>
