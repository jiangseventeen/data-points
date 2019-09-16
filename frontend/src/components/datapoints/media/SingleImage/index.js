/**
 * 可视化控件--单图片
 * @version 1.0.0
 */

const version = '1.0.0'

import img_single_image from './single-image.png'
import defaultConfig from './1.0.0/default.config'

export default {
  id: '003001',
  title: '单张图片',
  version,
  name: 'SingleImage',
  thumbnail: img_single_image,
  enabled: true,
  config: defaultConfig,
  data: null,
  interaction: null
}