<template>
  <div id="app" class="container">
    <router-view name="header-questions"></router-view>
    <router-view name="header-question"></router-view>
    <div class="body">
      <div class="content">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
    import Header from './components/Header.vue'
    export default {
        components: {
            appHeader: Header
        },
        created() {
            this.$store.dispatch('initQuestions');
        }
    }
</script>

<style lang="scss">
  $body-color: #ffe0b3;
  $content-color: #fbfbfb;
  html,
  body {
    background-color: $body-color;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #555;
    min-width: 100%;
    margin: 0;
    padding: 0;
    background-color: $body-color;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .body {
    background-color: $content-color;
    width: 90%;
    margin: 0 auto;
    box-shadow: 2px 0 3px -2px rgba(85, 85, 85, 0.66);
  }
  .content {
    background-color: $content-color;
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  }
  .footer {
    height: 50px;
    background-color: $body-color;
  }
  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-40px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-40px);
      opacity: 0;
    }
  }
</style>
