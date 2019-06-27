<template>
  <div class="com-setting">
    <div class="com-setting-heading">通用标题</div>
    <el-collapse v-model="activeName">
      <el-collapse-item title="标题内容" name="1">
        <el-input v-model="data.title" placeholder="请输入内容"></el-input>
      </el-collapse-item>
      <el-collapse-item title="文本样式" name="2">
        <div class="dp-form-item">
          <label class="dp-form-label">
            字体
            <el-tooltip placement="right">
              <div slot="content">最终显示字体取决于<br>目标机器是否安装该字体</div>
              <i class="fa fa-question-circle question" aria-hidden="true"></i>
            </el-tooltip>
          </label>
          <div class="dp-form-input-wrap">
            <el-select v-model="data.fontFamily" placeholder="请选择">
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
              <div slot="content">由于chrome无法显示12像素以下的字体<br>请避免使用小于12像素的字体</div>
              <i class="fa fa-question-circle question" aria-hidden="true"></i>
            </el-tooltip>
          </label>
          <div class="dp-form-input-wrap">
            <el-input-number v-model="data.fontSize"></el-input-number>
          </div>
        </div>
        <div class="dp-form-item">
          <label class="dp-form-label">字体颜色</label>
          <div class="dp-form-input-wrap">
            <el-color-picker v-model="data.color"></el-color-picker>
          </div>
        </div>
        <div class="dp-form-item">
          <label class="dp-form-label">字体粗细</label>
          <div class="dp-form-input-wrap">
            <el-select v-model="data.fontWeight" placeholder="请选择">
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
            <el-slider v-model="data.letterSpacing" :max="50"></el-slider>
          </div>
        </div>
        <div class="dp-form-item">
          <label class="dp-form-label">对齐方式</label>
          <div class="dp-form-input-wrap">
            <el-select v-model="data.textAlign" placeholder="请选择">
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
            <div class="com-setting-input">
              <span class="com-setting-input-text">宽度</span>
              <el-input v-model="data.width" style="width:100px"></el-input>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="com-setting-input">
              <span class="com-setting-input-text">高度</span>
              <el-input v-model="data.height" style="width:100px"></el-input>
            </div>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item title="图表位置" name="4">
        <el-row>
          <el-col :span="12">
            <div class="com-setting-input">
              <span class="com-setting-input-text">横坐标</span>
              <el-input v-model="data.left" style="width:100px"></el-input>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="com-setting-input">
              <span class="com-setting-input-text">纵坐标</span>
              <el-input v-model="data.top" style="width:100px"></el-input>
            </div>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
 export default {
   name: 'commonTitleConfig',
   data () {
     return {
       activeName: ['1', '2', '3', '4'],
       fontFamily: [
         {value: 'Microsoft yahei', label: '微软雅黑'},
         {value: 'songti', label: '宋体'},
         {value: 'heiti', label: '黑体'},
         {value: 'lishu', label: '隶书'},
         {value: 'youyuan', label: '幼圆'},
         {value: 'Arial', label: 'Arial'}
       ],
       fontWeight: [
         {value: '700', label: '加粗'},
         {value: '500', label: '正常'},
         {value: '100', label: '纤细'}
       ],
       textAlign: [
         {value: 'left', label: '左对齐'},
         {value: 'right', label: '右对齐'},
         {value: 'center', label: '居中对齐'}
       ]
     }
   },
   props: ['data']
 }
</script>