import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import ElementUI from "element-ui";
import "./assets/scss/_element.scss";

Vue.config.productionTip = false;
Vue.use(ElementUI);

const datapointsComponent = require.context(
  "./components/datapoints",
  true,
  /[A-Z]\w+\.vue$/
);

datapointsComponent.keys().forEach(fileName => {
  let dpComponentConfig = datapointsComponent(fileName);

  let [version, componentName] = fileName
    .split("/")
    .splice(-2)
    .map(n => n.replace(/\.vue$/, ""));

  Vue.component(
    `${componentName}-${version}`,
    dpComponentConfig.default || dpComponentConfig
  );
});

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
