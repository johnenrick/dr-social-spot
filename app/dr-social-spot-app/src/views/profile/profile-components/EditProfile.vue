<template>
  <div class="bg-white rounded container shadown-sm p-4">
    <div class="form-group row no-gutters">
      <label for="inputEmail3" class="col-sm-3 col-form-label">First Name</label>
      <div class="col-sm-9">
        <input v-model="userBasicInformation['first_name']" :disabled="isLoading" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <label for="inputEmail3" class="col-sm-3 col-form-label">Last Name</label>
      <div class="col-sm-9">
        <input v-model="userBasicInformation['last_name']" :disabled="isLoading" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <label for="inputEmail3" class="col-sm-3 col-form-label">Job Title</label>
      <div class="col-sm-9">
        <input v-model="userBasicInformation['title']" :disabled="isLoading" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <label for="inputEmail3" class="col-sm-3 col-form-label">Address</label>
      <div class="col-sm-9">
        <input v-model="userBasicInformation['address']" :disabled="isLoading" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <label for="inputEmail3" class="col-sm-3 col-form-label">Birthday</label>
      <div class="col-sm-9">
        <input v-model="userBasicInformation['birthdate']" :disabled="isLoading" type="date" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <label for="inputEmail3" class="col-sm-3 col-form-label">Gender</label>
      <div class="col-sm-9">
        <select v-model="userBasicInformation['gender']" :disabled="isLoading" type="text" class="form-control" >
          <option value="1">Male</option>
          <option value="2">Female</option>
        </select>
      </div>
    </div>
    <div class="text-right">
      <button @click="save" :disabled="isLoading" class="btn btn-primary mr-1">Save</button>
      <button @click="$emit('close')" :disabled="isLoading" class="btn btn-outline-dark">Close</button>
    </div>
  </div>
</template>
<script>
import UserBasicInformationAPI from '@/api/user-basic-information'
export default {
  props: {
    userData: Object
  },
  data(){
    return {
      isLoading: false,
      userBasicInformation: {
        id: null,
        first_name: '',
        last_name: '',
        title: '',
        address: '',
        birthdate: '',
        gender: '',
      },
      validationErrors: {}
    }
  },
  methods: {
    save(){
      if(this.isFormValid()){
        this.isLoading = true
        UserBasicInformationAPI.update(this.userBasicInformation).then(() => {
          location.reload()
          this.isLoading = false
        }).catch(() => {
          this.isLoading = false
        })
      }
    },
    isFormValid(){
      this.validationErrors = {}
      if(this.firstName === ''){
        this.validationErrors['firstName'] = 'Required'
      }
      if(this.lastName === ''){
        this.validationErrors['lastName'] = 'Required'
      }
      return Object.keys(this.validationErrors).length === 0
    },
  },
  watch: {
    userData: {
      handler(userData){
        if(userData){
          this.userBasicInformation['id'] = userData['user_basic_information']['id']
          this.userBasicInformation['first_name'] = userData['user_basic_information']['first_name']
          this.userBasicInformation['last_name'] = userData['user_basic_information']['last_name']
          this.userBasicInformation['title'] = userData['user_basic_information']['title']
          this.userBasicInformation['address'] = userData['user_basic_information']['address']
          this.userBasicInformation['birthdate'] = userData['user_basic_information']['birthdate']
          this.userBasicInformation['gender'] = userData['user_basic_information']['gender']
        }
      },
      immediate: true
    }
  }
}
</script>