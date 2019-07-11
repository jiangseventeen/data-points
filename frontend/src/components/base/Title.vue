<template>
  <h1 class="common-title">
    <slot></slot>
  </h1>
</template>

<style lang="scss" scoped>
@import 'src/assets/scss/_variables';

.common-title {
  font: {
    size: 14px;
    weight: 300;
  }
  margin: 0;
  padding: 5px 10px;
  text-align: center;
  color: $primary-text-color;
  background: #353a42;
}
</style>