<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Header />
  <div class="top-padding bg-whitesmoke d-flex align-items-stretch" >
    <div class="flex-fill" style="min-height: calc(100vh - 70px)">
      <div v-if="authenticationStatus === 'authenticated' || authenticationStatus === 'unauthenticated'">
        <router-view></router-view>
      </div>
      <div v-else  class="text-center">
        Preparing... <fa icon="spinner" spin />
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
export default {
  name: 'App',
  components: {
    Header
  },
  mounted(){
    Auth.chechAuth()
  },
  data(){
    return {
      authenticationStatus: Auth.status()
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
