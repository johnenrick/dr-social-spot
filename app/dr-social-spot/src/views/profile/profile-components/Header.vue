<template>
  <div v-if="userData" class="d-flex align-items-center bg-white rounded p-2">
    <div>
      <img :src="userData && userData['user_profile_picture'] ? userData['user_profile_picture'] : noProfileLink" class="rounded-circle border p-1" style="height:80px; width:80px">
    </div>
    <div class="px-2 flex-fill text-break text-truncate">
      <h5 class="text-uppercase font-weight-bold">{{userData['user_basic_information']['first_name']}} {{userData['user_basic_information']['last_name']}}</h5>
      <div>{{userData['user_basic_information']['title']}}</div>
    </div>
    <div v-if="!isLoading" class="mt-0">
      <button class="btn btn-outline-dark">Edit</button>
    </div>
  </div>
</template>
<script>
import Auth from '@/core/auth'
export default {
  props: {
    userData: Object,
    isLoading: Boolean
  },
  data(){
    return {
      user: Auth.user(),
      noProfileLink: require('@/assets/images/no-profile.png')
    }
  }
}
</script>