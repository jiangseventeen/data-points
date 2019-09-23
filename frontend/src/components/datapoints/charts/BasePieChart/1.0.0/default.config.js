export default {
  chartOption: {
    tooltip: {},
    legend: {
      show: true,
      position: '10',
      textStyle: {
        color: '#fff',
        fontWeight: 'normal',
        fontSize: 12
      },
    },
    color: ['#FFFFFF', '#67e2fb', '#51b2f9', '#2D9284'],
    series: [{
      type: 'pie',
      radius: ['50%', '60%'],
      data: []
    }]
  },
  width: 400,
  height: 300,
  left: 500,
  top: 500
}