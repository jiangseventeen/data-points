<template>
  <div class="dp-setting">
    <el-collapse v-model="activeName">
      <el-collapse-item title="图表样式">
        <el-row class="dp-form-item">
          <el-col :span="6">
            <div class="dp-form-label">背景色</div>
          </el-col>
          <el-col :span="18">
            <div class="dp-form-control">
              <dp-color v-model="config.chartOption.backgroundColor"/>
            </div>
          </el-col>
        </el-row>
        <el-row class="dp-form-item">
          <el-col :span="6">
            两边留白
            <el-tooltip>
              <div slot="content">
                类目轴的留白策略，留白则代表刻度<br/>
                作为分割线。标签和数据项置于刻度之间。
              </div>
              <Icon type="question-circle"/>
            </el-tooltip>
          </el-col>
          <el-col :span="18">
            <div class="dp-form-control">
              <el-checkbox v-model="config.chartOption.xAxis.boundaryGap"/>
              对于柱状图，建议勾选此项。
            </div>
          </el-col>
        </el-row>
        <el-row align="middle" type="flex" class="dp-form-item">
          <el-col :span="6">
            <div class="dp-form-label">图表位置</div>
          </el-col>
          <el-col :span="18">
            <chart-grid :value="config.chartOption.grid"/>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item title="X轴">
        <el-row class="dp-form-item" type="flex" align="middle">
          <el-col :span="6">标签样式</el-col>
          <el-col :span="18">
            <axis-label :value="config.chartOption.xAxis.axisLabel"/>
          </el-col>
        </el-row>
        <el-row class="dp-form-item" type="flex" align="middle">
          <el-col :span="6">显示刻度</el-col>
          <el-col :span="18" class="dp-form-inline">
            <el-checkbox v-model="config.chartOption.xAxis.splitLine.show"/>
          </el-col>
        </el-row>
        <el-row class="dp-form-item" type="flex" align="middle">
          <el-col :span="6">显示轴线</el-col>
          <el-col :span="18" class="dp-form-inline">
            <el-checkbox v-model="config.chartOption.xAxis.axisLine.show"/>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item title="Y轴">
        <el-row class="dp-form-item" type="flex" align="middle">
          <el-col :span="6">
            分割线
          </el-col>
          <el-col :span="18">
            <chart-split-line :value="config.chartOption.yAxis.splitLine"/>
          </el-col>
        </el-row>
        <el-row class="dp-form-item" type="flex" align="middle">
          <el-col :span="6">
            名称
          </el-col>
          <el-col :span="18">
            <axis-name :value="config.chartOption.yAxis"/>
          </el-col>
        </el-row>
        <el-row class="dp-form-item" type="flex" align="middle">
          <el-col :span="6">显示轴线</el-col>
          <el-col :span="18" class="dp-form-inline">
              <el-checkbox v-model="config.chartOption.yAxis.axisLine.show"/>
          </el-col>
        </el-row>
        <el-row class="dp-form-item" type="flex" align="middle">
          <el-col :span="6">显示标签</el-col>
          <el-col :span="18" class="dp-form-inline">
              <el-checkbox v-model="config.chartOption.yAxis.axisLabel.show"/>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item title="数据列">
        <el-tabs value="series1" >
          <el-tab-pane label="系列1" name="series1">
            <el-row class="dp-form-item" type="flex" align="middle">
              <el-col :span="6">
                柱宽
              </el-col>
              <el-col :span="18">
                <percent-slider v-model="config.chartOption.series[0].barWidth"/>
              </el-col>
            </el-row>
            <el-row class="dp-form-item" type="flex" align="middle">
              <el-col :span="6">
                颜色
              </el-col>
              <el-col :span="18">
                <dp-color v-model="config.chartOption.color[0]"/>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-collapse-item>
      <coordinate-config :config="config"/>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'BaseBarChartConfig',
  props: ['config'],
  data () {
    return {
      activeName: ['100']
    }
  }
}
</script>