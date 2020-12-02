<template>
  <div class="p-4 height-max bg-white">
    <div class="row">
      <div class="col-12 col-md-6 pt-md-4">
        <h5 class="mt-md-4 font-weight-bold">Stay Connected!</h5>
        <p>DR Social Spot lets you stay connected with your friends and colleagues</p>
        <p class="text-justify">In tristique magna sed eros posuere fermentum. In a nibh metus. Proin ut nisi ut ante rutrum condimentum ut ac erat. Vestibulum nulla nisl, condimentum at commodo a, scelerisque eu sapien. Sed euismod, ligula vel sodales sodales, sem nibh pulvinar quam, id iaculis leo magna eu leo. Suspendisse vel viverra felis, eget cursus massa. Pellentesque id dictum nisl, sed ullamcorper mauris. Sed condimentum, arcu tempor rhoncus gravida, est massa tristique tellus, non dapibus dolor nisl id lacus. Curabitur eleifend maximus quam id hendrerit. Suspendisse id dui vel eros congue ornare.</p>
        
      </div>
      <div class="col-12 col-md-6 p-4">

        <RegistrationForm title="Join the Community Now" redirect="/profile" class="m-2 border rounded p-4 shadow-sm" />
      </div>
    </div>
  </div>
</template>
<script>
import RegistrationForm from '@/components/login/RegistrationForm'
export default {
  components: {
    RegistrationForm
  }
}
</script>
