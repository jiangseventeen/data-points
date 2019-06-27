<template>
  <div class="left-sidebar">
    <Title>图层</Title>

    <div class="layer-container">
      <ul class="layer-list">
        <li
          :class="{selected: layer.selected}"
          :key="layer.id"
          v-for="(layer, index) in layers"
          @mouseenter="mouseIn(layer)"
          @mouseleave="mouseOut(layer)"
          @click="selectComponent(index)"
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

export default {
  name: 'TheLeftSidebar',
  computed: {
    layers () {
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

      &:not(.selected):hover {
        background: $second-background-color;
      }
    }
  }
}
</style>