<template>
  <div class="right-sidebar">
    <div v-if="isShowTabs" class="tabs">
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
    <component
      :activeKey="activeKey"
      :is="currentSettingComponent"
      :data="currentComponentData"
    />
  </div>
</template>

<script>
import Icon from '../components/base/Icon';
import PageSetting from './PageSetting';

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
    currentSettingComponent() {
        let checkedComponents = this.$store.getters.selectedComponentList
        if (checkedComponents.length > 1) return 'ComponentsLayout'
        else if (checkedComponents.length > 0) return `${checkedComponents[0].name}Config-${checkedComponents[0].version}` 
        else return 'PageSetting'
    },
    isShowTabs () {
      return (
        this.currentSettingComponent !== 'ComponentsLayout' &&
          this.currentSettingComponent !== 'PageSetting'
      )
    },
    currentComponentData () {
      let selected = this.$store.getters.selectedComponentList
      return selected.length === 1 ? selected[0].config : null
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