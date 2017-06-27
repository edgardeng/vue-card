<template>
  <div id="app">
    <transition name="bounce">
      <router-view> </router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {
  },
  methods: {
  },
  mounted () {
  },
  beforeDestroy () {
    // this.box.removeEventListener('scroll', this.handler, false)
  },
  watch: {
    path (path) {
    //   if (path === '/component/demo') {
    //     this.$router.replace('/demo')
    //     return
    //   }
    //   if (path === '/demo') {
    //     this.box.removeEventListener('scroll', this.handler, false)
    //     this.box.addEventListener('scroll', this.handler, false)
    //   } else {
    //     this.box.removeEventListener('scroll', this.handler, false)
    //   }
    //   if (path === '/demo' && this.demoTop) {
    //     this.$nextTick(() => {
    //       setTimeout(() => {
    //         this.box.scrollTop = this.demoTop
    //       }, 550)
    //     })
    //   } else {
    //     this.$nextTick(() => {
    //       this.box.scrollTop = 0
    //     })
    //   }
    }
  },
  computed: {
  }
}
</script>

<style lang="less">

  .bounce-enter-active {
    animation: bounce-in .5s;
  }

  .bounce-leave-active {
    animation: bounce-out .2s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0);
    }
  }

  body {
    margin: 0;
    padding: 0;
    background: #1F2D3D;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  #app {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }

</style>
