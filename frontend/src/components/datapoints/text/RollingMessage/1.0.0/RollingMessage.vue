<template>
  <div class="dp-component" :style="position">
    <transition-group
      name="list"
      tag="ul"
      class="msg-list"
      :style="textStyle | inline-style"
    >
      <li
        class="list-item"
        :key="item.value"
        v-for="item in messages"
        v-text="item.value"
      ></li>
    </transition-group>
  </div>
</template>

<script>
import commonMixin from 'src/components/datapoints/mixins/common'

export default {
  name: 'RollingMessage',
  mixins: [commonMixin],
  data () {
    return {
      messages: [
        { value: '这是一行测试文本' },
        { value: '这是滚动测试文本' },
        { value: '这是无名测试文本' },
      ]
    }
  },
  computed: {
    textStyle () {
      return this.config.text
    }
  },
  methods: {
    rolling () {
      let pickOne = this.messages.shift()
      setTimeout(() => {
        this.messages.push(pickOne)
      }, 200)
    },
    setRollingInterval (seconds) {
      if (this.rollingInterval) {
        clearInterval(this.rollingInterval)
      }

      this.rollingInterval = setInterval(() => {
        this.rolling()
      }, seconds * 1000);
    }
  },
  watch: {
    'config.rollingInterval': function (newValue) {
      this.setRollingInterval(newValue)
    }
  },
  mounted () {
    this.setRollingInterval(this.config.rollingInterval)
  },
  beforeDestory () {
    clearInterval(this.rollingInterval)
  }
}
</script>

<style lang="scss">
.msg-list {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  .list-item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s;
  }
}
.list-enter-active,
.list-leave-active {
  position: absolute;
}
.list-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.list-move {
  transition: all .5s;
}
</style>

