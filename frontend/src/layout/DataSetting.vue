<template>
  <div class="data-setting">
    <template v-if="data">
      <div class="validate-status">
        <span>数据源校验</span>
        <span
          v-text="validateResult"
          :class="['status', validateStatus ? 'success' : 'fail']"
        />
      </div>
      <div class="data-src">
        <el-row type="flex" align="middle">
          <el-col :span="10">数据源类型</el-col>
          <el-col :span="14">
            <el-select
              size="mini"
              class="data-type"
              style="width: 100px"
              v-model="dataType"
            >
              <el-option label="静态数据" value="static"></el-option>
              <el-option label="api" value="API"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <div class="editor-container">
          <code-editor/>
        </div>
      </div>
    </template>

    <div v-else class="no-data">
      <h1><i class="el-icon-remove-outline"/></h1>
      <h3>该组件暂无数据源</h3>
    </div>
  </div>
</template>

<script>
import CodeEditor from 'src/components/base/CodeEditor'

export default {
  name: 'DataSetting',
  props: ['name', 'data'],
  data () {
    return {
      validateStatus: 'false',
      dataType: 'static'
    }
  },
  computed: {
    validateResult () {
      return this.validateStatus ? '配置成功' : '配置失败'
    }
  },
  components: {
    CodeEditor
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/_variables';

.data-setting {
  font-size: 12px;
  color: $primary-text-color;

  .no-data {
    margin: 20px;
    text-align: center;
  }

  .validate-status {
    line-height: 1;
    margin: 0;
    padding: 16px;
    border-top: 1px solid  #282f3a;
    border-bottom: 1px solid  #282f3a;

    .status {
      float: right;
      position: relative;
      padding-left: 10px;

      &:before {
        content: "";
        display: block;
        position: absolute;
        width: 5px;
        height: 5px;
        left: 0;
        top: 3px;
      }

      &.success:before {
        background-color: $--color-success;
      }

      &.fail:before {
        background-color: $--color-warning;
      }
    }
  }

  .data-src {
    padding: 16px;

    .data-type {
      float: right;
    }

    .editor-container {
      margin-top: 16px;
    }
  }
}
</style>