import Vue from 'vue'
import ContextMenu from './ContextMenu'
let ContextMenuConstructor = Vue.extend(ContextMenu)

var contextMenuPlugin = {}

contextMenuPlugin.install = function (Vue) {

  let api = {}
  let instance

  api.open = function (event) {
    if (!instance) {
      instance = new ContextMenuConstructor()
      instance.$mount()
      document.body.appendChild(instance.$el)
    } else {
      instance.$el.style.display = 'block'
    }

    // get position of context menu
    let { pageX, pageY } = event

    instance.$el.style.left = `${pageX + 10}px`
    instance.$el.style.top = `${pageY + 10}px`

    document.addEventListener('click', handleCloseMenu)
  }

  api.close = function () {
    instance.$el.style.display = 'none'

    document.removeEventListener('click', handleCloseMenu)
  }

  function handleCloseMenu () {
    api.close()
  }

  Vue.prototype.$contextMenu = api

}

export default contextMenuPlugin
