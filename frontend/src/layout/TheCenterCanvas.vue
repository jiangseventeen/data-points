<template>
  <div class="center-canvas" :style="[centerPadding]">
    <div class="canvas" :style="[pageSize, pageScale, background]">
      <component
        v-for="cp in components"
        :is="cp.name"
        :key="cp.id"
        @click.native="selectComponent(cp)"
        :class="{hover: cp.hover}"
        :data="cp.data"
      />
    </div>
  </div>
</template>

<script>
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
    checkedComponents () {
      return this.$store.state.checkedComponentList
    }
  },
  methods: {
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
    }
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
  overflow: auto;

  .canvas {
    transform-origin: left top;
    transition: all 0.2s linear;
    position: absolute;
  }
}
</style>