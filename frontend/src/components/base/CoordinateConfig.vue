<template>
  <div>
    <!-- 组件位置设置 -->
    <el-collapse-item title="组件位置" name="17">
      <el-row style="margin-bottom: 10px">
        <el-col :span="12">
          <div class="dp-setting-input">
            <span class="dp-setting-input-text">宽度</span>
            <el-input-number
              size="mini"
              style="width: 90px"
              v-model="config.width"
              controls-position="right"
            />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="dp-setting-input">
            <span class="dp-setting-input-text">高度</span>
            <el-input-number
              size="mini"
              style="width: 90px"
              v-model="config.height"
              controls-position="right"
            />
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="dp-setting-input">
            <span class="dp-setting-input-text">横坐标</span>
            <el-input-number
              size="mini"
              style="width: 90px"
              v-model="config.left"
              controls-position="right"
            />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="dp-setting-input">
            <span class="dp-setting-input-text">纵坐标</span>
            <el-input-number
              size="mini"
              style="width: 90px"
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