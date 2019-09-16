<template>
  <div class="upload">
    <el-input prefix-icon="el-icon-link" size="mini" v-model="value"/>
    <el-upload
      class="image-upload"
      :action="uploadAction"
      accept="image/jpeg,image/png"
      :show-file-list="false"
      :on-success="handleUploadSuccess"
      :before-upload="beforeUpload"
    >
      <img v-if="value" :src="value" class="image-thumb">
      <i v-else class="el-icon-plus upload-icon-add"></i>
    </el-upload>
  </div>
</template>

<script>
import { uploadAction } from 'src/api';

export default {
  name: 'Upload',
  props: ['value'],
  data () {
    return {
      uploadAction
    }
  },
  methods: {
    handleUploadSuccess (res) {
      this.$emit('input', res.url)
    },
    beforeUpload (file) {
      if (!(file.type === 'image/jpg' || file.type === 'image/png')) {
        this.$message.error('只支持JPG、PNG格式图片！');
      }

      if (file.size > 1024*1024*10) {
        this.$message.error('最大支持10M图片上传！');
      }
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/_variables";

.upload {

  .image-upload {
    margin-top: 10px;

    .el-upload {
      height: 120px;
      border: 1px dashed #282f3a;
      border-radius: 2px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .upload-icon-add {
      font-size: 32px;
      width: 100%;
      height: 150px;
      margin-top: 10px;
      line-height: 150px;
      text-align: center;
    }

    .image-thumb {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>