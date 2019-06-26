import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
        color: '#0e2a43',
        image: '',
        gradientType: 1,
        colorStart: '#000000',
        colorStop: '#000000',
      },
      thumbnail: ''
    },
    // 画布缩放比例
    pageScale: 0,
    // 参考线
    guideLine: false,
    // 画布组件
    renderComponentList: [],
  },
  getters: {
    // 选中组件
    selectedComponentList: state => {
      return state.renderComponentList.filter(n => n.isActive)
    },
  },
  mutations: {
    setPageScale: (state, scale) => {
      state.pageScale = scale
    },
    // 设置页面配置
    setPage: (state, pageSetting) => {
      Object.assign(state.page, pageSetting)
    },
    // 设置背景
    setBackground: (state, background) => {
      Object.assign(state.page.background, background)
    }
  }
});

export default store;

