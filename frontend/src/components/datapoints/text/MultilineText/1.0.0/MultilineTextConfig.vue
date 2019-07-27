<template>
  <div class="dp-setti">
    <el-collapse v-model="activeName">
      <el-collapse-item title="文本样式" name="100">
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
        <dp-form-item>
          <template v-slot:label>行高</template>
          <template v-slot:control>
            <el-input-number
              size="mini"
              :step="0.1"
              :min="0"
              :max="3"
              controls-position="right"
              v-model="config.text.lineHeight"
            />
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>对齐方式</template>
          <template v-slot:control>
            <el-select
              size="mini"
              style="width: 120px"
              v-model="config.text.textAlign"
              placeholder="请选择"
            >
              <el-option
                v-for="item in textAlign"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>首行缩进</template>
          <template v-slot:control>
            <el-slider
              v-model="config.text.textIndent"
            />
          </template>
        </dp-form-item>
      </el-collapse-item>
      <coordinate-config :config="config"/>
    </el-collapse>
  </div>
</template>

<script>
import textAlign from 'src/constants/textAlign'
import fontWeight from 'src/constants/fontWeight'
import fontFamily from 'src/constants/fontFamily'

export default {
  name: 'MultilineTextConfig',
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