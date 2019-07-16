<!-- 图表边距配置组件，封装了echarts图表上下左右边距设置 -->
<template>
  <el-row class="c-padding">
    <el-col :span="12" class="dp-form-vertical">
      <div class="dp-form-label">顶边距</div>
      <div class="dp-form-control">
        <el-input-number
          size="mini"
          style="width: 90px"
          v-model="value.top"
          controls-position="right"
        />
      </div>
    </el-col>
    <el-col :span="12" class="dp-form-vertical">
      <div class="dp-form-label">底边距</div>
      <div class="dp-form-control">
        <el-input-number
          size="mini"
          style="width: 90px"
          v-model="value.bottom"
          controls-position="right"
        />
      </div>
    </el-col>
    <el-col :span="12" class="dp-form-vertical">
      <div class="dp-form-label">左边距</div>
      <div class="dp-form-control">
        <el-input-number
          size="mini"
          style="width: 90px"
          v-model="value.left"
          controls-position="right"
        />
      </div>
    </el-col>
    <el-col :span="12" class="dp-form-vertical">
      <div class="dp-form-label">右边距</div>
      <div class="dp-form-control">
        <el-input-number
          size="mini"
          style="width: 90px"
          v-model="value.right"
          controls-position="right"
        />
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'ChartGrid',
  props: ['value'],

}
</script>

<style lang="scss">
@import 'src/assets/scss/_variables.scss';

.c-padding {
  padding-left: 12px;
  border-left: 2px solid $primary-background-color;
}

</style>