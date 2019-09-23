<template>
  <div class="dp-component" :style="position">
    <div class="chart-container" ref="container"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
import _ from 'lodash'
import commonMixin from 'src/components/datapoints/mixins/common'

const mapPositionToOption = {
  "1": { orient: 'horizontal', left: 'left', top: '2%' },        //顶部左对齐
  "2": { orient: 'horizontal', left: 'center', top: '2%' },      //顶部居中
  "3": { orient: 'horizontal', left: 'right', top: '2%' },       //顶部右对齐
  "4": { orient: 'vertical', top: 'top', left: '2%' },            //左侧上对齐
  "5": { orient: 'vertical', top: 'middle', left: '2%' },         //左侧居中
  "6": { orient: 'vertical', top: 'bottom', left: '2%' },         //左侧下对齐
  "7": { orient: 'vertical', top: 'top', right: '2%' },            //右侧上对齐
  "8": { orient: 'vertical', top: 'middle', right: '2%' },         //右侧居中
  "9": { orient: 'vertical', top: 'bottom', right: '2%' },         //右侧下对齐
  "10": { orient: 'horizontal', left: 'left', bottom: '2%' },       //底部左对齐
  "11": { orient: 'horizontal', left: 'center', bottom: '2%' },     //底部居中
  "12": { orient: 'horizontal', left: 'right', bottom: '2%' },      //底部右对齐
}

export default {
  name: 'BaseLineChart',
  mixins: [commonMixin],
  mounted () {
    this.chart = echarts.init(this.$refs.container)

    let option = this.config.chartOption
    option.series[0].data = this.data.staticData

    // 根据 `position`值，处理对应的 `legend` 位置
    Object.assign(option.legend, mapPositionToOption[option.legend.position])

    this.chart.setOption(option)

    this.$watch('config.chartOption', this.optionChange, { deep: true })
  },
  methods: {
    optionChange () {
      let chartOption = this.config.chartOption

      // 根据 `position`值，处理对应的 `legend` 位置
      Object.assign(chartOption.legend, mapPositionToOption[chartOption.legend.position])

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