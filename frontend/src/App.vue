<template>
  <div id="app">
    <the-top-heading/>
    <the-left-sidebar/>
    <the-right-sidebar/>
    <the-footer/>
  </div>
</template>

<script>
import TheTopHeading from './layout/TheTopHeading';
import TheLeftSidebar from './layout/TheLeftSidebar';
import TheRightSidebar from './layout/TheRightSidebar';
import TheFooter from './layout/TheFooter';

export default {
  name: 'app',
  components: {
    TheTopHeading,
    TheLeftSidebar,
    TheRightSidebar,
    TheFooter
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  background: url(./assets/image/app-bg.png) repeat;
}
</style>
