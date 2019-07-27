<template>
  <div class="dp-component" :style="position">
    <div class="multiline-text" :style="textStyle | inline-style">
      {{value}}
    </div>
  </div>
</template>

<script>
import commonMixin from 'src/components/datapoints/mixins/common'

export default {
  name: 'MultilineText',
  mixins: [commonMixin],
  data () {
    return {
      value: ''
    }
  },
  computed: {
    textStyle () {
      return this.config.text
    }
  },
  methods: {
    getValue () {
      if (this.data.type === 'static') {
        this.value = this.data.staticData.value
      }
    }
  },
  mounted () {
    this.getValue()
  }
}
</script>