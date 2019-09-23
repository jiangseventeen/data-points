<template>
  <el-row class="dp-form-item" type="flex" align="middle">
    <el-col :span="7">
      <slot name="label"></slot>
    </el-col>
    <el-col :span="17">
      <slot name="control"></slot>
    </el-col>
  </el-row>
</template>