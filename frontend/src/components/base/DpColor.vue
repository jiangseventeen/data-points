<template>
  <div class="dp-color">    
    <div class="color-button">
      <div class="color-preview">
        <span class="c-color" :style="color"></span>
      </div>
      <div class="color-value" v-text="value"/>
        <el-popover
          width="225"
          trigger="click"
          placement="bottom"
        >
          <chrome-picker :value="value" @input="updateValue"/>
          <div slot="reference" class="color-picker"/>
        </el-popover>
    </div>
  </div>
</template>

<script>
import { Chrome } from 'vue-color'

export default {
  name: 'DpColor',
  props: ['value'],
  computed: {
    color () {
      return 'background-color: ' + this.value
    }
  },
  methods: {
    updateValue (color) {
      color.a !== 1
        ? this.$emit('input', color.hex8)
        : this.$emit('input', color.hex)
    }
  },
  components: {
    'ChromePicker': Chrome,
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/_element.scss";

.dp-color {
  display: inline-block;

  .color-button {
    padding-left: 5px;
    border: 1px solid $--border-color-base;
    border-radius: $--border-radius-base;
    cursor: pointer;

    &:hover {
      border-color: $primary-highlight;
    }

    .color-preview {
      width: 15px;
      height: 15px;
      display: inline-block;
      margin-right: 5px;
      vertical-align: middle;
      background: url('../../assets/image/transparent-bg.png') center center no-repeat;
      background-size: 100% 100%;

      .c-color {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .color-value {
      color: $--color-text-primary;
      display: inline-block;
      vertical-align: middle;
    }

    .color-picker {
      width: 25px;
      height: 25px;
      margin-left: 5px;
      padding-left: 8px;
      box-sizing: border-box;
      display: inline-block;
      vertical-align: middle;
      border-left: 1px solid $--border-color-base;
      background: url('../../assets/image/color_circle.png') center center no-repeat;
      background-size: 60%;
    }

  }
}
</style>