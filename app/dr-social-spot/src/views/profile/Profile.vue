<template>
  <div class="container py-2">
    <ProfileHeader
      :user-id="userId"
      :user-data="userData"
      :is-loading="isLoading"
      :show-edit="!editProfile"
      @click="editProfile = true"
      class="mb-2"
    />
    <div v-show="editProfile" class="row no-gutters">
      <div class="col-12">
        <EditProfile :user-data="userData" @close="editProfile = false" />
      </div>
    </div>
    <div v-show="!editProfile" class="row no-gutters">
      <div class="profileDdetail col-12 col-md-4 mb-2">
        <ProfileDetails :user-data="userData" />
      </div>
      <div v-if="!isLoading" class="profileNewsfeed col-12 col-md-8">
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
import EditProfile from './profile-components/EditProfile'
export default {
  components: {
    ProfileHeader,
    ProfileDetails,
    Newsfeed,
    EditProfile
  },
  data(){
    return {
      user: Auth.user(),
      isLoading: true,
      userData: null,
      editProfile: false
    }
  },
  methods: {
    initialize(){
      this.isLoading = true
      const param = {
        id: this.userId,
        select: {
          user_basic_information: {
            select: ['user_id', 'first_name', 'last_name', 'birthdate', 'address', 'gender', 'title']
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
      return typeof this.$route.params['userId'] !== 'undefined' ? this.$route.params['userId'] : (this.user ? this.user['id'] : null)
    },
  }
}
</script>
<style>

</style>
