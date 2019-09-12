<template>
  <div class="dp-component" :style="globeStyle | inline-style">
    <h1 class="counter-title" v-text="title" :style="titleStyle | inline-style"></h1>
    <div class="number" v-html="formatNumber" :style="numberStyle | inline-style"></div>
  </div>
</template>

<script>
import commonMixin from 'src/components/datapoints/mixins/common'
import TWEEN from '@tweenjs/tween.js'
import http from 'src/utils/http'

export default {
  name: 'NumberCounter',
  mixins: [commonMixin],
  data () {
    return {
      title: '',
      baseValue: 0,
      presentValue: 0
    }
  },
  computed: {
    globeStyle () {
      return Object.assign({}, this.position, this.borderStyle)
    },
    titleStyle () {
      return this.config.title
    },
    borderStyle () {
      return this.config.card
    },
    numberStyle () {
      return this.config.number
    },
    bounce () {
      return this.config.number.bounce
    },
    formatNumber () {
      let parts = this.presentValue.toFixed(this.precision).split('.')
      parts[0] = parseInt(parts[0]).toLocaleString(undefined, { useGrouping: this.config.number.useGroup})

      return parts.join('.')
    },
    precision () {
      return this.config.number.precision
    },
    bounceInterval () {
      return this.config.number.bounceInterval
    }
  },
  methods: {
    update (value) {
      let vm = this

      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }

      new TWEEN.Tween({number: this.presentValue})
            .easing(TWEEN.Easing.Quadratic.Out)
            .to({number: value}, 500)
            .onUpdate(function() {
              vm.presentValue = this.number
            })
            .start()

      animate()
    },
    getValue () {
      let dataSrc = this.data

      if (dataSrc.type === 'static') {
        let { name, value } = dataSrc.staticData

        this.title = name
        this.baseValue = value
        this.update(value)
      } else if (dataSrc.api) {
        http.get(api)
      }
    },
    withBounce () {
      clearInterval(this.bounceInterval)

      if (this.bounce !== 0) {
        this.bounceInterval = setInterval(() => {
          let newTargetValue = this.baseValue + Math.round((Math.random() - 0.5) * this.bounce * 2)
          this.update(newTargetValue)
        }, this.bounceInterval * 1000)
      }
    }
  },
  mounted () {
    this.getValue()
    this.withBounce()
  },
  distory () {
    clearInterval(this.bounceInterval)
  },
  watch: {
    'config.number.bounce': function(){ this.withBounce() },
    'config.number.bounceInterval': function(){ this.withBounce() },

  }
}
</script>

<style lang="scss">
.counter-title {
  margin: 0;
}
</style>