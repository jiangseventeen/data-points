<template>
  <div class="component-title">
    <h5 class="c-title">
      <span class="t-value" v-text="title"></span>
      <el-tooltip placement="top" :content="tips || '暂无简介'">
        <i class="el-icon-info c-tips"/>
      </el-tooltip>
    </h5>
    <div class="c-document">
      <span class="t-version">{{`v${version} |`}}</span>
      <a class="d-link" href="#"> <i class="el-icon-document"></i>{{`${title}文档`}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentTitle',
  props: ['title', 'version', 'tips']
}
</script>

<style lang="scss">
@import 'src/assets/scss/_variables.scss';

.component-title {
  padding: 5px 10px;
  margin-bottom: 10px;
  color: $primary-color;
  
  .c-title {
    font-size: 16px;
    font-weight: 300;
    margin: 10px 0;

    .c-tips {
      margin-left: 10px;
    }
  }
  .c-document {
    font-size: 12px;
    font-weight: 300;

    .d-link {

      i {
        margin: 0 5px;
      }
    }
  }
}
</style>