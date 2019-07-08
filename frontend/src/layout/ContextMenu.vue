<template>
  <div class="context-menu">
    <ul class="menu-list">
      <template v-for="(item, i) in menus">
        <li
          :key="`${i}-${j}`"
          v-for="(option, j) in item.options"
          @click="handleClickMenu(option.action)"
          :class="{'menu-disabled': option.disabled}"
        >
          <i :class="option.icon"></i>{{option.label}}
        </li>
        <hr :key="i"/>
      </template>
    </ul>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'ContextMenu',
  store,
  computed: {
    selectedComponentList () {
      return this.$store.getters.selectedComponentList
    },
    menus () {
      let menus = []
      // 默认图层移动分组可用
      menus.push({
        label: '图层移动',
        options: [
          { icon: 'el-icon-upload2', label: '置顶', action: 'moveTop', disabled: false },
          { icon: 'el-icon-download', label: '置底', action: 'moveBottom', disabled: false },
          { icon: 'el-icon-top', label: '上移', action: 'moveUp', disabled: false },
          { icon: 'el-icon-bottom', label: '下移', action: 'moveDown', disabled: false },
        ]
      })

      /**
       * @todo 分组功能尚未实现
       * 此处disabled
       */
      menus.push({
        label: '分组',
        options: [
          { icon: 'el-icon-folder', label: '分组', disabled: true },
          { icon: 'el-icon-folder-delete', label: '取消分组', disabled: true },
        ]
      })

      /**
       * @todo 锁定和隐藏功能尚未实现
       * 此处disabled
       */
      menus.push({
        label: '锁定',
        options: [
          { icon: 'el-icon-lock', label: '锁定', disabled: true },
          { icon: 'el-icon-view', label: '隐藏', disabled: true },
        ]
      })

      // 默认图层操作可用
      menus.push({
        label: '图层操作',
        options: [
          { icon: 'el-icon-edit', label: '重命名', action: 'renameComponent', disabled: false },
          { icon: 'el-icon-copy-document', label: '复制', action: 'copyComponents', disabled: false },
          { icon: 'el-icon-delete', label: '删除', action: 'deleteComponents', disabled: false },
        ]
      })

      return menus
    }
  },
  methods: {
    handleClickMenu (action) {
      this.$store.commit(action)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

.context-menu {
  width: 150px;
  position: absolute;
  color: $primary-color;
  font-size: 12px;
  font-weight: 300;
  background: $primary-background-color;
  border: 1px solid transparentize($primary-highlight, 0.9);

  .menu-list {
    margin: 0;
    padding: 0;

    li {
      padding: 5px 8px;
      border-left: 2px solid transparent;
      list-style: none;
      line-height: 20px;
      cursor: pointer;

      i {
        margin-right: 8px;
      }

      &:not(.menu-disabled):hover {
        border-left: 2px solid $primary-highlight;
        color: $primary-highlight;
        background: $second-background-color;
      }

      &.menu-disabled {
        color: transparentize($primary-color, 0.6);
      }
    }

    hr {
      height: 1px;
      border: none;
      margin: 0;
      background-color: transparentize($primary-color, 0.7);
    }
  }
}
</style>