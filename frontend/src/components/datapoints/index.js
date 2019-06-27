import charts from './charts'
import geography from './geography'
import media from './media'
import text from './text'
import decoration from './decoration'
import interaction from './interaction'

export default [
  { title: '系统图表', icon: 'fa-chart-bar', components: charts },
  { title: '地理', icon: 'fa-map', components: geography },
  { title: '媒体', icon: 'fa-film', components: media },
  { title: '文本', icon: 'fa-font', components: text },
  { title: '装饰性', icon: 'fa-palette', components: decoration },
  { title: '交互', icon: 'fa-clone', components: interaction },
]