<template>
  <div v-if="userData" class="bg-white shadow-sm p-2">
    <div><strong><fa icon="home" /> Lives in</strong> {{userData['user_basic_information']['address'] ? userData['user_basic_information']['address'] : 'Not Available'}}</div>
    <div><strong><fa icon="birthday-cake" /> Birthday on</strong> {{formatDate(userData['user_basic_information']['birthdate'], 'M d, Y')}}</div>
    <div><strong><fa icon="venus-mars" /> Gender:</strong> {{userData['user_basic_information']['gender'] ? userData['user_basic_information']['gender'] : 'Not Available'}}</div>
  </div>
</template>
<script>
export default {
  props: {
    userData: Object
  }
}
</script>
