<!-- echarts 图表坐标轴标签设置 -->
<template>
  <div class="axis-label">
    <div class="dp-form-item dp-form-horizontal">
      <div class="dp-form-label">显示</div>
      <div class="dp-form-control">
        <el-checkbox v-model="value.show"/>
      </div>
    </div>
    <div class="dp-form-item dp-form-horizontal">
      <div class="dp-form-label">颜色</div>
      <div class="dp-form-control">
        <dp-color v-model="value.color"/>
      </div>
    </div>
    <div class="dp-form-item dp-form-horizontal">
      <div class="dp-form-label">字号</div>
      <div class="dp-form-control">
        <el-input-number
          size="mini"
          style="width: 90px"
          v-model="value.fontSize"
          controls-position="right"
        />
      </div>
    </div>
    <div class="dp-form-item dp-form-horizontal">
      <div class="dp-form-label">旋转</div>
      <div class="dp-form-control">
        <el-input-number
          size="mini"
          :min="-90"
          :max="90"
          style="width: 90px"
          v-model="value.rotate"
          controls-position="right"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AxisLabel',
  props: ['value'],
}
</script>

<style lang="scss">
@import 'src/assets/scss/_variables.scss';

.axis-label {
  padding-left: 12px;
  border-left: 2px solid $primary-background-color;

  .dp-form-item {
    margin-bottom: 8px;
  }
}
</style>