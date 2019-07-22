<template>
  <el-row class="dp-form-item" type="flex" align="middle">
    <el-col :span="8">
      <slot name="label"></slot>
    </el-col>
    <el-col :span="16">
      <slot name="control"></slot>
    </el-col>
  </el-row>
</template>