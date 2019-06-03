/**
 * 顶部导航菜单组件选择区配置
 *
 * 组件分为charts, map, media, text, decoration, interaction
 */

// 柱状图
// const BASE_BAR_CHART = { name: "基本柱状图", thumb: "base-bar-chart.png" }
// const CAPSULE_BAR_CHART = { name: "胶囊柱状图", thumb: "base-bar-chart.png" }
// const VERTICAL_BAR_CHART = {
//   name: "垂直柱状图",
//   thumb: "vertical-bar-chart.png"
// }
// const HORIZONTAL_BAR_CHART = {
//   name: "水平柱状图",
//   thumb: "horizontal-bar-chart.png"
// }
// const GROUP_BAR_CHART = { name: "分组柱状图", thumb: "group-bar-chart.png" }
// const STACK_BAR_CHART = { name: "层叠柱状图", thumb: "stack-bar-chart.png" }
// const CUSTOM_BAR_CHART = {
//   name: "自定义柱状图",
//   thumb: "custom-bar-chart.png"
// }

// const _charts = [
//   {
//     icon: "list",
//     title: "图表",
//     classify: [
//       BASE_BAR_CHART,
//       CAPSULE_BAR_CHART,
//       VERTICAL_BAR_CHART,
//       HORIZONTAL_BAR_CHART,
//       GROUP_BAR_CHART,
//       STACK_BAR_CHART,
//       CUSTOM_BAR_CHART
//     ]
//   }
// ]

export default [
  { title: '图表', icon: 'fa-chart-bar' },
  { title: '地图', icon: 'fa-map' },
  { title: '媒体', icon: 'fa-film'},
  { title: '文本', icon: 'fa-font'},
  { title: '装饰', icon: 'fa-palette'},
  { title: '交互', icon: 'fa-clone'}
]