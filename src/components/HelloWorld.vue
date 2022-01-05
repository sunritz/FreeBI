<template>
  <el-container>
    <svgicon></svgicon>
    <el-drawer :title="drawerTitle" :visible.sync="opendrawer" :direction="direction" :before-close="handleClose">
      <el-form label-width="140px" v-if="showdrawer[0].a">
        <el-form-item label="标题">
          <el-input v-model="$store.state.charts.boxTitle" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="宽">
          <el-input v-model="$store.state.charts.width" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="高">
          <el-input v-model="$store.state.charts.height" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="标题颜色">
          <el-color-picker v-model="$store.state.charts.title.style.fill"></el-color-picker>
        </el-form-item>
        <el-form-item label="刻度颜色">
          <el-color-picker v-model="$store.state.charts.series[0].axisTick.style.stroke"></el-color-picker>
        </el-form-item>
        <el-form-item label="刻度字体颜色">
          <el-color-picker v-model="$store.state.charts.series[0].axisLabel.style.fill"></el-color-picker>
        </el-form-item>
        <el-form-item label="数据接口">
          <el-input v-model="$store.state.charts.server" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(0)">添加图表</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>

      <el-form label-width="120px" v-if="showdrawer[1].a">
        <el-form-item label="标题">
          <el-input v-model="$store.state.waterLevelPond.boxTitle" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="宽">
          <el-input v-model="$store.state.waterLevelPond.width" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="高">
          <el-input v-model="$store.state.waterLevelPond.height" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="水位图形状">
          <el-input v-model="$store.state.waterLevelPond.shape" style="width: 100px;"></el-input>
          (rect,roundRect,round)
        </el-form-item>
        <el-form-item label="波浪数量">
          <el-input v-model="$store.state.waterLevelPond.waveNum" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="波浪高度">
          <el-input v-model="$store.state.waterLevelPond.waveHeight" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="波浪透明度">
          <el-input v-model="$store.state.waterLevelPond.waveOpacity" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="数据接口">
          <el-input v-model="$store.state.waterLevelPond.server" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(1)">添加水位</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>

      <el-form label-width="150px" v-if="showdrawer[2].a">
        <el-form-item label="标题">
          <el-input v-model="$store.state.activeRingChart.boxTitle" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="宽">
          <el-input v-model="$store.state.activeRingChart.width" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="高">
          <el-input v-model="$store.state.activeRingChart.height" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="环宽度">
          <el-input v-model="$store.state.activeRingChart.lineWidth" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="时间间隔">
          <el-input v-model="$store.state.activeRingChart.activeTimeGap" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="环半径">
          <el-input v-model="$store.state.activeRingChart.radius" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="环半径(动态)">
          <el-input v-model="$store.state.activeRingChart.activeRadius" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="数字翻牌器小数位数">
          <el-input v-model="$store.state.activeRingChart.digitalFlopToFixed" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="数字翻牌器单位">
          <el-input v-model="$store.state.activeRingChart.digitalFlopUnit" style="width: 200px;"></el-input>
        </el-form-item>
        <el-form-item label="动效曲线">
          <el-input v-model="$store.state.activeRingChart.animationCurve" style="width: 200px;"></el-input>
        </el-form-item>
        <el-form-item label="动效帧数">
          <el-input v-model="$store.state.activeRingChart.animationFrame" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="显示原始值">
          <el-switch v-model="$store.state.activeRingChart.showOriginValue" active-color="#9aafcc"
            inactive-color="#b3c0d1">
          </el-switch>
        </el-form-item>
        <el-form-item label="数据接口">
          <el-input v-model="$store.state.activeRingChart.server" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(2)">添加动态环图</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>

      <el-form label-width="100px" v-if="showdrawer[3].a">
        <el-form-item label="标题">
          <el-input v-model="$store.state.capsuleChart.boxTitle" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="宽">
          <el-input v-model="$store.state.capsuleChart.width" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="高">
          <el-input v-model="$store.state.capsuleChart.height" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="单位">
          <el-input v-model="$store.state.capsuleChart.unit" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="显示数值">
          <el-switch v-model="$store.state.capsuleChart.showValue" active-color="#9aafcc" inactive-color="#b3c0d1">
          </el-switch>
        </el-form-item>
        <el-form-item label="数据接口">
          <el-input v-model="$store.state.capsuleChart.server" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(3)">添加胶囊柱图</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>

      <el-form label-width="100px" v-if="showdrawer[4].a">
        <el-form-item label="标题">
          <el-input v-model="$store.state.percentPond.boxTitle" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="宽">
          <el-input v-model="$store.state.percentPond.width" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="高">
          <el-input v-model="$store.state.percentPond.height" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="值">
          <el-input v-model="$store.state.percentPond.value" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="文字颜色">
          <el-color-picker v-model="$store.state.percentPond.textColor"></el-color-picker>
        </el-form-item>
        <el-form-item label="边框宽度">
          <el-input v-model="$store.state.percentPond.borderWidth" style="width: 100px;" disabled="disabled"></el-input>
          （只能在store里修改）
        </el-form-item>
        <el-form-item label="边框间隙">
          <el-input v-model="$store.state.percentPond.borderGap" style="width: 100px;" disabled="disabled"></el-input>
          （只能在store里修改）
        </el-form-item>
        <el-form-item label="边框半径">
          <el-input v-model="$store.state.percentPond.borderRadius" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="局部渐变">
          <el-switch v-model="$store.state.percentPond.localGradient" active-color="#9aafcc" inactive-color="#b3c0d1">
          </el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(4)">添加进度池</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>

      <el-form label-width="100px" v-if="showdrawer[5].a">
        <el-form-item label="标题">
          <el-input v-model="$store.state.conicalColumnChart.boxTitle" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="宽">
          <el-input v-model="$store.state.conicalColumnChart.width" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="高">
          <el-input v-model="$store.state.conicalColumnChart.height" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="文字大小">
          <el-input v-model="$store.state.conicalColumnChart.fontSize" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="文字颜色">
          <el-color-picker v-model="$store.state.conicalColumnChart.textColor"></el-color-picker>
        </el-form-item>
        <el-form-item label="柱顶图片url">
          <div v-for="(item,index) in $store.state.conicalColumnChart.img" :key="index">
            <el-input v-model="$store.state.conicalColumnChart.img[index]" style="width: 400px;"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="图片边长">
          <el-input v-model="$store.state.conicalColumnChart.imgSideLength" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="柱颜色">
          <el-input v-model="$store.state.conicalColumnChart.columnColor" style="width: 200px;"></el-input>
        </el-form-item>
        <el-form-item label="数据接口">
          <el-input v-model="$store.state.conicalColumnChart.server" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(5)">添加锥形柱图</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>

      <el-form label-width="140px" v-if="showdrawer[6].a">
        <el-form-item label="标题">
          <el-input v-model="$store.state.scrollBoard.boxTitle" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="宽">
          <el-input v-model="$store.state.scrollBoard.width" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="高">
          <el-input v-model="$store.state.scrollBoard.height" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="表行数">
          <el-input v-model="$store.state.scrollBoard.rowNum" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="表头背景色">
          <el-color-picker v-model="$store.state.scrollBoard.headerBGC"></el-color-picker>
        </el-form-item>
        <el-form-item label="奇数行背景色">
          <el-color-picker v-model="$store.state.scrollBoard.oddRowBGC"></el-color-picker>
        </el-form-item>
        <el-form-item label="偶数行背景色">
          <el-color-picker v-model="$store.state.scrollBoard.evenRowBGC"></el-color-picker>
        </el-form-item>
        <el-form-item label="轮播时间间隔(ms)">
          <el-input v-model="$store.state.scrollBoard.waitTime" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="表头高度">
          <el-input v-model="$store.state.scrollBoard.headerHeight" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="显示行号">
          <el-switch v-model="$store.state.scrollBoard.index" active-color="#9aafcc" inactive-color="#b3c0d1">
          </el-switch>
        </el-form-item>
        <el-form-item label="行号表头">
          <el-input v-model="$store.state.scrollBoard.indexHeader" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="轮播方式">
          <el-input v-model="$store.state.scrollBoard.carousel" style="width: 100px;"></el-input>
          (single | page)
        </el-form-item>
        <el-form-item label="悬浮暂停轮播">
          <el-switch v-model="$store.state.scrollBoard.hoverPause" active-color="#9aafcc" inactive-color="#b3c0d1">
          </el-switch>
        </el-form-item>
        <el-form-item label="表头数据接口">
          <el-input v-model="$store.state.scrollBoard.headerServer" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="表数据接口">
          <el-input v-model="$store.state.scrollBoard.server" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(6)">添加轮播表</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>

      <el-form label-width="140px" v-if="showdrawer[7].a">
        <el-form-item label="标题">
          <el-input v-model="$store.state.scrollRankingBoard.boxTitle" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="宽">
          <el-input v-model="$store.state.scrollRankingBoard.width" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="高">
          <el-input v-model="$store.state.scrollRankingBoard.height" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="表行数">
          <el-input v-model="$store.state.scrollRankingBoard.rowNum" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="轮播时间间隔(ms)">
          <el-input v-model="$store.state.scrollRankingBoard.waitTime" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="轮播方式">
          <el-input v-model="$store.state.scrollRankingBoard.carousel" style="width: 100px;"></el-input>
          (single | page)
        </el-form-item>
        <el-form-item label="数值单位">
          <el-input v-model="$store.state.scrollRankingBoard.unit" style="width: 100px;"></el-input>
        </el-form-item>
        <el-form-item label="自动排序">
          <el-switch v-model="$store.state.scrollRankingBoard.sort" active-color="#9aafcc" inactive-color="#b3c0d1">
          </el-switch>
        </el-form-item>
        <el-form-item label="数据接口">
          <el-input v-model="$store.state.scrollRankingBoard.server" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(7)">添加排名轮播表</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>

    </el-drawer>
    <el-header style="display: flex;padding: 0;">
      <div style="text-align: left;"><img src="../assets/logo.png"></div>
    </el-header>
    <el-container>
      <el-aside width="200px" class="side">
        <div class="title">创建图表</div>
        <div @click="addNew(0)" style="padding:5px 0 0 5px;width: 75px;height:75px" class="icon">
          <svg>
            <use xlink:href="#charts" />
          </svg>
        </div>
        <div @click="addNew(1)" style="padding:8px 0 0 7px;width: 73px;height:72px" class="icon">
          <svg>
            <use xlink:href="#waterLeavelPond" />
          </svg>
        </div>
        <div @click="addNew(2)" style="padding:5px 0 0 5px;width: 75px;height:75px" class="icon">
          <svg>
            <use xlink:href="#activeRingChart" />
          </svg>
        </div>
        <div @click="addNew(3)" style="padding:8px 0 0 5px;width: 75px;height:72px" class="icon">
          <svg>
            <use xlink:href="#capsuleChart" />
          </svg>
        </div>
        <div @click="addNew(4)" style="padding-right:7px;width: 73px;" class="icon">
          <svg>
            <use xlink:href="#percentPond" />
          </svg>
        </div>
        <div @click="addNew(5)" style="padding-right:7px;width: 73px;" class="icon">
          <svg>
            <use xlink:href="#conicalColumnChart" />
          </svg>
        </div>
        <div @click="addNew(6)" style="padding:5px 7px 0 0;width: 73px;height:75px" class="icon">
          <svg>
            <use xlink:href="#scrollBoard" />
          </svg>
        </div>
        <div @click="addNew(7)" class="icon">
          <svg>
            <use xlink:href="#scrollRankingBoard" />
          </svg>
        </div>
        <div class="title">风格适配</div>
        <el-form label-width="120px" style="width:200px">
          <el-form-item label="画布背景色">
            <el-color-picker v-model="$store.state.boardBG"></el-color-picker>
          </el-form-item>
          <el-form-item label="盒子背景色">
            <el-color-picker v-model="$store.state.boxBG"></el-color-picker>
          </el-form-item>
          <el-form-item label="盒子圆角">
            <el-switch v-model="$store.state.boxBorderRadius" active-color="#9aafcc" inactive-color="#b3c0d1">
            </el-switch>
          </el-form-item>
        </el-form>
        <div class="title">大屏保存</div>
        <el-row style="display: flex;flex-direction: column;justify-content:flex-start;height: 100px;">

          <el-button type="primary" icon="el-icon-s-grid" style="width:120px;" @click='saveGrids'>保存布局</el-button>
          <el-button type="primary" icon="el-icon-s-data" style="width:120px;" @click='saveData'>保存数据</el-button>
        </el-row>
        <div class="title" style="align-items: flex-end;">定制开发</div>
        sunritz@126.com
      </el-aside>
      <el-main :style="{ backgroundColor: $store.state.boardBG,backgroundImage:'url('+mainbg+')'}">
        <grid-layout :layout.sync="layout" :col-num="12" :row-height="30" :is-draggable="true" :is-resizable="true"
          :is-mirrored="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true">
          <grid-item v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i"
            :style="{ background: $store.state.boxBG,borderRadius:$store.state.boxBorderRadius==true?'7px':'0'}">
            <charts :html="item.i"></charts>
          </grid-item>
        </grid-layout>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
  import Vue from 'vue'
  import VueGridLayout from 'vue-grid-layout';
  import svgicons from '../assets/icons.vue';
  const axios = require('axios');
  import {
    mapGetters
  } from 'vuex'
  export default {
    name: 'HelloWorld',
    components: {
      svgicon: svgicons,
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem,
      'charts': {
        props: {
          html: String
        },
        render(h) {
          const com = Vue.extend({
            template: `<div>${this.html}</div>`,
            data() {
              return {
                drawer: false,
                direction: 'rtl',
                charts: {
                  boxTitle: this.$store.state.charts.boxTitle,
                  title: "图表",
                  option: {
                    title: {
                      text: '',
                      style: {
                        fill: this.$store.state.charts.title.style.fill,
                      }
                    },
                    series: [{
                      type: 'gauge',
                      data: this.$store.state.charts.series[0].data,
                      center: ['50%', '50%'],
                      radius: "90%",

                      axisLabel: {
                        formatter: '{value}%',
                        style: {
                          fill: this.$store.state.charts.series[0].axisLabel.style.fill,
                        }
                      },
                      axisTick: {
                        style: {
                          stroke: this.$store.state.charts.series[0].axisTick.style.stroke,
                        }
                      },
                      animationCurve: 'easeInOutBack'
                    }]
                  }
                },
                waterLevelPond: {
                  title: "水位图",
                  boxTitle: this.$store.state.waterLevelPond.boxTitle,
                  config: {
                    data: this.$store.state.waterLevelPond.data,
                    shape: this.$store.state.waterLevelPond.shape,
                    waveNum: this.$store.state.waterLevelPond.waveNum,
                    waveHeight: this.$store.state.waterLevelPond.waveHeight,
                    waveOpacity: this.$store.state.waterLevelPond.waveOpacity,
                  }
                },
                activeRingChart: {
                  title: "动态环图",
                  boxTitle: this.$store.state.activeRingChart.boxTitle,
                  config: {
                    data: this.$store.state.activeRingChart.data,
                    lineWidth: this.$store.state.activeRingChart.lineWidth,
                    activeTimeGap: this.$store.state.activeRingChart.activeTimeGap,
                    radius: this.$store.state.activeRingChart.radius,
                    activeRadius: this.$store.state.activeRingChart.activeRadius,
                    color: this.$store.state.activeRingChart.radiusColor,
                    digitalFlopToFixed: this.$store.state.activeRingChart.digitalFlopToFixed,
                    digitalFlopUnit: this.$store.state.activeRingChart.digitalFlopUnit,
                    animationCurve: this.$store.state.activeRingChart.animationCurve,
                    animationFrame: this.$store.state.activeRingChart.animationFrame,
                    showOriginValue: this.$store.state.activeRingChart.showOriginValue,
                  }
                },
                capsuleChart: {
                  title: "胶囊柱图",
                  boxTitle: this.$store.state.capsuleChart.boxTitle,
                  config: {
                    data: this.$store.state.capsuleChart.data,
                    unit: this.$store.state.capsuleChart.unit,
                    colors: this.$store.state.capsuleChart.capsuleColor,
                    showValue: this.$store.state.capsuleChart.showValue
                  }
                },
                percentPond: {
                  title: "进度池",
                  boxTitle: this.$store.state.percentPond.boxTitle,
                  config: {
                    value: this.$store.state.percentPond.value,
                    lineDash: this.$store.state.percentPond.lineDash,
                    textColor: this.$store.state.percentPond.textColor,
                    borderWidth: this.$store.state.percentPond.borderWidth,
                    borderGap: this.$store.state.percentPond.borderGap,
                    borderRadius: this.$store.state.percentPond.borderRadius,
                    localGradient: this.$store.state.percentPond.localGradient,
                  }
                },
                conicalColumnChart: {
                  title: "锥形柱图",
                  boxTitle: this.$store.state.conicalColumnChart.boxTitle,
                  config: {
                    data: this.$store.state.conicalColumnChart.data,
                    img: this.$store.state.conicalColumnChart.img,
                    fontSize: this.$store.state.conicalColumnChart.fontSize,
                    textColor: this.$store.state.conicalColumnChart.textColor,
                    imgSideLength: this.$store.state.conicalColumnChart.imgSideLength,
                    columnColor: this.$store.state.conicalColumnChart.columnColor,
                    showValue: this.$store.state.conicalColumnChart.showValue,
                  }
                },
                scrollBoard: {
                  title: "轮播表",
                  boxTitle: this.$store.state.scrollBoard.boxTitle,
                  config: {
                    header: this.$store.state.scrollBoard.header,
                    data: this.$store.state.scrollBoard.data,
                    rowNum: this.$store.state.scrollBoard.rowNum,
                    headerBGC: this.$store.state.scrollBoard.headerBGC,
                    oddRowBGC: this.$store.state.scrollBoard.oddRowBGC,
                    evenRowBGC: this.$store.state.scrollBoard.evenRowBGC,
                    waitTime: this.$store.state.scrollBoard.waitTime,
                    headerHeight: this.$store.state.scrollBoard.headerHeight,
                    index: this.$store.state.scrollBoard.index,
                    indexHeader: this.$store.state.scrollBoard.indexHeader,
                    carousel: this.$store.state.scrollBoard.carousel,
                    hoverPause: this.$store.state.scrollBoard.hoverPause,
                  }
                },
                scrollRankingBoard: {
                  title: "排名轮播表",
                  boxTitle: this.$store.state.scrollRankingBoard.boxTitle,
                  config: {
                    data: this.$store.state.scrollRankingBoard.data,
                    rowNum: this.$store.state.scrollRankingBoard.rowNum,
                    waitTime: this.$store.state.scrollRankingBoard.waitTime,
                    carousel: this.$store.state.scrollRankingBoard.carousel,
                    unit: this.$store.state.scrollRankingBoard.unit,
                    sort: this.$store.state.scrollRankingBoard.sort,
                  }
                }
              }
            },
            methods: {
              close(val) {
                this.$store.state.closeboxid = val;
              }
            }
          });
          return h(com, {});
        }
      }
    },
    data() {
      return {
        mainbg: require('../assets/main.jpg'),
        drawerTitle: '',
        boxTitle: this.$store.state.boxTitle,
        boardBG: this.$store.state.boardBG,
        opendrawer: false,
        direction: 'rtl',
        showdrawer: [{
            a: false,
            t: '图表'
          },
          {
            a: false,
            t: '水位图'
          },
          {
            a: false,
            t: '动态环图'
          },
          {
            a: false,
            t: '胶囊柱图'
          },
          {
            a: false,
            t: '进度池'
          },
          {
            a: false,
            t: '锥形柱图'
          },
          {
            a: false,
            t: '轮播表'
          },
          {
            a: false,
            t: '排名轮播表'
          }
        ],
        charts: false,
        waterLevelPond: false,
        activeRingChart: false,
        capsuleChart: false,
        percentPond: false,
        conicalColumnChart: false,
        scrollBoard: false,
        scrollRankingBoard: false,
        html: '<dv-active-ring-chart :config="config" style="width:300px;height:300px" />',
        layout: [],
      }
    },
    computed: {
      ...mapGetters(["getboxid"]),
      getboxid1() {
        // return this.$store.state.mapbox.map;
        return this.getboxid;
      }
    },
    watch: {
      getboxid1(newData, oldData) {
        console.log(newData)
        let that = this;
        this.layout.forEach(function(c, i, a) {
          if (c.id == newData) {
            that.layout.splice(i, 1)
          }
        })
        // console.log(this.layout)
      }
    },
    methods: {
      onSubmit(n) {
        this.putin(n);
        this.opendrawer = false;
      },
      onCancel() {
        this.opendrawer = false;
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      addNew(val) {
        this.opendrawer = true;
        for (let i = 0; i <= 7; i++) {
          this.showdrawer[i].a = false;
        }
        this.drawerTitle = this.showdrawer[val].t;
        this.showdrawer[val].a = true;
      },
      putin(val) {
        this.mainbg = '';
        let idOnly = Date.parse(new Date());
        if (val == 0) {
          let width = this.$store.state.charts.width;
          let height = this.$store.state.charts.height;
          axios.get(this.$store.state.charts.server).then((res) => {
            this.$store.state.charts.series[0].data = res.data;
            this.layout.push({
              "x": 0,
              "y": 0,
              "w": Math.round(width / 100),
              "h": height < 200 ? Math.round(height / 20) : Math.round(height / 30),
              "i": '<h1 class="et">{{charts.boxTitle}}</h1><span @click="close(' + idOnly +
                ')" class="close">×</span><dv-charts :option="charts.option" style="width:' +
                width + 'px;height:' + height + 'px;margin:0 auto" />',
              id: idOnly
            })
          })
        } else if (val == 1) {
          let width = this.$store.state.waterLevelPond.width;
          let height = this.$store.state.waterLevelPond.height;
          axios.get(this.$store.state.waterLevelPond.server).then((res) => {
            this.$store.state.waterLevelPond.data = res.data;
            this.layout.push({
              "x": 0,
              "y": 0,
              "w": Math.round(width / 100),
              "h": height < 200 ? Math.round(height / 20) : Math.round(height / 30),
              "i": '<h1 class="et">{{waterLevelPond.boxTitle}}</h1><span @click="close(' + idOnly +
                ')" class="close">×</span><dv-water-level-pond :config="waterLevelPond.config" style="width:' +
                width + 'px;height:' + height + 'px;margin:0 auto" />',
              id: idOnly
            })
          })
        } else if (val == 2) {
          let width = this.$store.state.activeRingChart.width;
          let height = this.$store.state.activeRingChart.height;
          axios.get(this.$store.state.activeRingChart.server).then((res) => {
            this.$store.state.activeRingChart.data = res.data;
            this.layout.push({
              "x": 0,
              "y": 0,
              "w": Math.round(width / 100),
              "h": height < 200 ? Math.round(height / 20) : Math.round(height / 30),
              "i": '<h1 class="et">{{activeRingChart.boxTitle}}</h1><span @click="close(' + idOnly +
                ')" class="close">×</span><dv-active-ring-chart :config="activeRingChart.config" style="width:' +
                width + 'px;height:' + height + 'px;margin:0 auto" />',
              id: idOnly
            })
          })

        } else if (val == 3) {
          let width = this.$store.state.capsuleChart.width;
          let height = this.$store.state.capsuleChart.height;
          axios.get(this.$store.state.capsuleChart.server).then((res) => {
            this.$store.state.capsuleChart.data = res.data;
            this.layout.push({
              "x": 0,
              "y": 0,
              "w": Math.round(width / 100),
              "h": height < 200 ? Math.round(height / 20) : Math.round(height / 30),
              "i": '<h1 class="et">{{capsuleChart.boxTitle}}</h1><span @click="close(' + idOnly +
                ')" class="close">×</span><dv-capsule-chart :config="capsuleChart.config" style="width:' +
                width + 'px;height:' + height + 'px;margin:0 auto" />',
              id: idOnly
            })
          })
        } else if (val == 4) {
          let width = this.$store.state.percentPond.width;
          let height = this.$store.state.percentPond.height;
          this.layout.push({
            "x": 0,
            "y": 0,
            "w": Math.round(width / 100),
            "h": height < 200 ? Math.round(height / 20) : Math.round(height / 30),
            "i": '<h1 class="et">{{percentPond.boxTitle}}</h1><span @click="close(' + idOnly +
              ')" class="close">×</span><dv-percent-pond :config="percentPond.config" style="width:' +
              width + 'px;height:' + height + 'px;margin:0 auto" />',
            id: idOnly
          })
        } else if (val == 5) {
          let width = this.$store.state.conicalColumnChart.width;
          let height = this.$store.state.conicalColumnChart.height;
          axios.get(this.$store.state.conicalColumnChart.server).then((res) => {
            this.$store.state.conicalColumnChart.data = res.data;
            this.layout.push({
              "x": 0,
              "y": 0,
              "w": Math.round(width / 100),
              "h": height < 200 ? Math.round(height / 20) : Math.round(height / 30),
              "i": '<h1 class="et">{{conicalColumnChart.boxTitle}}</h1><span @click="close(' + idOnly +
                ')" class="close">×</span><dv-conical-column-chart :config="conicalColumnChart.config" style="width:' +
                width + 'px;height:' + height + 'px;margin:0 auto" />',
              id: idOnly
            })
          })
        } else if (val == 6) {
          let width = this.$store.state.scrollBoard.width;
          let height = this.$store.state.scrollBoard.height;
          let _this = this;
          axios.all([
            axios.get(this.$store.state.scrollBoard.headerServer),
            axios.get(this.$store.state.scrollBoard.server)
          ]).then(axios.spread(function(header, sheet) {
            _this.$store.state.scrollBoard.header = header.data;
            _this.$store.state.scrollBoard.data = sheet.data;
            _this.layout.push({
              "x": 0,
              "y": 0,
              "w": Math.round(width / 100),
              "h": height < 200 ? Math.round(height / 20) : Math.round(height / 30),
              "i": '<h1 class="et">{{scrollBoard.boxTitle}}</h1><span @click="close(' + idOnly +
                ')" class="close">×</span><dv-scroll-board :config="scrollBoard.config" style="width:' +
                width + 'px;height:' + height + 'px;margin:0 auto" />',
              id: idOnly
            })
          }));
        } else if (val == 7) {
          let width = this.$store.state.scrollRankingBoard.width;
          let height = this.$store.state.scrollRankingBoard.height;
          axios.get(this.$store.state.scrollRankingBoard.server).then((res) => {
            this.$store.state.scrollRankingBoard.data = res.data;
            this.layout.push({
              "x": 0,
              "y": 0,
              "w": Math.round(width / 100),
              "h": height < 200 ? Math.round(height / 20) : Math.round(height / 30),
              "i": '<h1 class="et">{{scrollRankingBoard.boxTitle}}</h1><span @click="close(' + idOnly +
                ')" class="close">×</span><dv-scroll-ranking-board :config="scrollRankingBoard.config" style="width:' +
                width + 'px;height:' + height + 'px;margin:0 auto" />',
              id: idOnly
            })
          })
        }
      },
      saveGrids() {
        console.log(this.layout)
        this.$message('存储数据已经打印在console.log');
      },
      saveData() {
        console.log(this.$store.state)
        this.$message('存储数据已经打印在console.log');
      }
    }
  }
</script>
<style>
  .et {
    margin: 0;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 18px;
    line-height: 45px;
    height: 45px;
    position: relative;
  }

  .el-drawer.rtl .el-drawer__header {
    background-color: #6b7888;
    height: 50px;
    color: #fff;
    padding-top: 5px;
    padding-bottom: 10px;
  }

  .close {
    font-size: 30px;
    color: #fff;
    position: absolute;
    right: 10px;
    top: 0
  }

  .vue-grid-item.cssTransforms {
    background-color: #6b7888;
  }

  .side {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 5px;
    min-height: calc(100vh - 60px);
    align-content: flex-start;
  }

  .side>.title {
    width: 200px;
    font-size: 16px;
    color: #fff;
    height: 50px;
    line-height: 50px;
    margin: 0 -5px 10px -5px;
    text-align: center;
    background-color: #9aafcc;
  }

  .side>.icon {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 15px;
    background-color: #fff;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .side>.icon:hover {
    box-shadow: 3px 3px 5px 0px #999;
  }

  .side>.icon>svg {
    width: 60px;
    height: 60px;
  }

  .side .el-form-item {
    margin-bottom: 0;
  }

  .side .el-button+.el-button {
    margin: 10px 0 0 0;
  }

  .el-main {
    background-size: cover;
    background-position: center;
  }
</style>
