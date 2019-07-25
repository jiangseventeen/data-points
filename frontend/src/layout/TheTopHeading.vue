<template>
  <div class="top-heading">
    <div class="logo">
      <img src="../assets/image/logo.png">
    </div>

    <div class="nav">
      <ul class="nav-list">
        <li v-for="(navItem, index) in components" :key="index" :title="navItem.title">
          <Icon :type="navItem.icon"/>
          <div class="components-wrap">
            <ul class="components-list">
              <li
                draggable
                class="nav-item"
                :key="component.id"
                @dragstart="handleDragNav(component, $event)"
                @click="handleAddComponent(component)"
                v-for="component in navItem.components"

              >
                <img :src="component.thumbnail"/>
                <h6 v-text="component.title"></h6>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <div class="opts">
      <ul class="opts-list">
        <el-tooltip content="官方仓库" placement="bottom">
          <li>
            <a target="_blank" href="https://github.com/jiangseventeen/data-points">
              <Icon type="github"/>
            </a>
          </li>
        </el-tooltip>
        <el-tooltip content="帮助" placement="bottom">
          <li>
            <Icon type="question-circle"/>
          </li>
        </el-tooltip>
        <el-tooltip content="预览" placement="bottom">
          <li>
            <Icon type="laptop"/>
          </li>
        </el-tooltip>
      </ul>
    </div>
  </div>
</template>

<script>
import Icon from "../components/base/Icon";
import components from "../constants/components";

export default {
  name: "TheTopHeading",
  data() {
    return {
      components
    };
  },
  methods: {
    handleAddComponent (component) {
      this.$store.commit('insertComponent', component)
    },
    handleDragNav (component, event) {
      event.dataTransfer.setData('text/plain', JSON.stringify(component))
    }
  },
  components: {
    Icon,
  }
};
</script>

<style lang="scss" scoped>
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
          width: 380px;
          min-height: 200px;
          max-height: 500px;
          background: #161a17;
          padding: 15px;
          
          .components-list {
            @include nav-list();

            .nav-item {
              @include list-style(left);
              margin: 10px;

              img {
                width: 100px;
                display: block;
                border: 1px solid transparent;
              }

              h6 {
                margin: 10px 0;
                line-height: 1.2;
                font-weight: 400;
              }

              &:hover {
                color: $primary-highlight;
                img {
                  border: 1px solid $primary-highlight;
                }
              }
            }
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

        a {
          color: $primary-text-color;
        }
      }
    }
  }
}
</style>