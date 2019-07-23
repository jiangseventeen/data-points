/**
 * 处理内联样式的单位，为Number类型的样式添加‘px’单位
 * 
 * @param {Object} style 内联样式对象
 */
export default function (style) {
  const keywords = [
    'fontSize',
    'margin',
    'padding',
    'letterSpacing',
    'borderRadius',
    'borderWidth'
  ]

  let inlineStyle = {}
  Object.keys(style).forEach(key => {
    if (keywords.indexOf(key) >= 0) {
      inlineStyle[key] = `${style[key]}px`
    }
  })

  return Object.assign({}, style, inlineStyle)
}