<!-- echarts 坐标轴名称配置表单 -->

<template>
  <div class="axis-name">
    <div class="dp-form-item dp-form-horizontal">
      <div class="dp-form-label">名称</div>
      <div class="dp-form-control">
        <el-input size="mini" v-model="value.name" style="width: 120px"/>
      </div>
    </div>
    <div class="dp-form-item dp-form-horizontal">
      <div class="dp-form-label">位置</div>
      <div class="dp-form-control">
        <el-select v-model="value.nameLocation" size="mini" style="width: 120px">
          <el-option label="起点" value="start"></el-option>
          <el-option label="终点" value="end"></el-option>
          <el-option label="中间" value="center"></el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AxisName',
  props: ['value']
}
</script>

<style lang="scss">
@import 'src/assets/scss/_variables.scss';

.axis-name {
  padding-left: 12px;
  border-left: 2px solid $primary-background-color;

  .dp-form-item {
    margin-bottom: 8px;
  }
}
</style>