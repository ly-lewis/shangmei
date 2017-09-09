<template>
    <div class="app">
        <router-view></router-view>
        <!-- <message></message> -->
    </div>
</template>
<script>
import message from './views/survey/result.vue'
export default {
  data () {
    return {}
  },
  mounted () {},
  beforeDestroy () {},
  methods: {},
  components:{
    message
  }
}
</script>

<style lang="less">
	@import './style/common';
  @screenWidth: 100%;
  @screenHeight: 100%;

  .app {
    width: @screenWidth;
     min-height: @screenHeight;
    background: #f0f0f0;
  }
</style>
