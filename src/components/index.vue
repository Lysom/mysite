<template>
   <div class="loading">
     
   </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .loading{ width:100%; height:100%; background:url(/static/images/bg.jpg) no-repeat center center/cover; }
</style>
