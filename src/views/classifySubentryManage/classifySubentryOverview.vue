<template>
  <div class='classifySubentryOverview'>
    <div class="tabs">
      <div
        :style="{
          color: isActive == 1 ? this.$store.state.common.colorName : '#999999',
        }"
        class="first"
        @click="tabsChange(1)"
      >
        <div>总能耗</div>
        <div
          :style="{
            color:
              isActive == 1 ? this.$store.state.common.colorName : '#666666',
          }"
          class="weight"
        >
          4289.23(吨标煤)
        </div>
        <div><span>与同期相比</span><span>+45%</span></div>
        <span
          ><div
            :style="{
              'background-color':
                isActive == 1 ? this.$store.state.common.colorName : '#999999',
            }"
            class="tabs-line"
          ></div
        ></span>
      </div>
      <div
        :style="{
          color: isActive == 2 ? this.$store.state.common.colorName : '#999999',
        }"
        class="second"
        @click="tabsChange(2)"
      >
        <div>总成本</div>
        <div
          :style="{
            color:
              isActive == 2 ? this.$store.state.common.colorName : '#666666',
          }"
          class="weight"
        >
          0.23(万元)
        </div>
        <div><span>与同期相比</span><span>+45%</span></div>
        <span
          ><div
            :style="{
              'background-color':
                isActive == 2 ? this.$store.state.common.colorName : '#999999',
            }"
            class="tabs-line"
          ></div
        ></span>
      </div>
  <!-- classDataStatistics dui classStatisticsAnalyse   tong classPariPassu  h classLinkRelativeRatio duibiao classBenchmarkingStatistics 
  shujubb classDataReport
  -->

  <!-- /familyEnergyManage/  zonglan familyEnergyOverview  sjtj familyDataStatistics  dui familyStatisticsAnalyse 
   tong familyPariPassu h familyLinkRelativeRatio   zuoxifenxi  familyRestStatistics    zuoxixiangqing familyRestDetails     
   paimfenxi  familyRankingStatistics     shujubb familyDataReport  jzfengxxi familyExtremumStatistics

   /cockpit
  /cockpit/largeScreen
  -->
    </div>
    <div class="charts">
      <el-row class="charts-title" type="flex" justify="space-between">
        <el-col :style="{ color: this.$store.state.common.colorName }"
          >本年度分类能耗占比情况(吨标煤)</el-col
        >
        <el-col :style="{ color: this.$store.state.common.colorName }">
          本年度分类能耗占比趋势(吨标煤)</el-col
        >
      </el-row>
      <el-row class="charts-title" type="flex" justify="space-between"
        ><el-col>
          <div id="main" style="width: 481px; height: 446px"></div>
        </el-col>
        <el-col>
          <div id="main2" style="width: 771px; height: 446px"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{ isActive: 1,}
    },
    mounted() {
      var myChart = this.$echarts.init(document.getElementById("main"));
      var myChart2 = this.$echarts.init(document.getElementById("main2"));
      // 绘制图表
      var option1 = {
        title: {
          /*    text: "单位建筑面积能耗占比情况(吨标煤/㎡)", */
          subtext: "",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          y: "bottom",
          x: "center",
          icon: "circle",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "70%",
            icon: "circle",
            data: [
              { value: 1048, name: "电" },
              { value: 735, name: "天然气" },
              { value: 580, name: "蒸汽" },
              { value: 484, name: "煤" },
              { value: 300, name: "汽油" },
              { value: 300, name: "柴油" },
              { value: 300, name: "管道煤汽" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      var option2 = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        toolbox: {
          feature: {
            /*   dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true } */
          },
        },
        legend: {
          data: [
            /* 'Evaporation', 'Precipitation', 'Temperature' */
          ],
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
            axisPointer: {
              type: "shadow",
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ",
            },
          },
          {
            type: "value",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value} ",
            },
          },
        ],
        series: [
          {
            name: "Evaporation",
            type: "bar",

            tooltip: {
              valueFormatter: function (value) {
                return value + " ml";
              },
            },

            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
            ],
            barWidth: 15,
            slient: true,
            shading: "realistic", //着色效果

            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgb(238, 102, 102)", ///#409EFF
              color: "rgb(238, 102, 102)",
              barBorderRadius: [7, 7, 7, 7],
              /*  shading: "realistic",
              borderWidth: 3, 
              borderColor: "rgba(94, 183, 249,  0.13)", 
  */
            },
          },
          /*  {
        name: 'Precipitation',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value + ' ml';
          }
        },
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
        ]
      }, */

          {
            name: "Temperature",
            type: "line",
            yAxisIndex: 1,
            color: "#FF6600",
            //  smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + " °C";
              },
            },

            data: [
              2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
            ],
          },
        ],
      };
      myChart.setOption(option1);
      myChart2.setOption(option2);
    },
    methods:{
       tabsChange(e) {
      this.isActive = e;
    },
}
};

</script>

<style lang="scss" scoped>
.classifySubentryOverview{
 
.charts {
  padding: 15px 35px;
  .charts-title {
    text-align: center;

    padding-bottom: 40px;
    font-size: 18px;
    color: #666666;
  }
}
.tabs {
  display: flex;
  padding: 15px 35px;
  justify-content: start;
   cursor: pointer;
  font-size: 14px;
  .first {
    flex: 1;
    padding: 10px 0;

    > div {
      margin: 10px 10px 0 10px;
    }

    //  background-color: red;
  }
  .second {
    flex: 1;
    padding: 10px 0;
    > div {
      margin: 10px 10px 0 10px;
    }
  }
  
}
.tabs-line {
  width: 100%;
  height: 1px;
  background-color: rgba(220, 222, 226, 1);

  margin-top: 15px;
}

.weight {
  color: #666666;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
}
.white {
  color: #fff;
}
}
</style>