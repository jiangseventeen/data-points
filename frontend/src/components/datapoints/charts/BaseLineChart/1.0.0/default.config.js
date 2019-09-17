export default {
  chartOption: {
    color: ['#00e1ff'],
    backgroundColor: '#f0f0f600',
    grid: {
      top: 30,
      right: 10,
      bottom: 25,
      left: 20
    },
    xAxis: {
      boundaryGap: false,
      type: 'category',
      axisLabel: {
        show: true,
        color: '#f0f0f6',
        fontSize: 12,
        rotate: 0,
        interval: 0
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#f0f0f6',
          fontSize: 12,
          rotate: 0,
        }
      },
    },
    yAxis: {
      name: '',
      nameLocation: 'end',
      // nameGap: 35,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#f0f0f6',
        }
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#f0f0f6',
          type: 'dashed'
        }
      },
    },
    series: []
  },
  width: 400,
  height: 300,
  left: 500,
  top: 500
}