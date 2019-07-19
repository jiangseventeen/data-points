<template>
  <div :class="['right-sidebar', isShowTabs ? 'config' : '']">
    <template v-if="isShowTabs">
      <div class="tabs">
        <div
          v-for="tab in tabs"
          :key="tab.value"
          :class="['tab', {'active': tab.isActive}]"
          @click="handleTabClick(tab)"
        >
          <el-tooltip :content="tab.label" placement="bottom">
            <Icon :type="tab.icon"/>
          </el-tooltip>
        </div>
      </div>
      <component-title
        v-if="isShowTabs"
        :title="selectedComponent.title"
        :version="selectedComponent.version"
        :tips="selectedComponent.tips"
      />
    </template>
    <div class="panel-body">
      <component
        :activeKey="activeKey"
        :is="currentSettingComponent"
        :config="selectedComponent.config"
        :data="selectedComponent.data"
      />
    </div>
  </div>
</template>

<script>
import Icon from '../components/base/Icon'
import PageSetting from './PageSetting'
import DataSetting from './DataSetting'
import InteractSetting from './InteractSetting'

export default {
  name: 'TheRightSidebar',
  data () {
    return {
      activeKey: 'config',
      tabs: [
        { value: 'config', label: '配置', icon: 'sliders', isActive: true },
        { value: 'data', label: '数据', icon: 'database', isActive: false },
        { value: 'interact', label: '交互', icon: 'retweet', isActive: false },
      ]
    }
  },
  computed: {
    /**
     * 判断当前配置面板显示组件：
     * - 无选中图层时显示页面设置
     * - 选中单个图层时显示该图层对应配置组件：
     *   * 配置选项选中时显示配置组件
     *   * 数据选项选中时显示数据配置组件
     *   * 交互选项选中时显示交互配置组件
     * - 多个图层选中时显示布局组件
     */
    currentSettingComponent() {
      let checkedComponents = this.$store.getters.selectedComponentList

      if (checkedComponents.length > 1) {
        return 'ComponentsLayout'
      } else if (checkedComponents.length > 0) {

        if (this.activeKey === 'config') {
          let { name, version } = checkedComponents[0]
          return `${name}Config-${version}` 
        } else if (this.activeKey === 'data') {
          return 'DataSetting'
        } else {
          return 'InteractSetting'
        }
      } else {
        return 'PageSetting'
      }
    },
    isShowTabs () {
      return (
        this.currentSettingComponent !== 'ComponentsLayout' &&
          this.currentSettingComponent !== 'PageSetting'
      )
    },
    selectedComponent () {
      let selected = this.$store.getters.selectedComponentList
      return selected.length === 1 ? selected[0] : {}
    }
  },
  methods: {
    handleTabClick (tab) {
      this.activeKey = tab.value
      this.tabs.forEach(n => n.isActive = false)
      tab.isActive = true
    }
  },
  components: {
    Icon,
    PageSetting,
    DataSetting,
    InteractSetting
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/_variables';
@import 'src/assets/scss/mixins/_clearfix';

.right-sidebar {
  right: 0;
  top: $top-heading-height;
  bottom: 0;
  width: $right-sidebar-width;
  position: absolute;
  background: $primary-background-color;

  * {
    box-sizing: border-box;
  }

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
        background: $primary-background-color;
      }

      i {
        font-size: 14px;
      }
    }
  }
  .panel-body {
    width: 100%;
    height: 100%;
    margin-top: -30px;
    padding-top: 30px;
    overflow-y: auto;
    padding-bottom: 50px;
  }

  &.config {
    .panel-body {
      margin-top: -80px;
      padding-top: 80px;
    }
  }
}
</style>