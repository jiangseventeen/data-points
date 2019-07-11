<template>
  <div class="left-sidebar">
    <Title>图层</Title>

    <div class="layer-container">
      <ul class="layer-list">
        <li
          draggable
          ondragover="return false"
          :key="layer.id"
          v-for="(layer, index) in layers"
          :class="{selected: layer.selected, dragenter: layer.isDrop}"
          @mouseenter="mouseIn(layer)"
          @mouseleave="mouseOut(layer)"
          @click="selectComponent(index)"
          @dragstart="handleDragstart(index, $event)"
          @dragover="handleDragover(layer, $event)"
          @dragleave="handleDragleave(layer, $event)"
          @drop="handleDrop(index, $event)"
        >
          <div class="layer-thumb"><img :src="layer.thumbnail"/></div>
          <div class="layer-title" v-text="layer.title"></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Title from '../components/base/Title'

// 图层列表项高度
const LAYER_ITEM_HEIGHT = 50

export default {
  name: 'TheLeftSidebar',
  computed: {
    layers () {
      // this.$store.state.renderComponentList.forEach(n => {
      //   console.log(n.id)
      // })
      return this.$store.state.renderComponentList
    }
  },
  methods: {
    selectComponent (index) {
      this.$store.commit('selectComponents', index)
    },
    mouseIn (layer) {
      this.$store.commit('hoverComponent', layer)
    },
    mouseOut (layer) {
      this.$store.commit('unhoverComponent', layer)
    },
    handleDragstart(from, event) {
      // 设置drag元素相对指针位置
      event.dataTransfer.setDragImage(event.currentTarget, 10 , 10)
      event.dataTransfer.setData('text/plain', from.toString())

      // 拖拽时取消选中
      this.$store.commit('unselectComponent')
    },
    // 拖拽移入高亮插入位置
    handleDragover (layer, event) {
      let { currentTarget: el, offsetY } = event
      el.classList.remove('insert-before', 'insert-after')

      // 光标位于图层上半部分时代表该元素前插入、下半部分代表该元素后插入
      if (offsetY > LAYER_ITEM_HEIGHT / 2) {
        el.classList.add('insert-after')
      } else {
        el.classList.add('insert-before')
      }
    },
    handleDragleave(layer, event) {
      event.currentTarget.classList.remove('insert-before', 'insert-after')
    },
    handleDrop(to, event) {
      let offsetY = event.offsetY
      let from = parseInt(event.dataTransfer.getData('text/plain'))

      if (to !== from) {
        if (offsetY < LAYER_ITEM_HEIGHT / 2)
          to === 0 ? null : --to
  
        // if (offsetY >= LAYER_ITEM_HEIGHT / 2)
        //   to === this.layers.length - 1 ? null : ++to

        this.$store.commit('layerMove', { from, to })
      }
      event.currentTarget.classList.remove('insert-before', 'insert-after')
    }
  },
  components: {
    Title
  }
}
</script>

<style scoped lang="scss">
@import 'src/assets/scss/_variables';

.left-sidebar {
  left: 0;
  top: $top-heading-height;
  bottom: 0;
  width: $left-sidebar-width;
  position: absolute;
  background: $primary-background-color;


  .layer-list {
    margin: 0;
    padding: 0;

    & > li {
      height: 50px;
      line-height: 50px;
      list-style: none;
      user-select: none;
      border: 2px solid transparent;
      cursor: pointer;

      .layer-thumb {
        float: left;
        width: 40%;
        height: 100%;
        padding: 8px 10px;
        box-sizing: border-box;
        
        img {
          width: 100%;
          height: 100%;
        }
      }

      .layer-title {
        color: $primary-color;
        font-size: 12px;
        font-weight: 400;
      }

      &.selected {
        background: $primary-highlight;

        .layer-title {
          color: $primary-background-color;
        }
      }

      &.insert-before {
        border-top: 2px solid $primary-highlight;
      }

      &.insert-after {
        border-bottom: 2px solid $primary-highlight;
      }

      &:not(.selected):hover {
        background: $second-background-color;
      }
    }
  }
}
</style>