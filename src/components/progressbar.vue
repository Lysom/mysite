<template>
   <div id="progressBar">
     <canvas class="progress">您的浏览器不支持canvas,请升级到最新版本</canvas>
   </div>
</template>

<!-- 进度条JS -->
<script>
import progress from '../../static/js/progress'
export default {
  name: 'progressBar',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    progress()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    #progressBar { position:fixed; bottom:100px; left:0; right:0; width:50%; margin:0 auto; }
    canvas { width:100%; background:transparent; }
</style>
