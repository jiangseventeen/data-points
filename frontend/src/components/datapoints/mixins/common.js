export default {
  props: ['config', 'data'],
  computed: {
    position () {
      return {
        'width': this.config.width + 'px',
        'height': this.config.height + 'px',
        'left': this.config.left + 'px',
        'top': this.config.top + 'px'
      }
    }
  }
}