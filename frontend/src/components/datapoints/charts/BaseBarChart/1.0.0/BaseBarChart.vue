<template>
  <div class="dp-component" :style="position">
    <div ref="container" class="chart-container">
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import _ from 'lodash'
import commonMixin from 'src/components/datapoints/mixins/common'

export default {
  name: 'BaseBarChartConfig',
  mixins: [commonMixin],
  mounted () {
    this.chart = echarts.init(this.$refs.container)

    let option = this.config.chartOption
    option.series[0].data = this.data.staticData.map(n => [n.name, n.value])

    this.chart.setOption(option)

    this.$watch('config.chartOption', this.optionChange, { deep: true })
  },
  methods: {
    optionChange () {
      let chartOption = this.config.chartOption
      this.chart.setOption(chartOption)
    }
  },
  watch: {
    'config.width': _.debounce(function() { this.chart.resize()}, 100),
    'config.height': _.debounce(function() { this.chart.resize()}, 100)
  }
}
</script>

<style lang="scss" scoped>
.chart-container {
  width: 100%;
  height: 100%;
}
</style>