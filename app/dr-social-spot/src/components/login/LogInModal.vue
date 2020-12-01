<template>
  <button v-if="hasButton" @click="_open" class="btn btn-primary">Log In</button>
  <modal ref='modal' title="Log In">
    <div class="text-left">
      <LogInForm @login="logInSuccess" @signup="_close"/>
    </div>
  </modal>
</template>
<script>
import Modal from '@/components/bootstrap/Modal'
import LogInForm from './LogInForm'
export default {
  components: {
    Modal,
    LogInForm
  },
  props: {
    refreshOnLogIn: {
      type: Boolean,
      default: true
    },
    hasButton: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      logInSuccessCallback: null
    }
  },
  methods: {
    _open(callback = null){
      this.$refs.modal._open()
      this.logInSuccessCallback = callback
    },
    _close(){
      this.$refs.modal._open()
    },
    logInSuccess(){
      if(this.refreshOnLogIn && typeof this.logInSuccessCallback !== 'function'){
        location.reload()
      }else{
        this.$refs.modal._close()
        this.logInSuccessCallback()
      }
    }
  }
}
</script>