<template>
  <div>
    <!-- 组件位置设置 -->
    <el-collapse-item title="组件位置" name="17">
      <el-row class="dp-form-item dp-form-vertical">
        <el-col :span="12">
          <div class="dp-form-label">宽度</div>
          <div class="dp-form-control">
            <el-input-number
              size="mini"
              style="width: 110px"
              v-model="config.width"
              controls-position="right"
            />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="dp-form-label">高度</div>
          <div class="dp-form-control">
            <el-input-number
              size="mini"
              style="width: 110px"
              v-model="config.height"
              controls-position="right"
            />
          </div>
        </el-col>
      </el-row>
      <el-row class="dp-form-item dp-form-vertical">
        <el-col :span="12">
          <div class="dp-form-label">横坐标</div>
          <div class="dp-form-control">
            <el-input-number
              size="mini"
              style="width: 110px"
              v-model="config.left"
              controls-position="right"
            />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="dp-form-label">纵坐标</div>
          <div class="dp-form-control">
            <el-input-number
              size="mini"
              style="width: 110px"
              v-model="config.top"
              controls-position="right"
            />
          </div>
        </el-col>
      </el-row>
    </el-collapse-item>
  </div>
</template>

<script>
export default {
  name: 'CoordinateConfig',
  props: ['config']
}
</script>