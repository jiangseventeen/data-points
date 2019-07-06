import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import ElementUI from "element-ui";
import ContextMenuPlugin from './layout/ContextMenuPlugin';
import './components/base';
import "./assets/scss/_element.scss";

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.use(ContextMenuPlugin)

// 异步加载datapoints可视化组件
const asyncComponent = require.context(
  "./components/datapoints",
  true,
  /[A-Z]\w+\.vue$/,
  'lazy'
);

asyncComponent.keys().forEach(fileName => {

  let [version, componentName] = fileName
    .split("/")
    .splice(-2)
    .map(n => n.replace(/\.vue$/, ""));

  Vue.component(
    `${componentName}-${version}`,
    () => asyncComponent(fileName).then(resolve => resolve.default || resolve)
  );
});

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
