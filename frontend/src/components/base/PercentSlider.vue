<template>
  <el-slider
    :value="parseInt(value)"
    @input="handleInput"
    :format-tooltip="formatTooltip"
  />
</template>

<script>
export default {
  name: 'PercentSlider',
  props: ['value'],
  methods: {
    handleInput (value) {
      this.$emit('input', `${value}%`)
    },
    formatTooltip (value) {
      return `${value}%`
    }
  }
}
</script>