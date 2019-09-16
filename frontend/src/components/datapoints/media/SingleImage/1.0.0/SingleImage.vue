<template>
  <div class="dp-component single-image" :style="[position, imageStyle]">
  </div>
</template>

<script>
import commonMixin from 'src/components/datapoints/mixins/common'

export default {
  name: 'SingleImage',
  mixins: [commonMixin],
  computed: {
    imageStyle () {
      return {
        'background-image': `url(${this.config.backgroundUrl})`,
        'background-size': '100% 100%',
        opacity: this.config.opacity
      }
    }
  }
}
</script>