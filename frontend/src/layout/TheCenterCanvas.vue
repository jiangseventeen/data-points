<template>
  <div
    class="center-canvas" 
    :style="[centerPadding]"
    @click.self.stop="unselectComponent"
  >
    <div
      class="canvas"
      :style="[pageSize, pageScale, background]"
      @click.self.stop="unselectComponent"
    >
      <component
        v-for="v in components"
        :is="`${v.name}-${v.version}`"
        :key="'v' + v.id"
        @click.native.stop="selectComponent(v)"
        :class="{hover: v.hover}"
        :config="v.config"
        :data="v.data"
        :interaction="v.interaction"
      />
      <transform-tool
        :key="n.id"
        v-for="n in selectedComponents"
        :dataSrc="n"
        @mouseenter.native="mouseIn(n)"
        @mouseleave.native="mouseOut(n)"
      />
    </div>
  </div>
</template>

<script>
import TransformTool from './TransformTool'

export default {
  name: "TheCenterCanvas",
  data () {
    return {
      centerPadding: {}
    }
  },
  computed: {
    pageSize () {
      let { width, height } = this.$store.state.page;
      return {
        width: `${width}px`,
        height: `${height}px`
      }
    },
    pageScale() {
      let { pageScale } = this.$store.state;
      return { transform: `scale(${pageScale})` };
    },
    background() {
      let {
        color,
        image,
        gradientType,
        colorStart,
        colorStop
      } = this.$store.state.page.background;

      switch (gradientType) {
        case 1:
          return { 
            'background-color': color,
            'background-image': image
          };
        case 2:
          return {
            background:
              `linear-gradient(to right, ${colorStart}, ${colorStop})`
          };
        case 3:
          return {
            background:
              `linear-gradient(to bottom, ${colorStart}, ${colorStop})`
          };
        case 4:
          return {
            background:
              `radial-gradient(circle at center, ${colorStart}, ${colorStop})`
          };
        default:
          return { background: '#000'}
      }
    },
    components () {
      return this.$store.state.renderComponentList
    },
    selectedComponents () {
      return this.$store.getters.selectedComponentList
    },
  },
  methods: {
    // 取消全部组件选中状态
    unselectComponent () {
      this.$store.commit('unselectComponent')
    },
    // 选中某个组件
    selectComponent (component) {
      this.$store.commit('selectComponent', component)
    },
    // 鼠标进入
    mouseIn (item) {
      this.$store.commit('hoverComponent', item)
    },
    // 鼠标离开
    mouseOut (item) {
      this.$store.commit('unhoverComponent', item)
    },
    pageResize () {
      let viewportWdith = window.innerWidth
      let viewportHeight = window.innerHeight

      let centerWidth = viewportWdith - 220 - 340
      let centerHeight = viewportHeight - 85

      let pageWidth = this.$store.state.page.width;
      let pageHeight = this.$store.state.page.height;

      let scale = Math.min((centerWidth - 60) / pageWidth, (centerHeight - 60) / pageHeight)
      this.centerPadding = {
        'padding-left': (centerWidth - pageWidth * scale) / 2 + 'px',
        'padding-top': (centerHeight - pageHeight * scale) / 2 + 'px'
      }
     
      this.$store.commit('setPageScale', scale)
    },

  },
  components: {
    TransformTool
  },
  created () {
    this.pageResize();
    window.addEventListener('resize', this.pageResize)
  }
};
</script>

<style lang="scss" scope>
@import "src/assets/scss/_variables.scss";

.center-canvas {
  position: absolute;
  top: $top-heading-height;
  left: $left-sidebar-width;
  right: $right-sidebar-width;
  bottom: $bottom-footer-height;
  user-select: none;
  overflow: auto;

  .canvas {
    transform-origin: left top;
    transition: all 0.2s linear;
    position: absolute;
  }
}
</style>