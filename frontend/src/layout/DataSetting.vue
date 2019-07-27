<template>
  <div class="data-setting">
    <template v-if="data">
      <div class="validate-status">
        <span>数据源校验</span>

        <div v-if="isLoading" class="loading">
          <span class="loading-blink"></span>
          校验中
        </div>
        <span
          v-else
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
          <code-editor v-model="staticData" @blur="startValidate"/>
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
import validator from 'src/utils/validator'

export default {
  name: 'DataSetting',
  props: ['name', 'data'],
  data () {
    return {
      validateStatus: false,
      dataType: 'static',
      isLoading: false
    }
  },
  computed: {
    staticData: {
      get () {
        return JSON.stringify(this.data.staticData, null, 2)
      },
      set (value) {
        this.data.staticData = JSON.parse(value)
      }
    },
    validateResult () {
      return this.validateStatus ? '配置成功' : '配置失败'
    }
  },
  methods: {
    startValidate (hasChanged) {
      console.log(hasChanged)
      if (hasChanged) {
        this.isLoading = true
        this.validateStatus = validator.validate(this.data.staticData, this.data.schema).valid
        setTimeout(() => {
          this.isLoading = false
        }, 500)
      }
    }
  },
  components: {
    CodeEditor
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/_variables';
@import 'src/assets/scss/animate/blink-loading';

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

    .loading {
      float: right;

      .loading-blink {
        width: 6px;
        height: 6px;
        display: inline-block;
        margin-right: 30px;
        animation: blink-loading 1s linear infinite alternate;
      }
    }

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