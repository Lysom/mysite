<template>
  <div id="app">
    <music></music>
    <router-view/>
  </div>
</template>

<script>
import music from './components/music'
export default {
  name: 'App',
  components: {music},
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

<style lang="less">
html,body{ width:100%; height:100%; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}
</style>
