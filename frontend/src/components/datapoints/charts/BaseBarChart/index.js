/**
 * 可视化组件--基础柱状图
 * @version 1.0.0
 * @id 001xxx :: 001001
 */

 const version = '1.0.0'

 import img_base_bar_chart from './base-bar-chart.png'
 import defaultConfig from './1.0.0/default.config'
 import defaultData from './1.0.0/default.data'

 export default {
   id: '001001',
   version,
   title: '基础柱图',
   name: 'BaseBarChart',
   thumbnail: img_base_bar_chart,
   enabled: true,
   config: defaultConfig,
   data: defaultData,
   interaction: null
 }