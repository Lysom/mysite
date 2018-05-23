<template>
  <div id="music" :class="{play:isPlayed}" @click="togglePlayState">
    <audio id="audio1" src="/static/music/planet.mp3" autoplay="autoplay" loop="loop" preload="auto"  @play="greet">
      Your browser does not support the audio tag.
    </audio>
  </div>
</template>

<script>
export default {
  name: 'music',
  data () {
    return {
      isPlayed: false,
      isPaused: false,
      audioObj: null
    }
  },
  updated () {
    this.audioObj = document.querySelector('#audio1')
  },
  methods: {
    greet: function (event) {
      event.target.volume = 0.01
      this.isPlayed = true
    },
    togglePlayState: function () {
      this.isPlayed = !this.isPlayed
      this.isPaused = !this.isPaused
      // console.log(this.audioObj)
      this.isPaused ? this.audioObj.pause() : this.audioObj.play()
    }
  }
}
</script>

<style lang="less" scope>
  /* 背景音乐 */
  #music { position:fixed; top:30px; right:30px; width:75px; height:75px; border-radius: 100%; background:url(/static/images/msign.png) no-repeat center center/cover pink; background-size:90% auto; }
  .play { animation: rotateM 3s linear infinite; }
  @keyframes rotateM {
    0% { transform: rotateZ(0) }
    100% { transform: rotateZ(-360deg) }
  }
</style>
