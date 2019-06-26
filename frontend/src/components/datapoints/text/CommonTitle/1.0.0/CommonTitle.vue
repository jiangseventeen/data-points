<template>
  <div class="dp-component" :style="styles" v-text="title">
  </div>
</template>

<script>
  export default {
    name: 'commonTitle',
    props: ['config'],
    computed: {
      styles () {
        return {
          'width': this.config.width + 'px',
          'height': this.config.height + 'px',
          'left': this.config.left + 'px',
          'top': this.config.top + 'px',
          'font-size': this.config.fontSize + 'px',
          'font-weight': this.config.fontWeight,
          'color': this.config.color,
          'text-align': this.config.textAlign,
          'letter-spacing': this.config.letterSpacing + 'px'
        }
      },
      title () {
        return this.config.title
      }
    }
  }
</script>

<style scoped>
</style>