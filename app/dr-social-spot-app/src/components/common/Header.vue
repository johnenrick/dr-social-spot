<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-white border-bottom" style="max-height: 70px">
    <router-link :to="user ? '/newsfeed' : '/'" class="navbar-brand" href="#">DR Social Spot</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div ref="navbarCollapsable" class="collapse navbar-collapse bg-white px-2 px-md-0" id="navbarNav">
      <ul v-if="user !== null" class="navbar-nav">
        <li class="nav-item active">
          <!-- <router-link to="/newsfeed" class="nav-link px-2" >Newsfeed</router-link> -->
        </li>
      </ul>
      <ul class="nav navbar-nav ml-auto">
        <template v-if="user === null">
          <li class="nav-item">
            <router-link to="/register" @click="closeNavbar" class="nav-link text-success px-2" >Register</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" @click="closeNavbar" class="nav-link bg-primary text-white px-2" >Log In</router-link>
          </li>
        </template>
        <li v-else class="nav-item dropdown px-2">
          <a class="nav-link text-primary dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{user['email']}}
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link to="/profile" class="dropdown-item" href="#">{{user['first_name']}} {{user['last_name']}}</router-link>
            <a @click="logout" class="dropdown-item" href="#">Log Out</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import Auth from '@/core/auth'
export default {
  data(){
    return {
      user: Auth.user()
    }
  },
  mounted(){
    window.addEventListener('click', () => {
      this.closeNavbar()
    })
  },
  methods: {
    logout(){
      Auth.logout()
      this.$router.push('/')
      this.closeNavbar()
    },
    closeNavbar(){
      this.$refs.navbarCollapsable.classList.remove('show')
    }
  }
}
</script>
<style scoped>
</style>