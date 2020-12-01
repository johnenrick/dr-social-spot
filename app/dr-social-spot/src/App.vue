<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Header />
  <div class="top-padding bg-whitesmoke d-flex align-items-stretch" >
    <div class="flex-fill" style="min-height: calc(100vh - 70px)">
      <div v-if="authenticationStatus === 'authenticating'" class="text-center pt-4">
          Please wait... <fa icon="spinner" spin /> {{authenticationStatus}}
        </div>
      <div v-else-if="!routeRequireUser || (routeRequireUser && authenticationStatus === 'authenticated')">
        <router-view></router-view>
      </div>
      <div v-else class="text-center w-100 pt-4">
        <div>You need to login to see this page</div>
        <LogInModal :has-button="true" />
        <!-- <router-link to="/login" class="btn btn-primary">Log In</router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap'
import '@/assets/style/custom-theme.scss'
import '@/assets/style/dynamic-flow.scss'
import '@/assets/style/util.scss'
import Auth from '@/core/auth'
import Header from '@/components/common/Header'
import LogInModal from '@/components/login/LogInModal'
export default {
  name: 'App',
  components: {
    Header,
    LogInModal
  },
  mounted(){
    Auth.chechAuth()
  },
  data(){
    return {
      authenticationStatus: Auth.status()
    }
  },
  computed: {
    routeRequireUser(){
      return typeof this.$route['meta']['auth'] !== 'undefined' && typeof this.$route['meta']['auth']['require_user'] !== 'undefined' && this.$route['meta']['auth']['require_user']
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
