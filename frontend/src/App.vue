<template>
  <div id="app">
    <the-top-heading/>
    <the-left-sidebar/>
    <the-center-canvas/>
    <the-right-sidebar/>
    <the-footer/>
  </div>
</template>

<script>
import TheCenterCanvas from './layout/TheCenterCanvas';
import TheTopHeading from './layout/TheTopHeading';
import TheLeftSidebar from './layout/TheLeftSidebar';
import TheRightSidebar from './layout/TheRightSidebar';
import TheFooter from './layout/TheFooter';

export default {
  name: 'app',
  components: {
    TheCenterCanvas,
    TheTopHeading,
    TheLeftSidebar,
    TheRightSidebar,
    TheFooter
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/mixins/_scrollbar";
@import "src/assets/scss/common.scss";

html, body {
  height: 100%;
  margin: 0;
  overflow: hidden;
  font-family: PingFangSC, 'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
}
#app {
  width: 100%;
  height: 100%;
  user-select: none;
  background: url(./assets/image/app-bg.png) repeat;
}
</style>
