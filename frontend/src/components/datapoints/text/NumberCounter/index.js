/**
 * 可视化控件--通用标题
 * 
 * @version 1.0.0
 */

const version = '1.0.0'
import img_number_counter from './text-number-counter.png'
import defaultConfig from './1.0.0/default.config'
import defaultData from './1.0.0/default.data'

export default {
  id: '004002',
  version,
  title: '数字翻牌器',
  name: 'NumberCounter',
  enabled: true,
  thumbnail: img_number_counter,
  config: defaultConfig,
  data: defaultData,
  interaction: null
}