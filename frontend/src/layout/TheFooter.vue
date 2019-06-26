<template>
  <div class="footer">
    <div class="footer-resize">
      <span class="icon-button-minus" @click="zoomDown"><i class="fa fa-search-minus"></i></span>
      <div class="footer-slider">
        <el-slider v-model="pageScale" :show-tooltip="true"></el-slider>
      </div>
      <span class="icon-button-add" @click="zoomUp"><i class="fa fa-search-plus"></i></span>
      <span class="footer-size-text" v-text="pageScale + '%'"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  computed: {
    pageScaleValue () {
      return (this.$store.state.pageScale * 100).toFixed(2)
    },
    pageScale: {
      get () {
        return this.$store.state.pageScale * 100
      },
      set (value) {
        this.$store.commit('setPageScale', value / 100)
      }
    }
  },
  methods: {
    zoomUp () {
      this.$store.commit('setPageScale', this.$store.state.pageScale + 0.1)
    },
    zoomDown () {
      this.$store.commit('setPageScale', this.$store.state.pageScale - 0.1)
    }
  }
}
</script>
<style lang="scss" scope>
@import 'src/assets/scss/_variables';

.footer {
  position: absolute;
  height: $bottom-footer-height;
  left: $left-sidebar-width;
  right: $right-sidebar-width;
  bottom: 0;
  background: $primary-background-color;

  .footer-resize {
    float: right;
    position: relative;

    .footer-slider {
      width: 250px;
      padding: 0 100px 0 30px;
    }

    .icon-button-add, .icon-button-minus, .dp-footer-size-text {
      position: absolute;
      top: 8px;
      color: #20a0ff;
      cursor: pointer;
    }

    .icon-button-minus {
      left: -8px;
    }

    .icon-button-add {
      right: 70px;
    }
    .dp-footer-size-text {
      right: 10px;
      color: #333;
      font-size: 12px;
    }
  }
}
</style>