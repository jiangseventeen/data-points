<template>
  <div class="interact-setting">
    <div class="no-interaction">
      <h1><i class="el-icon-remove-outline"/></h1>
      <h3>该组件暂无交互事件</h3>
    </div>
  </div>
</template>

<style lang="scss">
@import 'src/assets/scss/_variables';

.interact-setting {
  font-size: 12px;
  color: $primary-text-color;

  .no-interaction {
    text-align: center;
    margin: 20px;
  }
}
</style>