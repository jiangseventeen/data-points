<!-- 图表文本样式组建，用于echarts图表字体样式的配置 -->
<template>
  <el-row class="c-padding">
    <el-col :span="24" class="dp-form-item dp-form-horizontal">
      <div class="dp-form-label">颜色</div>
      <div class="dp-form-control">
        <dp-color v-model="value.color"/>
      </div>
    </el-col>
    <el-col :span="24" class="dp-form-item dp-form-horizontal">
      <div class="dp-form-label">字号</div>
      <div class="dp-form-control">
        <el-input-number
          size="mini"
          style="width:100px"
          controls-position="right"
          v-model="value.fontSize"
        />
      </div>
    </el-col>
    <el-col :span="24" class="dp-form-item dp-form-horizontal">
      <div class="dp-form-label">字体粗细</div>
      <div class="dp-form-control">
        <el-select
          size="mini"
          placeholder="请选择"
          style="width: 120px"
          v-model="value.fontWeight"
        >
          <el-option
            v-for="item in fontWeight"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import fontWeight from 'src/constants/fontWeight'

export default {
  name: 'TextStyle',
  props: ['value'],
  data () {
    return {
      fontWeight
    }
  }

}
</script>

<style lang="scss">
@import 'src/assets/scss/_variables.scss';

.c-padding {
  padding-left: 12px;
  border-left: 2px solid $primary-background-color;


  .dp-form-item {
    margin-bottom: 8px;
  }
}

</style>