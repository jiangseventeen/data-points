<template>
  <div class="com-setting">
    <div class="com-setting-heading">字体图标库</div>
    <el-collapse v-model="activeName">
      <el-collapse-item title="图标样式" name="1">
        <div class="dp-form-item">
          <label class="dp-form-label">
            字号
            <el-tooltip placement="right">
              <div slot="content">通过字号来设置图标大小</div>
              <i class="fa fa-question-circle question" aria-hidden="true"/>
            </el-tooltip>
          </label>
          <div class="dp-form-input-wrap">
            <el-input-number v-model="data.fontSize"/>
          </div>
        </div>
        <div class="dp-form-item">
          <label class="dp-form-label">
            颜色
          </label>
          <div class="dp-form-input-wrap">
            <el-color-picker v-model="data.color"/>
          </div>
        </div>
      </el-collapse-item>
      <!-- 图标库 -->
      <el-collapse-item title="App" name="2">
        <ul class="font-awesome-list clearfix">
          <li v-for="icon in App" :key="icon">
            <Icon :type="icon" @click="chooseIcon(icon)"/>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="无障碍" name="3">
        <ul class="font-awesome-list clearfix">
          <li v-for="icon in Accessibility" :key="icon">
            <Icon :type="icon" @click="chooseIcon(icon)"/>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="手型" name="4">
        <ul class="font-awesome-list clearfix">
          <li v-for="icon in Hand" :key="icon">
            <Icon :type="icon" @click="chooseIcon(icon)"/>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="交通" name="5">
        <ul class="font-awesome-list clearfix">
          <li v-for="icon in Transportation" :key="icon">
            <Icon :type="icon" @click="chooseIcon(icon)"/>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="性别" name="6">
        <ul class="font-awesome-list clearfix">
          <li v-for="icon in Gender" :key="icon">
            <Icon :type="icon" @click="chooseIcon(icon)"/>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="文件" name="7">
        <ul class="font-awesome-list clearfix">
          <li v-for="icon in File" :key="icon">
            <Icon :type="icon" @click="chooseIcon(icon)"/>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="Loading" name="8">
        <ul class="font-awesome-list clearfix">
          <li v-for="icon in Spinner" :key="icon">
            <Icon :type="icon" @click="chooseIcon(icon)"/>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="表单" name="9">
        <ul class="font-awesome-list clearfix">
          <li v-for="icon in Form" :key="icon">
            <Icon :type="icon" @click="chooseIcon(icon)"/>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="支付" name="10">
        <ul class="font-awesome-list clearfix">
          <li v-for="icon in Payment" :key="icon">
            <Icon :type="icon" @click="chooseIcon(icon)"/>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="图表" name="11">
        <ul class="font-awesome-list clearfix">
          <li v-for="icon in Chart" :key="icon">
            <Icon :type="icon" @click="chooseIcon(icon)"/>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="货币" name="12">
        <ul class="font-awesome-list clearfix">
          <li v-for="icon in Currency" :key="icon">
            <Icon :type="icon" @click="chooseIcon(icon)"/>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="文本编辑器" name="13">
        <ul class="font-awesome-list clearfix">
          <li v-for="icon in Texts" :key="icon">
            <Icon :type="icon" @click="chooseIcon(icon)"/>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="指向标识" name="14">
        <ul class="font-awesome-list clearfix">
          <li v-for="icon in Directional" :key="icon">
            <Icon :type="icon" @click="chooseIcon(icon)"/>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="影音" name="15">
        <ul class="font-awesome-list clearfix">
          <li v-for="icon in Video" :key="icon">
            <Icon :type="icon" @click="chooseIcon(icon)"/>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="商标" name="16">
        <ul class="font-awesome-list clearfix">
          <li v-for="icon in Brand" :key="icon">
            <Icon :type="icon" @click="chooseIcon(icon)"/>
          </li>
        </ul>
      </el-collapse-item>
      <!-- 图标位置设置区域 -->
      <el-collapse-item title="图表尺寸" name="17">
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
      <!-- 图标位置设置区域 -->
      <el-collapse-item title="图表位置" name="18">
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
import fa from './fa'
import Icon from "../../../../base/Icon";

export default {
  name: 'iconFontConfig',
  props: ['data'],
  data () {
    return {
      activeName: ['1', '17', '18'],
      App: fa.app,
      Accessibility: fa.accessibility,
      Hand: fa.hand,
      Transportation: fa.transportation,
      Gender: fa.gender,
      File: fa.file,
      Spinner: fa.spinner,
      Form: fa.form,
      Payment: fa.payment,
      Chart: fa.chart,
      Currency: fa.currency,
      Texts: fa.text,
      Directional: fa.directional,
      Video: fa.video,
      Brand: fa.brand
    }
  },
  methods: {
    chooseIcon (icon) {
      this.data.icon = icon
    }
  },
  components: {
    Icon
  }
}
</script>
<style lang="scss" scoped>
.font-awesome-list {
  padding: 0;
  li {
    width: 40px;
    height: 40px;
    font-size: 20px;
    text-align: center;
    vertical-align: middle;
    line-height: 40px;
    float: left;
    cursor: pointer;
    border: 1px solid #d9d9d9;
    &:hover{
      i {
        transition: all .1s linear;
        transform: scale(2);
      }
    }
  }
}
</style>