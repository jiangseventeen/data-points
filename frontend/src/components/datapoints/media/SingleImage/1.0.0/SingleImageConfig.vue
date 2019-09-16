<template>
  <div class="dp-setting">
    <el-collapse v-model="activeName">
      <el-collapse-item title="背景" name="1">
        <dp-form-item>
          <template v-slot:label>背景图</template>
          <template v-slot:control>
            <Upload v-model="config.backgroundUrl"/>
          </template>
        </dp-form-item>

      </el-collapse-item>
      <coordinate-config :config="config"/>
    </el-collapse>
  </div>
</template>

<script>
import Upload from 'src/components/base/Upload'

export default {
  name: 'SingleImageConfig',
  props: ['config'],
  data () {
    return {
      activeName: ['1']
    }
  },
  components: {
    Upload
  }
}
</script>