<template>
  <div class="right-sidebar">
    <div class="tabs">
      <div
        v-for="tab in tabs"
        :key="tab.value"
        :class="['tab', {'active': tab.isActive}]"
        @click="handleTabClick(tab)"
      >
        <el-tooltip :content="tab.label" placement="bottom" effect="light">
          <Icon :type="tab.icon"/>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../components/base/Icon';

export default {
  name: 'TheRightSidebar',
  data () {
    return {
      tabs: [
        { value: 'config', label: '配置', icon: 'fa-sliders-h', isActive: true },
        { value: 'data', label: '数据', icon: 'fa-code', isActive: false },
        { value: 'interact', label: '交互', icon: 'fa-tools', isActive: false },
      ]
    }
  },
  methods: {
    handleTabClick (tab) {
      this.tabs.forEach(n => n.isActive = false)
      tab.isActive = true
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss" scope>
@import 'src/assets/scss/_variables';
@import 'src/assets/scss/mixins/_clearfix';

.right-sidebar {
  right: 0;
  top: $top-heading-height;
  bottom: 0;
  width: $right-sidebar-width;
  position: absolute;
  background: $primary-background-color;

  .tabs {
    background: #1d1b1b;
    @include clearfix();

    .tab {
      float: left;
      width: 33.333%;
      height: 100%;
      padding: 8px 0;
      border-top: 3px solid transparent;
      text-align: center;
      cursor: pointer;
      color: $primary-highlight;
      box-sizing: border-box;
      
      &:hover {
        background: #222;
      }

      &.active {
        border-top: 3px solid $primary-highlight;
      }

      i {
        font-size: 14px;
      }
    }
  }
}
</style>