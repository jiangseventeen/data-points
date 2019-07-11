<template>
  <div
    class="transform-tool"
    :style="position"
  >
    <div class="handler-container">
      <div class="topleft" v-on:mousedown.prevent="mousedownResize('top', 'left', $event)"/>
      <div class="top" v-on:mousedown.prevent="mousedownResize('top', null, $event)"/>
      <div class="topright" v-on:mousedown.prevent="mousedownResize('top', 'right', $event)"></div>
      <div class="left" v-on:mousedown.prevent="mousedownResize('top', 'left', $event)"></div>
      <div class="right" v-on:mousedown.prevent="mousedownResize(null, 'right', $event)"></div>
      <div class="bottomleft" v-on:mousedown.prevent="mousedownResize('bottom', 'left', $event)"></div>
      <div class="bottom" v-on:mousedown.prevent="mousedownResize('bottom', null, $event)"></div>
      <div class="bottomright" v-on:mousedown.prevent="mousedownResize('bottom', 'right', $event)"></div>
      <div class="move-handler" v-on:mousedown.left.prevent="mousedownMove"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'transformTool',
    props: ['dataSrc'],
    data () {
      return {
        startX: 0,
        startY: 0,
        xAxis: '',
        yAxis: ''
      }
    },
    computed: {
      width: {
        get () {
          return this.dataSrc.config.width
        },
        set (value) {
          this.dataSrc.config.width = value
        }
      },
      height: {
        get () {
          return this.dataSrc.config.height
        },
        set (value) {
          this.dataSrc.config.height = value
        }
      },
      left: {
        get () {
          return this.dataSrc.config.left
        },
        set (value) {
          this.dataSrc.config.left = value
        }
      },
      top: {
        get () {
          return this.dataSrc.config.top
        },
        set (value) {
          this.dataSrc.config.top = value
        }
      },
      pageScale (){
        return this.$store.state.pageScale
      },
      position () {
        return {
          width: `${this.width}px`,
          height: `${this.height}px`,
          left: `${this.left}px`,
          top: `${this.top}px`,
        }
      }
    },
    methods: {
      // 组件拖拽鼠标按键事件
      mousedownMove (event) {
        this.startX = event.pageX - this.left * this.$store.state.pageScale
        this.startY = event.pageY - this.top * this.$store.state.pageScale

        document.addEventListener('mousemove', this.mousemoveMove)
        document.addEventListener('mouseup', this.clearListener)
      },
      // 组件拖拽鼠标移动事件
      mousemoveMove (event) {
        let _newLeft = parseInt((event.pageX - this.startX) / this.$store.state.pageScale)
        let _newTop = parseInt((event.pageY - this.startY) / this.$store.state.pageScale)
        let gutter = this.$store.state.page.gutter

        if (Math.abs(_newLeft - this.left) > gutter) {
          this.left = parseInt(_newLeft / gutter) * gutter
        }
        if (Math.abs(_newTop - this.top) > gutter) {
          this.top = parseInt(_newTop / gutter) * gutter
        }
      },

      // 组件缩放鼠标按键事件
      mousedownResize (y, x, event) {

        this.pageX = event.pageX
        this.pageY = event.pageY
        this.xAxis = x
        this.yAxis = y

        document.addEventListener('mousemove', this.mousemoveResize)
        document.addEventListener('mouseup', this.clearListener)
      },

      // 组件缩放鼠标移动事件
      mousemoveResize (event) {

        // X、Y 方向光标偏移量
        let xAxisOffset = event.pageX - this.pageX
        let yAxisOffset = event.pageY - this.pageY

        let { width, height, left, top, xAxis, yAxis, pageScale } = this

        switch (xAxis) {
          case 'left':
            this.width = width - xAxisOffset / pageScale
            this.left = left + xAxisOffset / pageScale
            break
          case 'right':
            this.width = width + xAxisOffset / pageScale
            break
          default:
        }

        switch (yAxis) {
          case 'top':
            this.height = height - yAxisOffset / pageScale
            this.top = top + yAxisOffset / pageScale
            break
          case 'bottom':
            this.height = height + yAxisOffset / pageScale
            break
          default:
        }

        this.pageX = event.pageX
        this.pageY = event.pageY

        document.addEventListener('mousemove', this.mousemoveResize)
        document.addEventListener('mouseup', this.clearListener)
      },
      clearListener () {
        document.removeEventListener('mousemove', this.mousemoveMove)
        document.removeEventListener('mousemove', this.mousemoveResize)
        document.removeEventListener('mouseup', this.clearListener)
      },

      // 删除组件
      deleteComponent () {
        this.$confirm('此操作将永久删除该组件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.commit('deleteComponent', this.dataSrc)
        }, () => {
        })
      },

      // 键盘事件
      keyboardDirection (event) {
        let gutter = this.$store.state.page.gutter
        switch (event.keyCode) {
          case 37:
            this.left -= gutter
            break
          case 38:
            this.top -= gutter
            break
          case 39:
            this.left += gutter
            break
          case 40:
            this.top += gutter
            break
        }
      }
    },
    mounted () {
      document.addEventListener('keydown', this.keyboardDirection)
    },
    destroyed () {
      document.removeEventListener('keydown', this.keyboardDirection)
    }
  }
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

/**
 * mixin
 * 生成方向控制手柄的位置，规则如下
 * --------------------------
 * (top, left)     -> top: 0,    left: 0
 * (top, null)     -> top: 0,    left: 50%
 * (top, right)    -> top: 0,    right: 0
 * (null, left)    -> top: 50%,  left: 0
 * (null, right)   -> top: 50%,  right: 0
 * (bottom, left)  -> bottom: 0, left: 0
 * (bottom, null)  -> bottom: 0, left: 50%
 * (bottom, right) -> bottom: 0, right: 0
 */
@mixin direction-handler ($direction1, $direction2, $cursor) {
  .#{$direction1}#{$direction2} {
    position: absolute;
    width: 20px;
    height: 20px;
    z-index: 100;

    @if $direction1 {
      #{$direction1}: 0;
      margin-#{$direction1}: -10px;
    }
    @else {
      top: 50%;
      margin-top: -10px;
    }
  
    @if $direction2 {
      #{$direction2}: 0;
      margin-#{$direction2}: -10px;
    }
    @else {
      left: 50%;
      margin-left: -10px;
    }
  
    cursor: $cursor;

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 6px;
      height: 6px;
      margin: -3px 0 0 -3px;
      border-radius: 100%;
      background: #fff;
    }
  }
}

.transform-tool {
  position: absolute;
  border: 1px dashed $primary-highlight;
  background: transparentize($primary-highlight, 0.7);

  .handler-container {
    @include direction-handler(top, left, nwse-resize);
    @include direction-handler(top, null, ns-resize);
    @include direction-handler(top, right, nesw-resize);
    @include direction-handler(null, left, ew-resize);
    @include direction-handler(null, right, ew-resize);
    @include direction-handler(bottom, left, nesw-resize);
    @include direction-handler(bottom, null, ns-resize);
    @include direction-handler(bottom, right, nwse-resize);

    // 移动拖拽handler
    .move-handler {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      z-index: 99;
      cursor: move;
    }
  }
}
</style>