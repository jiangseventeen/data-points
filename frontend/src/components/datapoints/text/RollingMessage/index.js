/**
 * 可视化控件--通用标题
 * 
 * @version 1.0.0
 */

const version = '1.0.0'
import img_rolling_message from './rolling-message.png'
import defaultConfig from './1.0.0/default.config'
import defaultData from './1.0.0/default.data'

export default {
  id: '004006',
  version,
  title: '滚动消息',
  name: 'RollingMessage',
  enabled: true,
  thumbnail: img_rolling_message,
  config: defaultConfig,
  data: defaultData,
  interaction: null
}