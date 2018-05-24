<template>
   <div class="loading">
    <music></music>
    <progressBar></progressBar>
   </div>
</template>

<script>
import music from '@/components/music'
import progressBar from '@/components/progressbar'
export default {
  name: 'loading',
  components: {
    music,
    progressBar
  },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.loading {
  width: 100%;
  height: 100%;
  background: url(/static/images/bg.jpg) no-repeat center center/cover;
}
</style>
