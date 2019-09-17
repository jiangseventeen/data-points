<template>
  <div class="dp-component" :style="[position, blockStyle]"></div>
</template>

<script>
import commonMixin from 'src/components/datapoints/mixins/common'

export default {
  name: 'ColorBlock',
  mixins: [commonMixin],
  computed: {
    blockStyle () {
      let {
        backgroundColor,
        borderColor,
        borderWidth,
        borderRadius,
        borderStyle
      } = this.config

      return {
        backgroundColor,
        border: `${borderWidth}px ${borderStyle} ${borderColor}`,
        borderRadius: `${borderRadius}px`
      }
    }
  }
}
</script>