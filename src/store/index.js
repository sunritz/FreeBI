import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  boardBG:'#fff',
  boxBG:'#6b7888',
  boxBorderRadius:false,
  closeboxid: '',
  charts:{
    width: 300,
    height: 300,
    title: {
        text: '',
        style: {
          fill: '#fff'
        }
      },
      series: [
        {
          type: 'gauge',
          data: [ { name: 'itemA', value: 55 } ],
          center: ['50%', '50%'],
          axisLabel: {
            formatter: '{value}%',
            style: {
              fill: '#fff'
            }
          },
          axisTick: {
            style: {
              stroke: '#fff'
            }
          },
          animationCurve: 'easeInOutBack'
        }
      ],
      server:'/charts/data',
  },
  waterLevelPond: {
    boxTitle:'',
    data: [76, 45],
    shape:'roundRect',
    waveNum:3,
    waveHeight:10,
    waveOpacity:0.4,
    width: 150,
    height: 200,
    server:'/waterLevelPond/data'
  },
  activeRingChart: {
    data: [],
    lineWidth: 30,
    width: 250,
    height: 250,
    activeTimeGap: 3000,
    radius: '80%',
    activeRadius: '85%',
    digitalFlopToFixed: 0,
    digitalFlopUnit:'',
    animationCurve:'easeOutCubic',
    animationFrame:50,
    showOriginValue:false,
    radiusColor: [],
    server: '/activeRingChart/data',
  },
  capsuleChart: {
    data: [],
    width: 500,
    height: 250,
    unit: '',
    capsuleColor: [],
    server: '/capsuleChart/data',
  },
  percentPond: {
    width: 300,
    height: 100,
    value: 10,
    borderWidth:3,
    borderGap:3,
    lineDash: [3, 1],
    textColor: '#fff',
    borderRadius: 5,
    localGradient: true
  },
  conicalColumnChart: {
    width: 500,
    height: 250,
    data: [],
    img: [
      'http://datav.jiaminghi.com/img/conicalColumnChart/1st.png',
      'http://datav.jiaminghi.com/img/conicalColumnChart/2st.png',
      'http://datav.jiaminghi.com/img/conicalColumnChart/3st.png',
      'http://datav.jiaminghi.com/img/conicalColumnChart/4st.png',
      'http://datav.jiaminghi.com/img/conicalColumnChart/5st.png',
      'http://datav.jiaminghi.com/img/conicalColumnChart/6st.png',
      'http://datav.jiaminghi.com/img/conicalColumnChart/7st.png'
    ],
    fontSize: 12,
    textColor: '#fff',
    imgSideLength: 30,
    columnColor: 'rgba(0, 194, 255, 0.4)',
    showValue: true,
    server: '/conicalColumnChart/data'
  },
  scrollBoard: {
    width: 500,
    height: 250,
    header: [],
    data: [],
    rowNum: 5,
    headerBGC:'#00BAFF',
    oddRowBGC: '#003B51',
    evenRowBGC: '#0A2732',
    waitTime: 2000,
    headerHeight: 35,
    columnWidth: [150],
    align: ['center'],
    index: true,
    indexHeader: '#',
    carousel: 'page',
    hoverPause: true,
    headerServer: '/scrollBoard/header',
    server: '/scrollBoard/data'
  },
  scrollRankingBoard:{
    width: 500,
    height: 250,
    data:[],
    rowNum:5,
    waitTime:2000,
    carousel:'single',
    unit:'',
    sort:true,
    server: '/scrollRankingBoard/data',
  }
}
const getters = {
  getboxid: (state) => {
    return state.closeboxid
  }
}
export default new Vuex.Store({
  state,
  getters
})
