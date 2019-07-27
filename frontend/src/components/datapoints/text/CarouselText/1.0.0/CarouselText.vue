<template>
  <div class="dp-component" :style="position">
    <div class="carousel-text">
      <div class="ghost-text">这是一段测试文本</div>
      <div class="ghost-text">这是一段测试文本</div>
    </div>
  </div>
</template>

<script>
import commonMixin from 'src/components/datapoints/mixins/common'

export default {
  name: 'CarouselText',
  mixins: [commonMixin]
}
</script>

<style lang="scss">
@keyframes carousel {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.carousel-text {
  font-size: 20px;
  width: 100%;
  height: 100%;
  display: flex;

  .ghost-text {
    width: 100%;
    flex-shrink:0;
    animation: carousel 3s linear 1s infinite;
  }
}
</style>