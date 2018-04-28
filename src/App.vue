<template>
  <div id="app">
    <audio src="/static/music/planet.mp3" autoplay="autoplay" loop="loop" preload="auto"  @play="greet">
      Your browser does not support the audio tag.
    </audio>
    <div class="bgMusic"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

    }
  },
  methods: {
    greet: function (event) {
      event.target.volume = 0.01
    }
  }
}
</script>

<style lang="less">
html,body{ width:100%; height:100%; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  /* 背景音乐 */
  .bgMusic{ position:fixed; top:30px; right:30px; width:75px; height:75px; border-radius: 100%; background:url(/static/images/msign.png) no-repeat center center/cover pink; background-size:90% auto;
    animation: rotateM 3s linear infinite;
  }
  @keyframes rotateM {
    0% { transform: rotateZ(0) }
    100% { transform: rotateZ(-360deg) }
  }
}
</style>
