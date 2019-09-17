<template>
  <div class="dp-setting">
    <el-collapse v-model="activeName">
      <el-collapse-item title="背景" name="1">
        <dp-form-item>
          <template v-slot:label>背景图</template>
          <template v-slot:control>
            <dp-color v-model="config.backgroundColor"/>
          </template>
        </dp-form-item>
        <el-row type="flex" align="middle">
          <el-col :span="8">边框</el-col>
          <el-col :span="16">
            <border-config :value="config"/>
          </el-col>
        </el-row>
      </el-collapse-item>
      <coordinate-config :config="config"/>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'SingleImageConfig',
  props: ['config'],
  data () {
    return {
      activeName: ['1']
    }
  }
}
</script>