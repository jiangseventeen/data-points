<template>
  <div class="dp-component" :style="measure">
    <div class="icon-wrap">
      <i :class="icon" :style="size"></i>
    </div>
  </div>
</template>

<script>
import mixins from '../../../mixins/measure'

export default {
  name: 'iconFont',
  props: ['config'],
  mixins: [mixins],
  computed: {
    icon () {
      return this.config.icon
    },
    size () {
      return {
        'font-size': this.config.fontSize + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>