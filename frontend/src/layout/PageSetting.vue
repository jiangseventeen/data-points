<template lang="html">
  <div class="dp-setting">
    <Title>页面设置</Title>
    <el-collapse v-model="activeName">
      <el-collapse-item title="页面尺寸" name="1">
        <el-row>
          <el-col :span="12">
            <div class="dp-form-item dp-form-vertical">
              <div class="dp-form-label">宽度</div>
              <div class="dp-form-control">
                <el-input-number
                  :min="1"
                  size="mini"
                  v-model="width"
                  style="width:100px"
                  controls-position="right"
                />
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="dp-form-item dp-form-vertical">
              <div class="dp-form-label">高度</div>
              <div class="dp-form-control">
                <el-input-number
                  :min="1"
                  size="mini"
                  v-model="height"
                  style="width:100px"
                  controls-position="right"
                />
              </div>
            </div>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item title="背景" name="2" class="dp-form-horizontal">

        <div class="dp-form-item">
          <div class="dp-form-label">背景色</div>
          <div class="dp-form-control">
            <DpColor v-model="backgroundColor"/>
          </div>
        </div>
        <div class="dp-form-item">
          <div class="dp-form-label">渐变方式</div>
          <div class="dp-form-control">
            <el-select v-model="gradientType" size="mini">
              <el-option
                v-for="item in gradientTypeOption"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="dp-form-item" v-show="gradientType !== 1">
          <div class="dp-form-label">起始色</div>
          <div class="dp-form-control">
            <DpColor v-model="colorFrom"/>
          </div>
        </div>
        <div class="dp-form-item" v-show="gradientType !== 1">
          <div class="dp-form-label">终止色</div>
          <div class="dp-form-control">
            <DpColor v-model="colorTo"/>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="缩放方式" name="4">
        <p>
          <el-radio v-model="scaleType" :label="1">等比缩放宽度铺满</el-radio>
        </p>
        <p>
          <el-radio v-model="scaleType" :label="2">等比缩放高度铺满</el-radio>
        </p>
        <p>
          <el-radio v-model="scaleType" :label="3">全屏铺满</el-radio>
        </p>
      </el-collapse-item>
      <el-collapse-item title="栅格间距" name="5">
        <el-input-number size="small" v-model="gutter" :min="1"/>
      </el-collapse-item>
      <el-collapse-item title="大屏封面" name="6">
        <img class="page-thumbnail" :src="thumbnail || '/default-thumbnail.jpg'"/>
        <el-button class="get-thumbnail" type="primary" size="small">获取截图</el-button>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import Title from "../components/base/Title"
import gradientTypeOption from "../constants/gradientType"

export default {
  name: "PageSetting",
  data() {
    return {
      activeName: ["1", "2", "3", "4", "5"],
      gradientTypeOption,
      code: '{title: 1, name: 2}'
    };
  },
  computed: {
    width: {
      get() {
        return this.$store.state.page.width;
      },
      set(value) {
        this.$store.commit("setPage", { width: value });
      }
    },

    height: {
      get() {
        return this.$store.state.page.height;
      },
      set(value) {
        this.$store.commit("setPage", { height: value });
      }
    },

    scaleType: {
      get() {
        return this.$store.state.page.scaleType;
      },
      set(value) {
        this.$store.commit("setPage", { scaleType: value });
      }
    },

    gutter: {
      get() {
        return this.$store.state.page.gutter;
      },
      set(value) {
        this.$store.commit("setPage", { gutter: value });
      }
    },

    backgroundColor: {
      get() {
        return this.$store.state.page.background.color;
      },
      set(value) {
        this.$store.commit("setBackground", { color: value });
      }
    },

    gradientType: {
      get() {
        return this.$store.state.page.background.gradientType;
      },
      set(value) {
        this.$store.commit("setBackground", { gradientType: value });
      }
    },

    colorFrom: {
      get() {
        return this.$store.state.page.background.colorStart;
      },
      set(value) {
        this.$store.commit("setBackground", { colorStart: value });
      }
    },

    colorTo: {
      get() {
        return this.$store.state.page.background.colorStop;
      },
      set(value) {
        this.$store.commit("setBackground", { colorStop: value })
      }
    },

    thumbnail () {
      return this.$store.state.page.thumbnail
    }
  },
  components: {
    Title
  }
};
</script>

<style lang="scss" scoped>
  .page-thumbnail {
    display: block;
    width: 280px;
  }

  .get-thumbnail {
    margin-top: 20px;
  }
  .editor {
    width: 100%;
    height: 400px;
  }
</style>