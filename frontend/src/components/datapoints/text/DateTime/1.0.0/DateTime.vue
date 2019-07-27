<template>
  <div class="dp-component date-time" :style="position">
    <span v-text="dateStr" :style="textStyle"></span>
  </div>
</template>

<script>
import commonMixin from 'src/components/datapoints/mixins/common'

const REG_TOKEN_MATCH = /(yyyy|MM|dd|HH|mm|ss)+/g

export default {
  name: 'MultilineText',
  mixins: [commonMixin],
  data () {
    return {
      dateStr: ''
    }
  },
  computed: {
    textStyle () {
      return this.config.text
    },
    format () {
      return this.config.format || 'yyyy-MM-dd HH:mm:ss'
    }
  },
  methods: {
    getDateStr () {
      let c = new Date()
      
      this.dateStr = this.format.replace(REG_TOKEN_MATCH, match => {
        switch (match) {
          case 'yyyy':
            return c.getFullYear()
          case 'MM':
            return this.fillzero(c.getMonth() + 1)
          case 'dd':
            return this.fillzero(c.getDate())
          case 'HH':
            return this.fillzero(c.getHours())
          case 'mm':
            return this.fillzero(c.getMinutes())
          case 'ss':
            return this.fillzero(c.getSeconds())
        }
      })
    },
    fillzero (number) {
      return '00'.substr(number.toString().length) + number.toString()
    }
  },
  mounted () {
    this.getDateStr()
    this.dateInterval = setInterval(this.getDateStr, 1000)
  },
  beforeDestroy () {
    clearInterval(this.dateInterval)
  }
}
</script>

<style lang="scss">
.date-time {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>