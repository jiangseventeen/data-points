import charts from './charts'
import geography from './geography'
import media from './media'
import text from './text'
import decoration from './decoration'
import interaction from './interaction'

export default [
  { title: '系统图表', icon: 'bar-chart', components: charts },
  { title: '地理', icon: 'globe', components: geography },
  { title: '媒体', icon: 'film', components: media },
  { title: '文本', icon: 'font', components: text },
  { title: '装饰性', icon: 'diamond', components: decoration },
  { title: '交互', icon: 'chain', components: interaction },
]