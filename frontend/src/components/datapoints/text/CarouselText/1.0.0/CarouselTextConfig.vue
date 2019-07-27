<template>
  <div class="dp-setting">
    <el-collapse v-model="activeName">
      <el-collapse-item title="文本" name="100">
        <dp-form-item>
          <template v-slot:label>颜色</template>
          <template v-slot:control>
            <dp-color v-model="config.color"/>
          </template>
        </dp-form-item>
      </el-collapse-item>

      <el-collapse-item title="动画">
        <dp-form-item>
          <template v-slot:label>轮播动画</template>
          <template v-slot:control>
            <el-checkbox v-model="config.isCarousel"/>
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>动画间隔</template>
          <template v-slot:control>
            <el-input-number
              size="mini"
              :min="0"
              :max="5"
              style="width: 100px"
              controls-position="right"
              v-model="config.interval"
            />
          </template>
        </dp-form-item>
      </el-collapse-item>
      <coordinate-config :config="config"/>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'CarouselTextConfig',
  props: ['config'],
  data () {
    return {
      activeName: ['100']
    }
  }
}
</script>