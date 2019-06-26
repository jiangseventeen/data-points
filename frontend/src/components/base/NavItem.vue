<template>
  <li class="nav-item">
    <img :src="imgSrc"/>
    <h6 v-text="title"></h6>
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  props: ['imgSrc', 'title']
}
</script>

<style lang="scss" scope>
@import 'src/assets/scss/_variables.scss';
@import 'src/assets/scss/mixins/_list-style.scss';

.nav-item {
  @include list-style(left);
  margin: 10px;

  img {
    width: 80px;
    display: block;
    border: 1px solid transparent;
  }

  h6 {
    margin: 10px 0;
    line-height: 1.2;
    font-weight: 300;
  }

  &:hover {
    color: $primary-highlight;
    img {
      border: 1px solid $primary-highlight;
    }
  }
}
</style>