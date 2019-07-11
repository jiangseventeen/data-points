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
          enabled: component.enabled,
          componentId: component.id,
          id: _.uniqueId(),
          hover: false,                   // 光标hover
          selected: false,                // 是否选中
          locked: false,                  // 是否锁定
          visible: true,                  // 是否隐藏
          isEdit: false,                  // 是否重命名
          isDrop: false,                  // 拖拽排序中
          name: component.name,
          title: component.title,
          version: component.version,
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

    /**
     * 按照指定位置移动图层顺序
     * 
     * @param {Number} from 被移动元素位置
     * @param {Number} to 目标位置
     */
    layerMove: (state, position) => {
      let { from, to } = position
      let renderComponentList = state.renderComponentList

      renderComponentList.splice(to, 0, renderComponentList.splice(from, 1)[0])
    },

    /**
     * 交换两个图层位置
     * 
     * @param {Number} index1
     * @param {Number} index2
     */
    layerSwap (state, { index1, index2 }) {
      if (index1 !== index2) {
        let component = state.renderComponentList[index1]
        Vue.set(state.renderComponentList, index1, state.renderComponentList[index2])
        Vue.set(state.renderComponentList, index2, component)
      }
    },
    /**
     * 上移选中的图层
     */
    moveUp (state) {

      let renderList = state.renderComponentList
      let selectedList = this.getters.selectedComponentList

      // 上移时正序排列索引数组
      let activeIndexs = selectedList
        .map(n => renderList.indexOf(n))
        .sort((a, b) => a - b)

      activeIndexs.forEach(n => {
        if (n > 0 && !renderList[n - 1].selected) {
          this.commit('layerSwap', {index1: n - 1, index2: n})
        }
      })
    },

    /**
     * 下移选中的图层
     */
    moveDown (state) {
      let renderList = state.renderComponentList
      let selectedList = this.getters.selectedComponentList

      // 下移时逆序排列索引数组
      let activeIndexs = selectedList
        .map(n => renderList.indexOf(n))
        .sort((a, b) => b - a)

      activeIndexs.forEach(n => {
        if (
          n < renderList.length &&
          renderList[n + 1] &&
          !renderList[n + 1].selected
        ) {
          this.commit('layerSwap', {index1: n, index2: n + 1})
        }
      })
    },

    /**
     * 置顶选中的图层
     */
    moveTop (state) {
      let renderList = state.renderComponentList
      let selectedList = this.getters.selectedComponentList

      // 上移时正序排列索引数组
      let activeIndexs = selectedList
        .map(n => renderList.indexOf(n))
        .sort((a, b) => a - b)

      activeIndexs.forEach((n, i) => {
        this.commit('layerSwap', {index1: n, index2: i})
      })
    },

    /**
     * 置底选中的图层
     */
    moveBottom (state) {
      let renderList = state.renderComponentList
      let selectedList = this.getters.selectedComponentList

      // 下移时逆序排列索引数组
      let activeIndexs = selectedList
        .map(n => renderList.indexOf(n))
        .sort((a, b) => b - a)

      activeIndexs.forEach((n, i) => {
        this.commit('layerSwap', {index1: n, index2: renderList.length - 1 - i})
      })
    },

    /**
     * 删除选中组件图层
     */
    deleteComponents (state) {
      let renderList = state.renderComponentList
      let selectedList = this.getters.selectedComponentList

      selectedList.forEach(n => {
        let index = renderList.indexOf(n)
        state.renderComponentList.splice(index, 1)
      })
    },

    /**
     * 复制选中图层
     */
    copyComponents () {
      let selectedList = this.getters.selectedComponentList

      selectedList.forEach(n => {
        this.commit('insertComponent', n)
      })
    },

    /**
     * 重命名选中图层，多个选中图层时，默认修改第一个选中图层
     */
    renameComponent () {
      let selectedList = this.getters.selectedComponentList
      selectedList[0].isEdit = true
    }
    
  }
});

export default store;
