<template>
  <div class="data-statistics">
    <!-- 侧边栏 -->
    <el-container>
      <el-aside width="200px">
        <el-row>
          <el-col :span="12">
            <div class="left-title">
              <el-input v-model="input" placeholder="请选择区域"></el-input>
            </div>

            <el-tree
              :data="menu"
              :props="defaultProps"
              @node-click="handleNodeClick"
            ></el-tree>

            <!--    <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <template >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>区域1</span>
                  </template>

                  <el-submenu index="1-1">
                    <template slot="title"
                      >1号楼
                      <i class="iconfont el-icon-loufang"></i>
                    </template>
                    <template>
                      <el-submenu index="1-1-1">
                        <template slot="title"
                          >1楼
                          <i class="iconfont el-icon-louceng"></i>
                        </template>
                        <template slot="title"></template>
                        <el-menu-item index="1-1-1-1">
                          <template slot="title"
                            >101号房
                            <i class="iconfont el-icon-fangjianshu"></i>
                          </template>
                        </el-menu-item>
                        <el-menu-item index="1-1-1-2">
                          <template slot="title"
                            >102号房
                            <i class="iconfont el-icon-fangjianshu"></i>
                          </template>
                        </el-menu-item>
                        <el-menu-item index="1-1-1-3">
                          <template slot="title">
                            103号房
                            <i class="iconfont el-icon-fangjianshu"></i>
                          </template>
                        </el-menu-item>
                      </el-submenu>
                      <el-submenu index="1-4">
                        <template slot="title"
                          >2楼<i class="iconfont el-icon-louceng"></i
                        ></template>
                        <el-menu-item index="1-4-1">
                          <template slot="title">
                            201号房
                            <i class="iconfont el-icon-fangjianshu"></i>
                          </template>
                        </el-menu-item>
                      </el-submenu>
                    </template>
                  </el-submenu>
                </el-submenu>
              </template>
              <template>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>区域2</span>
                  </template>
                </el-submenu>
              </template>
            </el-menu> -->
          </el-col>
        </el-row>
      </el-aside>
      <el-container style="margin-left: 8px">
        <!-- 头部 -->
        <el-header style="font-size: 12px">
          <el-row :gutter="20">
            <el-col :span="17">
              <el-row type="flex" justify="start">
                <el-col :span="4">
                  <el-button-group>
                    <el-button >年</el-button>
                    <el-button >月</el-button>
                    <el-button >日</el-button>
                  </el-button-group></el-col
                >

                <el-col :span="4">
                  <el-button-group>
                    <el-button >区间</el-button>
                    <el-button >单个</el-button>
                  </el-button-group>
                </el-col>

                <el-col :span="3">
                  <el-date-picker
                    style="width: 170px"
                    
                    v-model="value3"
                    type="year"
                    placeholder="选择年"
                  >
                  </el-date-picker>
                </el-col>
                <el-col :span="4" push='2'>
                  <el-select  v-model="value" placeholder="总消耗">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-col>

                <el-col :span="3" push='3'>
                  <el-input
                    
                    placeholder="请选择分项"
                    v-model="input"
                    :disabled="true"
                  >
                  </el-input>
                </el-col>
               
              </el-row>
            </el-col>
            <el-col :span="6">
              <el-row type="flex" justify="space-between">
                <el-col :span="16">
                  <el-button-group>
                    <el-button  icon="el-icon-s-operation"
                      >看能耗</el-button
                    >
                    <el-button  icon="el-icon-date"
                      >看成本</el-button
                    >
                  </el-button-group>
                </el-col>

                <el-col :span="8">
                  <el-button icon="el-icon-tickets"  plain>能耗报表</el-button>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-header>
        <!-- 内容 -->
        <el-main>
          <div class="tabs">
            <div
              :style="{
                color:
                  isActive == 1
                    ? this.$store.state.common.colorName
                    : '#999999',
              }"
              class="first"
              @click="tabsChange(1)"
            >
              <div>总能耗</div>
              <div
                :style="{
                  color:
                    isActive == 1
                      ? this.$store.state.common.colorName
                      : '#666666',
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
                      isActive == 1
                        ? this.$store.state.common.colorName
                        : '#999999',
                  }"
                  class="tabs-line"
                ></div
              ></span>
            </div>
            <div
              :style="{
                color:
                  isActive == 2
                    ? this.$store.state.common.colorName
                    : '#999999',
              }"
              class="second"
              @click="tabsChange(2)"
            >
              <div>人均能耗</div>
              <div
                :style="{
                  color:
                    isActive == 2
                      ? this.$store.state.common.colorName
                      : '#666666',
                }"
                class="weight"
              >
                0.23(吨标煤/人)
              </div>
              <div><span>与同期相比</span><span>+45%</span></div>
              <span
                ><div
                  :style="{
                    'background-color':
                      isActive == 2
                        ? this.$store.state.common.colorName
                        : '#999999',
                  }"
                  class="tabs-line"
                ></div
              ></span>
            </div>
            <div
              :style="{
                color:
                  isActive == 3
                    ? this.$store.state.common.colorName
                    : '#999999',
              }"
              class="third"
              @click="tabsChange(3)"
            >
              <div>单位建筑面积消耗</div>
              <div
                :style="{
                  color:
                    isActive == 3
                      ? this.$store.state.common.colorName
                      : '#666666',
                }"
                class="weight"
              >
                0.23(吨标煤/㎡)
              </div>
              <div><span>与同期相比</span><span>+45%</span></div>
              <span
                ><div
                  :style="{
                    'background-color':
                      isActive == 3
                        ? this.$store.state.common.colorName
                        : '#999999',
                  }"
                  class="tabs-line"
                ></div
              ></span>
            </div>
          </div>
          <div class="charts">
            <el-row class="charts-title" type="flex" justify="space-between">
              <el-col :style="{ color: this.$store.state.common.colorName }"
                >单位建筑面积能耗占比情况(吨标煤/㎡)</el-col
              >
              <el-col :style="{ color: this.$store.state.common.colorName }">
                单位建筑面积能耗趋势(吨标煤/㎡)f</el-col
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
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "dataStatistics",
  components: {},

  data() {
    return {
      defaultProps: {
        children: "children",
        label: "label",
      },
      menu: [
        {
          children: [
            {
              children: [
                { children: [], id: 6, label: "子部门1", parentId: 2 },
                { children: [], id: 10, label: "子部门10", parentId: 2 },
                { children: [], id: 11, label: "子部门11", parentId: 2 },
              ],
              id: 2,
              label: "部门1",
              parentId: 1,
            },
            {
              children: [
                { children: [], id: 7, label: "子部门2", parentId: 3 },
              ],
              id: 3,
              label: "部门2",
              parentId: 1,
            },
            {
              children: [
                { children: [], id: 8, label: "子部门3", parentId: 4 },
              ],
              id: 4,
              label: "部门3",
              parentId: 1,
            },
            {
              children: [
                { children: [], id: 9, label: "子部门4", parentId: 5 },
              ],
              id: 5,
              label: "部门4",
              parentId: 1,
            },
          ],
          id: 1,
          label: "公司",
          parentId: 0,
        },
      ],
      value3: "",
      isActive: 1,
      options: [
        {
          value: "选项1",
          label: "总能耗",
        },
        {
          value: "选项2",
          label: "电",
        },
        {
          value: "选项3",
          label: "水",
        },
        {
          value: "选项4",
          label: "天然气",
        },
        {
          value: "选项5",
          label: "蒸汽",
        },
        {
          value: "选项5",
          label: "汽油",
        },
      ],
      input: "",
      activeName: "second",

      option: {},
    };
  },
  created() {},
  mounted() {
    console.log(this.$store.state.common.colorName);
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
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    tabsChange(e) {
      this.isActive = e;
    },
    handleNodeClick(data) {
      console.log(data);
    },
  },
};
</script>
<style lang="scss" scoped>
.data-statistics {
  //   background-color: #fff;

  box-sizing: border-box;
  box-shadow: none;
  font-family: 微软雅黑;
  font-weight: 400;
  font-style: normal;
  color: #fff;
  background: inherit inherit inherit inherit inherit inherit inherit inherit
    inherit;
  border-collapse: collapse;
}
.boder {
  border-width: 1px;
  border-style: solid;
  border-color: rgb(233, 233, 233);
  border-collapse: collapse;
}
.left-sidebar {
}

.el-button:hover {
  color: #fff;
  background-color: #409eff;
  border-color: #a5aec2c9;
}
.el-button:focus {
  color: #fff;
  background-color: #409eff;
  border-color: #a5aec2c9;
}

.left-title {
  width: 197px;
  height: 65px;
  line-height: 65px;
  text-align: center;

  border-radius: 3px 3px 0px 0px;
}
.tabs {
  display: flex;
  padding: 15px;
  justify-content: start;
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
  .third {
    flex: 1;
    padding: 10px 0;
    > div {
      margin: 10px 10px 0 10px;
    }
  }
}
.charts {
  .charts-title {
    text-align: center;

    padding-bottom: 40px;
    font-size: 18px;
    color: #666666;
  }
}
.tabs {
  cursor: pointer;
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

::v-deep input::-webkit-input-placeholder {
  //-webkit-text-fill-color:#fff ;
  -webkit-text-fill-color: #666666;
}
</style>

