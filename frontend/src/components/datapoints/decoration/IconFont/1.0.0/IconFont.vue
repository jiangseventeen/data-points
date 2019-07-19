<template>
  <div class="dp-component" :style="position">
    <div class="icon-wrap">
      <i :class="`fa fa-${icon}`" :style="iconStyle"></i>
    </div>
  </div>
</template>

<script>
import commonMixin from 'src/components/datapoints/mixins/common'

export default {
  name: 'iconFont',
  mixins: [commonMixin],
  computed: {
    icon () {
      return this.config.icon
    },
    iconStyle () {
      return {
        'color': this.config.color,
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