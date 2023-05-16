<template>
    <div ref="player">
      <gif-player :gif="gifUrl" :autoplay="false" :loop="false" @play="onPlay" @pause="onPause" />
    </div>
  </template>
  
  <script>
  import GifPlayer from 'vue-gif-player';
  
  export default {
    components: {
      GifPlayer,
    },
    props: {
      gifUrl: String,
    },
    methods: {
      onPlay() {
        console.log('GIF started playing');
      },
      onPause() {
        console.log('GIF paused');
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const el = this.$refs.player;
        const rect = el.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        const visible = !(rect.bottom < 0 || rect.top - viewHeight >= 0);
        const player = el.querySelector('.gif-player');
        if (visible) {
          player.play();
        } else {
          player.pause();
        }
      },
    },
  };
  </script>