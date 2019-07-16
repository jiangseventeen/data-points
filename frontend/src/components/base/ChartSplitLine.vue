<!-- echarts分割线样式配置 -->
<template>
  <div class="chart-split-line">
    <div class="dp-form-item dp-form-horizontal">
      <div class="dp-form-label">显示</div>
      <div class="dp-form-control">
        <el-checkbox v-model="value.show"/>
      </div>
    </div>
    <div class="dp-form-item dp-form-horizontal">
      <div class="dp-form-label">颜色</div>
      <div class="dp-form-control">
        <dp-color v-model="value.lineStyle.color"/>
      </div>
    </div>
    <div class="dp-form-item dp-form-horizontal">
      <div class="dp-form-label">类型</div>
      <div class="dp-form-control">
        <el-select v-model="value.lineStyle.type" size="mini" style="width: 120px">
          <el-option label="实线" value="solid"></el-option>
          <el-option label="虚线" value="dashed"></el-option>
          <el-option label="原点" value="dotted"></el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartSplitLine',
  props: ['value']
}
</script>

<style lang="scss">
@import 'src/assets/scss/_variables.scss';

.chart-split-line {
  padding-left: 12px;
  border-left: 2px solid $primary-background-color;

  .dp-form-item {
    margin-bottom: 8px;
  }
}
</style>