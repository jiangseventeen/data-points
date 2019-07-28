<template>
  <div class="dp-setting">
    <el-collapse v-model="activeName">
      <coordinate-config :config="config"/>
      <el-collapse-item title="文本样式">
        <dp-form-item>
          <template v-slot:label>颜色</template>
          <template v-slot:control>
            <dp-color v-model="config.text.color"/>
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>字体</template>
          <template v-slot:control>
            <el-select
              size="mini"
              style="width: 120px"
              v-model="config.text.fontFamily"
              placeholder="请选择"
            >
              <el-option
                v-for="item in fontFamily"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>字号</template>
          <template v-slot:control>
            <el-input-number
              size="mini"
              style="width:100px"
              controls-position="right"
              v-model="config.text.fontSize"
            />
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>字体粗细</template>
          <template v-slot:control>
            <el-select
              size="mini"
              placeholder="请选择"
              style="width: 120px"
              v-model="config.text.fontWeight"
            >
              <el-option
                v-for="item in fontWeight"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </dp-form-item>
      </el-collapse-item>
      <el-collapse-item title="动画">
        <dp-form-item>
          <template v-slot:label>滚动间隔（秒）</template>
          <template v-slot:control>
            <el-input-number
              size="mini"
              :min="1"
              :max="5"
              style="width:100px"
              controls-position="right"
              v-model="config.rollingInterval"
            />
          </template>
        </dp-form-item>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import textAlign from 'src/constants/textAlign'
import fontWeight from 'src/constants/fontWeight'
import fontFamily from 'src/constants/fontFamily'

export default {
  name: 'RollingMessageConfig',
  props: ['config'],
  data () {
    return {
      textAlign,
      fontWeight,
      fontFamily,
      activeName: ['100']
    }
  }
}
</script>