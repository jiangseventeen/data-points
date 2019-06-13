<template>
  <div class="top-heading">
    <div class="logo">
      <img src="../assets/image/logo.png">
    </div>

    <div class="nav">
      <ul class="nav-list">
        <li v-for="(navItem, index) in dpComponents" :key="index">
          <Icon :type="navItem.icon"/>
          <div class="components-wrap">
            <ul class="components-list">
              <NavItem
                :key="component.id"
                v-for="component in navItem.components"
                :imgSrc="component.image"
                :title="component.title"
              />
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <div class="opts">
      <ul class="opts-list">
        <li>
          <Icon type="fa-question-circle"/>
        </li>
        <li>
          <Icon type="fa-laptop-code"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Icon from "../components/base/Icon";
import NavItem from "../components/base/NavItem";
import nav from "../constants/nav";
import dpComponents from "../constants/components";

export default {
  name: "TheTopHeading",
  data() {
    return {
      nav,
      dpComponents
    };
  },
  components: {
    Icon,
    NavItem
  }
};
</script>

<style lang="scss" scope>
@import "src/assets/scss/_variables";
@import "src/assets/scss/mixins/_clearfix.scss";
@import 'src/assets/scss/mixins/_list-style.scss';


@mixin nav-list {
  padding: 0;
  margin: 0;
  @include clearfix();
}

@mixin nav-list-item($direction) {
  @include list-style($direction);
  width: 50px;
  height: 100%;
  margin: 0 5px;
  line-height: $top-heading-height;
}

.top-heading {
  top: 0;
  left: 0;
  width: 100%;
  position: absolute;
  height: $top-heading-height;
  color: $primary-text-color;
  background: $top-heading-background;
  border-bottom: 1px solid #2f3534;
  z-index: 1;

  @include clearfix();

  .logo {
    float: left;
    height: 20px;
    margin: 12px 0 0 40px;

    img {
      height: 100%;
    }
  }

  .nav {
    float: left;
    margin-left: 150px;

    .nav-list {
      width: 500px;
      margin: 0 0 0 20px;
      @include nav-list();

      & > li {
        position: relative;
        @include nav-list-item(left);
        border-top: 2px solid $primary-background-color;

        &:hover {
          border-top: 2px solid $primary-highlight;

          .components-wrap {
            display: block;
          }
        }

        .components-wrap {
          display: none;
          position: absolute;
          top: $top-heading-height;
          left: 0;
          width: 400px;
          min-height: 200px;
          max-height: 500px;
          background: #161a17;
          padding: 15px;
          
          .components-list {
            @include nav-list();
          }
        }
      }
    }
  }

  .opts {
    float: right;
    width: 200px;
    margin-right: 25px;

    .opts-list {
      @include nav-list();

      li {
        @include nav-list-item(right);
      }
    }
  }
}
</style>