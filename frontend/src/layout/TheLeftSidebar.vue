<template>
  <div class="left-sidebar">
    <Title>图层</Title>
  </div>
</template>
<script>
import Title from '../components/base/Title';

export default {
  name: 'TheLeftSidebar',
  components: {
    Title
  }
}
</script>

<style scope lang="scss">
@import 'src/assets/scss/_variables';

.left-sidebar {
  left: 0;
  top: $top-heading-height;
  bottom: 0;
  width: $left-sidebar-width;
  position: absolute;
  background: $primary-background-color;
}
</style>