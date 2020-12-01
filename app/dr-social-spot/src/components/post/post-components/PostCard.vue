<template>
  <div class="mb-2 bg-white rounded shadow-sm p-2">
    <div class="d-flex align-items-center">
      <div>
        <img :src="postData['user'] && postData['user']['user_profile_picture'] ? postData['user']['user_profile_picture'] : noProfileLink" class="rounded-circle border p-1" style="height:40px; width:40px" />
      </div>
      <div class="px-2">
        <div class="font-weight-bold">{{userBasicInformation ? userBasicInformation['first_name'] + ' ' + userBasicInformation['last_name'] : ''}}</div>
        <div>{{userBasicInformation ? userBasicInformation['title'] : null}}</div>
        <div class="text-muted"><small>{{datetimeLapse(postData['created_at'])}}</small></div>
      </div>
    </div>
    <div class="px-2 pt-1 mb-2 text-break">
      {{postData['content']}}
    </div>
    <div class="d-flex">
      <button class="btn btn-sm btn-outline-secondary border-0  mx-2 flex-fill"><fa icon="thumbs-up" /> Like</button>
      <button class="btn btn-sm btn-outline-secondary border-0  mx-2 flex-fill"><fa icon="comment" /> Comment</button>
      <button class="btn btn-sm btn-outline-secondary border-0  mx-2 flex-fill"><fa icon="share" /> Share</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    postData: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      noProfileLink: require('@/assets/images/no-profile.png')
    }
  },
  computed: {
    userBasicInformation(){
      return this.postData && typeof this.postData['user'] !== 'undefined' && typeof this.postData['user']['user_basic_information'] !== 'undefined' ? this.postData['user']['user_basic_information'] : null
    }
  }
}
</script>