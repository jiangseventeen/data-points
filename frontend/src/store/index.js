import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 默认页面配置
    page: {
      width: 1920,
      height: 1080,
      scale: 1,
      scaleType: 1,
      gutter: 8,
      background: {
        color: "#0e2a43",
        image: "",
        gradientType: 1,
        colorStart: "#000000",
        colorStop: "#000000"
      },
      thumbnail: ""
    },
    // 画布缩放比例
    pageScale: 0,
    // 显示参考线
    isShowguides: false,
    // 参考线
    guides: [],
    // 画布组件
    renderComponentList: []
  },
  getters: {
    // 选中组件
    selectedComponentList: state => {
      return state.renderComponentList.filter(n => n.selected);
    }
  },
  mutations: {
    setPageScale: (state, scale) => {
      state.pageScale = scale;
    },
    // 设置页面配置
    setPage: (state, pageSetting) => {
      Object.assign(state.page, pageSetting);
    },
    // 设置背景
    setBackground: (state, background) => {
      Object.assign(state.page.background, background);
    },
    // 添加组件
    insertComponent: (state, component) => {
      if (component.enabled) {
        state.renderComponentList.push({
          componentId: component.id,
          id: _.uniqueId(),
          hover: false,
          selected: false,
          locked: false,
          name: component.name,
          title: component.title,
          thumbnail: component.thumbnail,
          config: JSON.parse(JSON.stringify(component.config)),
          data: JSON.parse(JSON.stringify(component.data)),
          interaction: JSON.parse(JSON.stringify(component.interaction))
        });
      }
    },
    // 光标移入
    hoverComponent: (state, component) => {
      component.hover = true;
    },
    // 光标移出
    unhoverComponent: (state, component) => {
      component.hover = false;
    },

    /**
     * 按索引选中组件
     * 
     * @param {Number | Array} indexs 需要选中的组件索引
     */
    selectComponents: (state, indexs) => {
      indexs = Array.isArray(indexs) ? indexs : [indexs];

      state.renderComponentList.forEach((n, i) => {
        if (indexs.indexOf(i) >= 0) n.selected = true;
        else n.selected = false;
      });
    },

    /**
     * 单选组件
     */
    selectComponent: (state, component) => {
      state.renderComponentList.forEach(n => n.selected = false)
      component.selected = true
    },

    /**
     * 取消组件选中
     * 
     * @param {Number | Array | undefined} indexs 取消选中的组件索引， undefined时取消全部组件
     */
    unselectComponent: (state, indexs) => {
       let renderComponentList = state.renderComponentList

      // 全部取消
      if (typeof indexs === 'undefined') {
        renderComponentList.forEach(n => n.selected = false)
        return
      }

      // 取消指定组件
      if (Array.isArray(indexs)) {
        renderComponentList.forEach((n, i) => {
          if (indexs.indexOf(i) >= 0) n.selected = false
        })
        return
      }

      renderComponentList[indexs].selected = false
    },


  }
});

export default store;
