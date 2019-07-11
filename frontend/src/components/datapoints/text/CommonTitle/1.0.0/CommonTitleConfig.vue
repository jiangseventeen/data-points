<template>
  <div class="com-setting">
    <component-title
      title="通用标题"
      version="1.0.0"
      tips="标题组件，适用于标题或单行文本。"
    />
    <el-collapse v-model="activeName">
      <el-collapse-item title="标题内容" name="1">
        <el-input size="small" v-model="config.title" placeholder="请输入内容"/>
      </el-collapse-item>
      <el-collapse-item title="文本样式" name="2">
        <div class="dp-form-item">
          <label class="dp-form-label">
            字体
            <el-tooltip placement="right">
              <div slot="content">
                当前字体大多内置于windows<br>MacOS可能无法预览其效果
              </div>
              <i class="fa fa-question-circle question" aria-hidden="true"/>
            </el-tooltip>
          </label>
          <div class="dp-form-input-wrap">
            <el-select size="mini" style="width: 120px" v-model="config.fontFamily" placeholder="请选择">
              <el-option
                v-for="item in fontFamily"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="dp-form-item">
          <label class="dp-form-label">
            字号
            <el-tooltip placement="right">
              <div slot="content">
                由于chrome无法显示12像素以下的字体<br>请避免使用小于12像素的字体
              </div>
              <i class="fa fa-question-circle question" aria-hidden="true"/>
            </el-tooltip>
          </label>
          <div class="dp-form-input-wrap">
            <el-input-number
              size="mini"
              style="width:100px"
              controls-position="right"
              v-model="config.fontSize"
            />
          </div>
        </div>
        <div class="dp-form-item">
          <label class="dp-form-label">字体颜色</label>
          <div class="dp-form-input-wrap">
            <dp-color v-model="config.color"/>
          </div>
        </div>
        <div class="dp-form-item">
          <label class="dp-form-label">字体粗细</label>
          <div class="dp-form-input-wrap">
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
          </div>
        </div>
        <div class="dp-form-item">
          <label class="dp-form-label">字体间距</label>
          <div class="dp-form-input-wrap">
            <el-slider v-model="config.letterSpacing" :max="50"></el-slider>
          </div>
        </div>
        <div class="dp-form-item">
          <label class="dp-form-label">对齐方式</label>
          <div class="dp-form-input-wrap">
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
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="图表尺寸" name="3">
        <el-row>
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
      </el-collapse-item>
      <el-collapse-item title="图表位置" name="4">
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
    </el-collapse>
  </div>
</template>

<script>
import fontWeight from 'src/constants/fontWeight'
import fontFamily from 'src/constants/fontFamily'

export default {
  name: 'commonTitleConfig',
  data () {
    return {
      fontFamily,
      fontWeight,
      activeName: ['1', '2', '3', '4'],
      textAlign: [
        {value: 'left', label: '左对齐'},
        {value: 'right', label: '右对齐'},
        {value: 'center', label: '居中对齐'}
      ]
    }
  },
  props: ['config']
}
</script>