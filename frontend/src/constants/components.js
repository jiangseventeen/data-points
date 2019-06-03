/**
 * All components in Data Points.
 * 
 * Six type of components: chart, geography, media, decoration, interaction
 */

import chartComponents from '../components/datapoints/charts';
import GeographyComponents from '../components/datapoints/geography';

const chart = {
  title: '系统图表',
  icon: 'fa-chart-bar',
  components: chartComponents
}

const geography = {
  title: '地理',
  icon: 'fa-map',
  components: GeographyComponents
}

const media = {
  title: '媒体',
  icon: 'fa-film',
  components: []
}

const text = {
  title: '文本',
  icon: 'fa-font',
  components: []
}

const decoration = {
  title: '装饰性',
  icon: 'fa-palette',
  components: []
}

const interaction = {
  title: '交互',
  icon: 'fa-clone',
  components: []
}

export default [
  chart,
  geography,
  media,
  text,
  decoration,
  interaction
]