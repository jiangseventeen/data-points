<template>
  <div
    class="center-canvas" 
    :style="[centerPadding]"
    @click.self="unselectComponent"
    @contextmenu.prevent="handleCloseMenu"
  >
    <div
      class="canvas"
      ref="canvas"
      ondragover="return false"
      :style="[pageSize, pageScale, background]"
      @click.self="unselectComponent"
      @drop="handleDropComponent($event)"
    >
      <component
        :key="'v' + v.id"
        :config="v.config"
        :data="v.data"
        v-for="v in components"
        :is="`${v.name}-${v.version}`"
        :class="{hover: v.hover}"
        :interaction="v.interaction"
        @mouseenter.native="mouseIn(v)"
        @mouseleave.native="mouseOut(v)"
        @click.left.native="selectComponent(v)"
        @contextmenu.native.prevent.stop="handleContextMenu(v, $event)"
      />
      <transform-tool
        :key="n.id"
        :dataSrc="n"
        v-for="n in selectedComponents"
        @contextmenu.native.prevent.stop="handleContextMenu(n, $event)"
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
          }
        case 2:
          return {
            background: `linear-gradient(to right, ${colorStart}, ${colorStop})`
          }
        case 3:
          return {
            background: `linear-gradient(to bottom, ${colorStart}, ${colorStop})`
          }
        case 4:
          return {
            background: `radial-gradient(circle at center, ${colorStart}, ${colorStop})`
          }
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
    // 打开快捷菜单
    handleContextMenu (component, event) {
      this.$store.commit('selectComponent', component)
      this.$contextMenu.open(event)
    },
    // 关闭快捷菜单
    handleCloseMenu () {
      this.$contextMenu.close()
    },
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

      this.$store.commit('setPageScale', Math.round(scale * 100) / 100)
    },
    // mousewheel event handler
    handleMouseWheel (event) {
      event.preventDefault()

      // only if ctrl key is press down
      if (event.ctrlKey) {
        let scale = event.wheelDelta / 120
        this.$store.commit('setPageScale', this.$store.state.pageScale + scale / 100)
      }
    },
    // insert component by drag and drop
    handleDropComponent (event) {
      try {
        let { offsetX, offsetY } = event
        let component = JSON.parse(event.dataTransfer.getData('text/plain'))

        // put the component center on the cursor position.
        component.config.left = offsetX - component.config.width / 2
        component.config.top = offsetY - component.config.height / 2

        this.$store.commit('insertComponent', component)
      } catch (e) {
        return
      }
    }
  },
  components: {
    TransformTool
  },
  mounted () {
    this.pageResize();
    window.addEventListener('resize', this.pageResize)

    this.$refs['canvas'].addEventListener('mousewheel', this.handleMouseWheel)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.pageResize)
  }
};
</script>

<style lang="scss">
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
    position: absolute;
    transform-origin: left top;
    transition: all 0.05s linear;
    box-shadow: 0 0 15px 0px rgba(0, 0, 0, .3);
  }
}
</style>