<template>
  <div class="border-config">
    <div class="dp-form-item dp-form-horizontal">
      <div class="dp-form-label">宽度</div>
      <div class="dp-form-control">
        <el-input-number
          size="mini"
          :min="0"
          :max="20"
          style="width: 90px"
          controls-position="right"
          v-model="value.borderWidth"
        />
      </div>
    </div>
    <div class="dp-form-item dp-form-horizontal">
      <div class="dp-form-label">颜色</div>
      <div class="dp-form-control">
        <dp-color v-model="value.borderColor"/>
      </div>
    </div>
    <div class="dp-form-item dp-form-horizontal">
      <div class="dp-form-label">类型</div>
      <div class="dp-form-control">
        <el-select
          size="mini"
          style="width: 100px"
          v-model="value.borderType"
        >
          <el-option
            v-for="item in borderStyle"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="dp-form-item dp-form-horizontal">
      <div class="dp-form-label">内边距</div>
      <div class="dp-form-control">
        <el-input-number
          size="mini"
          :min="0"
          :max="100"
          style="width: 90px"
          controls-position="right"
          v-model="value.padding"
        />
      </div>
    </div>
    <div class="dp-form-item dp-form-horizontal">
      <div class="dp-form-label">圆角</div>
      <div class="dp-form-control">
        <el-slider
          :max="50"
          v-model="value.borderRadius"
        />
      </div>
    </div>
  </div>
</template>

<script>
import borderStyle from 'src/constants/borderStyle'

export default {
  name: 'BorderConfig',
  props: ['value'],
  data () {
    return {
      borderStyle
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/_variables.scss';

.border-config {
  padding-left: 12px;
  border-left: 2px solid $primary-background-color;
}
</style>