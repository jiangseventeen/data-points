<template>
  <div class="context-menu">
    <ul class="menu-list">
      <li><i class="el-icon-upload2"></i>置顶</li>
      <li><i class="el-icon-download"></i>置底</li>
      <li><i class="el-icon-top"></i>上移</li>
      <li><i class="el-icon-bottom"></i>下移</li>
      <hr>
      <li><i class="el-icon-folder"></i>新建组</li>
      <li><i class="el-icon-folder-delete"></i>取消分组</li>
      <hr>
      <li><i class="el-icon-lock"></i>锁定</li>
      <li><i class="el-icon-view"></i>隐藏</li>
      <hr>
      <li><i class="el-icon-edit"></i>重命名</li>
      <li><i class="el-icon-copy-document"></i>复制</li>
      <li><i class="el-icon-delete"></i>删除</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContextMenu',
  data(){
    return {}
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

      &:hover {
        border-left: 2px solid $primary-highlight;
        color: $primary-highlight;
        background: $second-background-color;
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