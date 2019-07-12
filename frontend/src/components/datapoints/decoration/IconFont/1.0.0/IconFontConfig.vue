<template>
  <div class="dp-setting">
    <div class="dp-setting-heading">字体图标库</div>
    <el-collapse v-model="activeName">
      <el-collapse-item title="图标样式" name="100">
        <div class="dp-form-item">
          <label class="dp-form-label">
            字号
            <el-tooltip placement="right">
              <div slot="content">通过字号来设置图标大小</div>
              <i class="fa fa-question-circle question" aria-hidden="true"/>
            </el-tooltip>
          </label>
          <div class="dp-form-input-wrap">
            <el-input-number
              size="mini"
              style="width: 100px"
              controls-position="right"
              v-model="config.fontSize"
            />
          </div>
        </div>
        <div class="dp-form-item">
          <label class="dp-form-label">
            颜色
          </label>
          <div class="dp-form-input-wrap">
            <DpColor v-model="config.color"/>
          </div>
        </div>
      </el-collapse-item>
      <!-- 图标库 -->
      <el-collapse-item :title="item.classify" v-for="(item, index) in fa" :key="index" :name="index">
        <ul class="font-awesome-list clearfix">
            <li v-for="icon in item.icons" :key="icon">
              <Icon :type="icon" @click.native="chooseIcon(icon)"/>
            </li>
        </ul>
      </el-collapse-item>
      <!-- 图标位置设置区域 -->
      <el-collapse-item title="图表尺寸" name="17">
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
      <!-- 图标位置设置区域 -->
      <el-collapse-item title="图表位置" name="18">
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
import fa from './fa'
import Icon from "../../../../base/Icon";

export default {
  name: 'iconFontConfig',
  props: ['config'],
  data () {
    return {
      fa,
      activeName: ['100']
    }
  },
  methods: {
    chooseIcon (icon) {
      this.config.icon = icon
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
    float: left;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #d9d9d9;
    margin: -1px 0 0 -1px;
    list-style: none;
    cursor: pointer;
    &:hover{
      i {
        transition: all .1s linear;
        transform: scale(2);
      }
    }
  }
}
</style>