<template>
  <div class="dp-setting">
    <el-collapse v-model="activeName">
      <el-collapse-item title="标题内容" name="1">
        <el-input size="small" v-model="config.title" placeholder="请输入内容"/>
      </el-collapse-item>
      <el-collapse-item title="文本样式" name="2">
        <el-row class="dp-form-item" type="flex" align="middle">
          <el-col :span="6">
            字体
            <el-tooltip placement="right">
              <div slot="content">
                当前字体大多内置于windows<br>MacOS可能无法预览其效果
              </div>
              <i class="fa fa-question-circle question" aria-hidden="true"/>
            </el-tooltip>
          </el-col>
          <el-col :span="18">
            <el-select
              size="mini"
              style="width: 120px"
              v-model="config.fontFamily"
              placeholder="请选择"
            >
              <el-option
                v-for="item in fontFamily"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row class="dp-form-item" type="flex" align="middle">
          <el-col :span="6">
            字号
            <el-tooltip placement="right">
              <div slot="content">
                由于chrome无法显示12像素以下的字体<br>请避免使用小于12像素的字体
              </div>
              <i class="fa fa-question-circle question" aria-hidden="true"/>
            </el-tooltip>
          </el-col>
          <el-col :span="18">
            <el-input-number
              size="mini"
              style="width:100px"
              controls-position="right"
              v-model="config.fontSize"
            />
          </el-col>
        </el-row>
        <el-row class="dp-form-item" type="flex" align="middle">
          <el-col :span="6">字体颜色</el-col>
          <el-col :span="18">
            <dp-color v-model="config.color"/>
          </el-col>
        </el-row>
        <el-row class="dp-form-item" type="flex" align="middle">
          <el-col :span="6">字体粗细</el-col>
          <el-col :span="18">
            <el-select
              size="mini"
              placeholder="请选择"
              style="width: 120px"
              v-model="config.fontWeight"
            >
              <el-option
                v-for="item in fontWeight"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row class="dp-form-item" type="flex" align="middle">
          <el-col :span="6">字体间距</el-col>
          <el-col :span="18">
            <el-slider v-model="config.letterSpacing" :max="50"></el-slider>
          </el-col>
        </el-row>
        <el-row class="dp-form-item" type="flex" align="middle">
          <el-col :span="6">对齐方式</el-col>
          <el-col :span="18">
            <el-select
              size="mini"
              style="width: 120px"
              v-model="config.textAlign"
              placeholder="请选择"
            >
              <el-option
                v-for="item in textAlign"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-collapse-item>
      <coordinate-config :config="config"/>
    </el-collapse>
  </div>
</template>

<script>
import fontWeight from 'src/constants/fontWeight'
import fontFamily from 'src/constants/fontFamily'
import textAlign from 'src/constants/textAlign'

export default {
  name: 'commonTitleConfig',
  data () {
    return {
      fontFamily,
      fontWeight,
      textAlign,
      activeName: ['1', '2', '3', '4'],
    }
  },
  props: ['config']
}
</script>