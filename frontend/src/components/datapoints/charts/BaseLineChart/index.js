/**
 * 可视化组件--基础折线图
 * @version 1.0.0
 * @id 001xxx :: 001001
 */

const version = '1.0.0'

import img_base_line_chart from './base-line-chart.jpg'
import defaultConfig from './1.0.0/default.config'
import defaultData from './1.0.0/default.data'

export default {
  id: '001021',
  version,
  title: '基础折线图',
  name: 'BaseLineChart',
  thumbnail: img_base_line_chart,
  enabled: true,
  config: defaultConfig,
  data: defaultData,
  interaction: null
}