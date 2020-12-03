<template>
  <div class="">
    <img :src="image" ref="myImage" @load="getImageSize" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2700073372,1831939333&fm=26&gp=0.jpg'
    }
  },
  methods:{
    getImageSize() {
      console.log(this.$refs.myImage.offsetHeight);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
