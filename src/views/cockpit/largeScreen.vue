<template>
  <div>
    <h3>所有部门/整个单位</h3>

    <el-row :gutter="20" style="padding-bottom: 20px">
      <el-col :span="8" style="padding: 0 14px">
        <el-col class="white">
          <el-row
            type="flex"
            class="row-bg"
            justify="space-between"
            style="padding: 18px 10px 0 10px"
          >
            <el-col :span="6"><div class="title-font">定额管理</div></el-col>
            <el-col :span="2"
              ><div class="more" @click="clickDialogVisible('定额管理')">
                更多
              </div></el-col
            >
          </el-row>
          <el-divider></el-divider>
          <table border="1" class="table">
            <tr>
              <th rowspan="2" style="width: 115px">年定额量</th>
              <th>计划量</th>
              <th>实际量</th>
              <th>剩余量</th>
            </tr>
            <tr>
              <td>{{ quotaManageData.plan }}</td>
              <td>{{ quotaManageData.real }}</td>
              <td>{{ quotaManageData.surplus }}</td>
            </tr>
          </table>
          <div id="main1" style="width: 100%; height: 224px"></div> </el-col
      ></el-col>
      <el-col :span="8" style="padding: 0 14px"
        ><el-col class="white">
          <el-row
            type="flex"
            class="row-bg"
            justify="space-between"
            style="padding: 18px 10px 0 10px"
          >
            <el-col :span="6"><div class="title-font">节能管理</div></el-col>
            <el-col :span="2"><div class="more">更多</div></el-col>
          </el-row>
          <el-divider></el-divider>
          <table border="1" class="table" style="background-color: #269909">
            <tr>
              <th rowspan="2" style="width: 115px">年节能率(%)</th>
              <th>计划量</th>
              <th>实际量</th>
              <th>达成率</th>
            </tr>
            <tr>
              <td>{{ energyConservationData.plan }}</td>
              <td>{{ energyConservationData.real }}</td>
              <td>{{ energyConservationData.surplus }}</td>
            </tr>
          </table>
          <div id="main2" style="width: 100%; height: 224px"></div></el-col
      ></el-col>
      <el-col :span="8" style="padding: 0 14px">
        <el-col class="white">
          <el-row
            type="flex"
            class="row-bg"
            justify="space-between"
            style="padding: 18px 10px 0 10px"
          >
            <el-col :span="6"><div class="title-font">能效管理</div></el-col>
            <el-col :span="2"><div class="more">更多</div></el-col>
          </el-row>
          <el-divider></el-divider>
          <table border="1" class="table" style="background-color: #f5ea20">
            <tr>
              <th rowspan="2" style="width: 146px">
                年单位产值能耗(吨标煤/万元)
              </th>
              <th>计划量</th>
              <th>实际量</th>
              <th>下降率</th>
            </tr>
            <tr>
              <td>{{ efficiencyManageData.plan }}</td>
              <td>{{ efficiencyManageData.real }}</td>
              <td>{{ efficiencyManageData.surplus }}</td>
            </tr>
          </table>
          <div id="main3" style="width: 100%; height: 224px"></div
        ></el-col>
      </el-col>
      <el-col :span="8" style="padding: 0 14px">
        <el-col class="white" style="height: 260px">
          <el-row
            type="flex"
            class="row-bg"
            justify="space-between"
            style="padding: 18px 10px 0 10px"
          >
            <el-col :span="6"><div class="title-font">双碳管理</div></el-col>
            <el-col :span="2"><div class="more">更多</div></el-col>
          </el-row>
          <el-divider></el-divider>

          <el-row
        type="flex"  justify="space-around"
        style="flex-wrap: wrap;"
         
          >
            <el-col :span="10">
              <el-row
                type="flex"
                class="row-bg"
                justify="space-between"
                :gutter="10"
              >
                <el-col :span="5" class="icon1">
                  <i
                    class="iconfont el-icon-tongjiyuce"
                    style="font-size: 38px"
                  ></i>
                </el-col>
                <el-col :span="19">
                  <el-col :span="24"> 碳达峰峰值预测</el-col>
                  <el-col :span="24"> <i style="color: #000000;font-size: 22px;">{{DualCarbonData.maxCarbon}}</i> 吨 </el-col>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="10" style="text-align: center; background-color: rgba(250, 249, 249, 1);">
              <div class="icon3"></div>
              <el-col :span="24"> 碳中和指标</el-col>
              <el-col :span="24" > <i >{{DualCarbonData.neutralization}}%</i> </el-col>
            </el-col>
            <el-col :span="10">
              <el-row
                type="flex"
                class="row-bg"
                justify="space-between"
                :gutter="10"
              >
                <el-col :span="6" class="icon2">
                  <i class="iconfont el-icon-yuce" style="font-size: 38px"></i>
                </el-col>
                <el-col :span="18">
                  <el-col :span="24"> 碳达峰时间预测</el-col>
                  <el-col :span="24">  <i style="color: #000000;font-size: 22px;">{{DualCarbonData.maxCarbonTime}}</i> 年 </el-col>
                </el-col>
              </el-row>
            </el-col>

            <el-col :span="10" style="text-align: center;background-color: rgba(250, 249, 249, 1);">
              <div class="icon4"></div>
              <el-col :span="24"> 碳排放量</el-col>
              <el-col :span="24" > <i >{{DualCarbonData.emission}}吨 </i> </el-col></el-col
            >
          </el-row>
        </el-col>
      </el-col>

      <el-col :span="8" style="padding: 0 14px">
        <el-col class="white" style="height: 260px">
          <el-row
            type="flex"
            class="row-bg"
            justify="space-between"
            style="padding: 18px 10px 0 10px"
          >
            <el-col :span="6"><div class="title-font">成本管理</div></el-col>
            <el-col :span="2"><div class="more">更多</div></el-col>
          </el-row>
          <el-divider></el-divider>
          <table border="1" class="mine">
            <tr>
              <th rowspan="2" style="width: 105px">年能耗成本 (万元)</th>
              <th>今年实际成本</th>
              <th>去年同期成本</th>
              <th>下降</th>
            </tr>
            <tr>
              <td>{{ getCostControlData.plan }}</td>
              <td>{{ getCostControlData.real }}</td>
              <td>{{ getCostControlData.surplus }}</td>
            </tr>
          </table>
          <div id="main4" style="width: 460px; height: 136px"></div>
        </el-col>
      </el-col>

      <el-col :span="8" style="padding: 0 14px"
        ><el-col class="white" style="height: 260px">
          <el-row
            type="flex"
            class="row-bg"
            justify="space-between"
            style="padding: 18px 10px 0 10px"
          >
            <el-col :span="6"
              ><div class="title-font">分类分项能耗</div></el-col
            >
            <el-col :span="2"><div class="more">更多</div></el-col>
          </el-row>
          <el-divider></el-divider>
          <div id="main5" style="width: 100%; height: 224px"></div> </el-col
      ></el-col>
      <el-col :span="8" style="padding: 0 14px"
        ><el-col class="white" style="height: 260px">
          <el-row
            type="flex"
            class="row-bg"
            justify="space-between"
            style="padding: 18px 10px 0 10px"
          >
            <el-col :span="6"><div class="title-font">节能项目</div></el-col>
            <el-col :span="2"><div class="more">更多</div></el-col>
          </el-row>
          <el-divider></el-divider>

          <el-col :span="8" style="text-align: center; padding-left: 25px">
            <div id="smallPie1" style="width: 90px; height: 90px"></div>
          </el-col>
          <el-col :span="8" style="text-align: center; padding-left: 25px">
            <div id="smallPie2" style="width: 90px; height: 90px"></div>
          </el-col>
          <el-col :span="8" style="text-align: center; padding-left: 25px">
            <div id="smallPie3" style="width: 90px; height: 90px"></div>
          </el-col>
          <el-col :span="24" style="padding: 0">
            <div id="main6" style="width: 460px; height: 120px"></div>
          </el-col> </el-col
      ></el-col>

      <el-col :span="8" style="padding: 0 14px"
        ><el-col class="white" style="height: 260px">
          <el-row
            type="flex"
            class="row-bg"
            justify="space-between"
            style="padding: 18px 10px 0 10px"
          >
            <el-col :span="6"><div class="title-font">能耗预警</div></el-col>
            <el-col :span="2"><div class="more">更多</div></el-col>
          </el-row>
          <el-divider></el-divider>
          <el-cow type="flex" class="row-bg" justify="space-between">
            <el-col :span="12" :push="3"
              ><div class="warning-title">
                <div>总预警树</div>
                <div>30</div>
              </div></el-col
            >
            <el-col :span="12" :push="1"
              ><div class="warning-title">
                <div>未处理数</div>
                <div>3</div>
              </div></el-col
            >
          </el-cow>

          <div class="min">
            <div style="display: inline-block; width: 100%">
              <el-table
                :data="ConsumptionWarningList"
                style="width: 100%"
                class="top"
                border
                :row-style="{ height: '20px' }"
                :cell-style="{ padding: '0' }"
                :header-cell-style="{
                  height: '20px',
                  padding: '0px',
                }"
              >
                <el-table-column
                  prop="dataTime"
                  label="预警时间"
                  align="center"
                />
                <el-table-column
                  prop="uploadDate"
                  label="预警类型"
                  align="center"
                />
                <el-table-column prop="name" label="预警项" align="center" />
                <el-table-column
                  prop="childName"
                  label="预警子项"
                  align="center"
                />
                <el-table-column
                  prop="real"
                  label="实际能耗值"
                  align="center"
                />
              </el-table>

              <vue-seamless-scroll
                :data="ConsumptionWarningList"
                class="seamless-warp"
                style="width: 100%"
                :class-option="classOption"
              >
                <el-table
                  :data="ConsumptionWarningList"
                  style="width: 100%"
                  class="bottom"
                  border
                  :row-style="{ height: '20px' }"
                  :cell-style="{ padding: '0' }"
                >
                  <el-table-column
                    prop="dataTime"
                    label="预警时间"
                    align="center"
                  />
                  <el-table-column
                    prop="uploadDate"
                    label="预警类型"
                    align="center"
                  />
                  <el-table-column prop="name" label="预警项" align="center" />
                  <el-table-column
                    prop="childName"
                    label="预警子项"
                    align="center"
                  />
                  <el-table-column
                    prop="real"
                    label="实际能耗值 "
                    align="center"
                  />
                </el-table>
              </vue-seamless-scroll>
            </div>
          </div> </el-col
      ></el-col>

      <el-col :span="8" style="padding: 0 14px"
        ><el-col class="white" style="height: 260px">
          <el-row
            type="flex"
            class="row-bg"
            justify="space-between"
            style="padding: 18px 10px 0 10px"
          >
            <el-col :span="6"><div class="title-font">分户能耗</div></el-col>
            <el-col :span="2"><div class="more">更多</div></el-col>
          </el-row>
          <el-divider></el-divider>

          <el-table
            class="tableBox"
            :data="officeEnergyList"
            style="width: 100%"
            :row-style="getRowStyle"
            :cell-style="getCellStyle"
            :header-cell-style="{
              background: '#0090FF',
              color: '#fff',
              height: '20px',
              padding: '0px',
              borderRight: ' 1px solid',
            }"
          >
            <el-table-column
              label="序号"
              align="center"
              type="index"
            ></el-table-column>
            <el-table-column prop="officeName" label="部门"> </el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="perArea" width="100px" label="单位面积能耗">
            </el-table-column>
            <el-table-column prop="perPeople" label="人均能耗">
            </el-table-column>
            <el-table-column prop="proportion" label="能耗值">
            </el-table-column> </el-table></el-col
      ></el-col>
    </el-row>
    <div style="margin-top: 30px">
      <chartDialog :title="title" :showDialog="showDialog">
        <template v-slot:one>
          <div id="left-chart" style="width: 480px; height: 290px"></div>
          <div style="text-align: center">
            <div class="dialog-chart-title">
              历年定额用量趋势分析<i>单位：吨标煤</i>
            </div>
          </div>
        </template>
        <template v-slot:two>
          <div id="right-chart" style="width: 480px; height: 290px"></div>
          <div style="text-align: center">
            <div class="dialog-chart-title">
              历年定额实际用量均值趋势分析<i>单位：标煤</i>
            </div>
          </div>
        </template>
      </chartDialog>
    </div>
  </div>
</template>

<script>
import chartDialog from "@/components/common/chartDialog";
export default {
  data() {
    return {
      showDialog: false,
      title: "",
      quotaManageData: {},
      energyConservationData: {},
      efficiencyManageData: {},
      getCostControlData: {},
      officeEnergyList: [],
      DualCarbonData:{},
      ConsumptionWarningList: [],
      myChart3: "",
    };
  },
  components: {
    chartDialog,
  },
  created() {},
  computed: {
    classOption() {
      return {
        step: 0.1, // 数值越大速度滚动越快
        limitMoveNum: 1, // 开始无缝滚动的数据量 this.list
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 5000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  mounted() {
    this.initData();
  },
  watch: {
    showDialog(val) {
      if (val) {
       
        this.initData();
       
      }
    },
  },
  methods: {
    initData() {
      this.getQuotaManage();
      this.getEnergyConservation();
      this.efficiencyManage();
       this.getDualCarbon() 
      this.getCostControl();
      this.getClassifiedEnergy();
      this.getEnergySaving();
      this.getConsumptionWarning();
      this.getOfficeEnergy();
    },
    //定额管理
    getQuotaManage() {
      var option = {
        title: {
          text: "",
          subtext: "",
        },
        grid: {
          show: true,
          left: "15%",
          /*  top: "5%",
          right: "10%",
          bottom: "30%", */
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          orient: "horizontal",
          y: "85%",
          x: "center",
          data: [],
        },
        toolbox: {
          /*   show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          }, */
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            // prettier-ignore
            data: ['1月','2月','3月','4月','5月','6月'],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [],
      };

      var option3 = {
        /* title: {
          text: "Stacked Line",
        }, */
        tooltip: {
          trigger: "axis",
        },
        legend: {
          orient: "horizontal",
          bottom: "15px",
          x: "center",
          data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "15%",
          containLabel: true,
        },
        toolbox: {
          /* feature: {
      saveAsImage: {}
    } */
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "Direct",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "Search Engine",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      };

      this.$axios.get("/api/vkie/overview/quotaManage").then((response) => {
        this.quotaManageData = response.data.data;
        let { legend, series, xAxisData } = response.data.data.echarts;
        option.legend.data = legend;
        option.series = series;
        option.xAxis[0].data = xAxisData;
        var myChart1 = this.$echarts.init(document.getElementById("main1"));
        if (this.showDialog) {
          var myChart2 = this.$echarts.init(document.getElementById("left-chart"));

          var myChart3 = this.$echarts.init(document.getElementById("right-chart"));

          myChart3.setOption(option3);

          myChart2.setOption(option);
        }

        myChart1.setOption(option);
      });
    },
    //节能管理
    getEnergyConservation() {
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },

        toolbox: {},
        legend: {
          orient: "horizontal",
          y: "85%",
          x: "center",
          data: [],
        },
        xAxis: [
          {
            type: "category",
            data: ["1月", "2月", "3月", "4月", "5月", "6月"],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [],
        series: [],
      };
      this.$axios
        .get("/api/vkie/overview/energyConservation")
        .then((response) => {
          this.energyConservationData = response.data.data;
          let { legend, yAxis, series, xAxisData } = response.data.data.echarts;
          option.legend.data = legend;
          option.yAxis = yAxis;
          option.series = series;

          /*  option.xAxis[0].data = xAxisData; */
          var myChart = this.$echarts.init(document.getElementById("main2"));
          myChart.setOption(option);
        });
    },
    //能效管理
    efficiencyManage() {
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        toolbox: {},
        legend: {
          orient: "horizontal",
          y: "85%",
          x: "center",
          data: [],
        },
        xAxis: [
          {
            type: "category",
            data: ["1月", "2月", "3月", "4月", "5月", "6月"],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [],
        series: [],
      };
      this.$axios
        .get("/api/vkie/overview/efficiencyManage")
        .then((response) => {
          this.efficiencyManageData = response.data.data;
          let { legend, yAxis, series, xAxisData } = response.data.data.echarts;
          option.legend.data = legend;
          option.yAxis = yAxis;
          option.series = series;

          /*  option.xAxis[0].data = xAxisData; */
          var myChart = this.$echarts.init(document.getElementById("main3"));
          myChart.setOption(option);
        });
    },

    //双碳管理
    getDualCarbon(){
        this.$axios
        .get("/api/vkie/overview/dualCarbon")
        .then((response) => {
          this.DualCarbonData = response.data.data
      
        });
    },

    getCostControl() {
      var option = {
        title: {
          text: "",
          subtext: "",
        },
        grid: {
          left: "15%",
          top: "5%",
          right: "10%",
          bottom: "35%",
        },

        tooltip: {
          trigger: "axis",
        },
        legend: {
          orient: "horizontal",
          y: "85%",
          x: "center",
          data: [],
        },
        toolbox: {},
        calculable: true,
        xAxis: [
          {
            type: "category",
            // prettier-ignore
            data: ['1月','2月','3月','4月','5月','6月'],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [],
      };

      this.$axios.get("/api/vkie/overview/costControl").then((response) => {
        this.getCostControlData = response.data.data;
        let { legend, series, xAxisData } = response.data.data.echarts;
        option.legend.data = legend;
        option.series = series;
        /*     option.xAxis[0].data = xAxisData; */

        var myChart = this.$echarts.init(document.getElementById("main4"));
        myChart.setOption(option);
      });
    },
    getClassifiedEnergy() {
      var option = {
        tooltip: {
          trigger: "item",
        },
        /*    legend: {
          top: "5%",
          left: "center",
          data: [],
        }, */
        legend: {
          orient: "vertical",
          left: "right",
        },
        series: [
          {
            /*  name: "Access From", */
            type: "pie",
            radius: ["30%", "80%"],
            center: ["50%", "40%"],
            avoidLabelOverlap: false,
            label: {
              /*   show: false, */

              normal: {
                show: true,
                position: "inner",
                formatter: "{b}:{c}" + "\n\r" + "({d}%)",
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: true,
              position: "right",
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            itemStyle: {
              normal: {
                borderWidth: 1, // 间距的宽度
                borderColor: "#fff", //背景色
              },
            },
            data: [],
          },
        ],
      };
      this.$axios
        .get("/api/vkie/overview/classifiedEnergy")
        .then((response) => {
          let { legend, series, xAxisData, type } = response.data.data.echarts;
          /*   option.legend.data = legend; */
          option.series[0].data = series;
          /*     option.xAxis[0].data = xAxisData; */

          var myChart = this.$echarts.init(document.getElementById("main5"));
          myChart.setOption(option);
        });
    },
    getEnergySaving() {
      var option1 = {
        title: {
          show: true,
          top: 20,
          // 标题文本1
          text: "总项目数",
          // 标题文本2
          subtext: "77", //这里就是默认显示的数据
          // 具体放置位置
          left: "center",
          top: "center",
          z: 0,
          zlevel: 100,
          // 文本对应的样式
          textStyle: {
            textAlign: "center",
            color: "black",
            fontSize: 12,
          },
          subtextStyle: {
            textAlign: "center",
            color: "black",
            fontSize: 12,
          },
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          show: false,
        },
        /*   grid:{
      	 top:"0px",
         left:"0px",
         right:"0px",
         bottom:"0px"
	  }, */
        series: [
          /*   {showLegendSymbol: false,}, */
          {
            name: " ",
            type: "pie",
            radius: ["70%", "100%"],
            avoidLabelOverlap: false,

            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "40",
                fontWeight: "bold",
                showLegendSymbol: false,
              },
            },
            labelLine: {
              show: false,
            },

            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
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
          /*  feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          }, */
        },
        grid: {
          show: true,
          left: "10%",
          top: "0",
          right: "25%",
          /*   bottom: "5%", */
        },
        legend: {
          x: "right",
          y: "top",
          orient: "vertical",
          data: [],
          itemHeight: 7,
          /*   textStyle: {
            // 图例的公用文本样式。
            color: "#333333",
            fontSize: 12,
          }, */
        },
        icon: "rect", // 图例项的 icon。
        xAxis: [
          {
            type: "category",
            data: ["1月", "2月", "3月", "4月", "5月", "6月"],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "Precipitation",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ml",
            },
          },
          {
            type: "value",
            name: "Temperature",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value} °C",
            },
          },
        ],
        series: [],
      };

      var myChart1 = this.$echarts.init(document.getElementById("smallPie1"));
      var myChart2 = this.$echarts.init(document.getElementById("smallPie2"));
      var myChart3 = this.$echarts.init(document.getElementById("smallPie3"));
      var myChart4 = this.$echarts.init(document.getElementById("main6"));

      this.$axios.get("/api/vkie/overview/energySaving").then((response) => {
        let { legend, series, xAxisData, type } = response.data.data.echarts;
        option2.legend.data = legend;
        option2.series = series;
        option2.xAxisData = xAxisData;

        var myChart = this.$echarts.init(document.getElementById("main6"));
        myChart.setOption(option2);
      });

      myChart1.setOption(option1);
      myChart2.setOption(option1);
      myChart3.setOption(option1);
      //  myChart4.setOption(option2);
    },
    getConsumptionWarning() {
      this.$axios
        .get("/api/vkie/overview/consumptionWarning")
        .then((response) => {
           console.log(response.data.data)
         // this.DualCarbonData = response.data.data.list;
        });
    },
    getOfficeEnergy() {
      this.$axios.get("/api/vkie/overview/officeEnergy").then((response) => {
        console.log(response.data.data.list);
        this.officeEnergyList = response.data.data.list;
      });
    } /* 'rgb(2, 145, 255)' */,
    getRowStyle({ row, rowIndex, column, columnIndex }) {
      if (rowIndex < 3) {
        return { backgroundColor: "#BEECF5", height: "20px" };
      } else {
        return {};
      }
    },
    getCellStyle({ row, column, rowIndex, columnIndex }) {
      if (column.label == "序号" && columnIndex < 3) {
        return { padding: "", color: "rgb(2, 145, 255)" };
      }
    },
    clickDialogVisible(title) {
     
      this.showDialog = true;
     
      this.title = title;
      
        this.$forceUpdate()
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-table .warning-row {
  color: #ec5656;
}

::v-deep .cell {
  line-height: 30px !important;
  overflow: auto !important;
}

::v-deep .tableBox td {
  border-bottom: none;
}

::v-deep .tableBox::before {
  height: 0px;
}

::v-deep .seamless-warp {
  height: 210px;
  overflow: hidden;
}
.min {
  display: flex;
  width: 100%;
  height: 110px;
  overflow: hidden;
}
::v-deep .top .el-table__body-wrapper {
  display: none;
}
::v-deep .bottom .el-table__header-wrapper {
  display: none;
  width: 100%;
}
/* .scroll-wrap {
  position: relative;
  z-index: 2;
  float: left;
  margin-left: 5%;
  overflow: hidden;
}
.scroll-content {
  position: relative;
  transition: top 0.5s;
}
.scroll-content p {

  line-height: 30px;
  font-size: 20px;
   color: yellow;
  text-align: center;
}
 */
.title-font {
  font-size: 16px;
  font-weight: bold;
}
.more {
  font-family: "Microsoft YaHei";
  font-weight: 400;
  font-style: normal;
  color: rgba(24, 144, 255, 0.847058823529412);
  line-height: 22px;
  cursor: pointer;
}
.table {
  height: 60px;
  width: 100%;
  text-align: center;
  color: #fff;
  background-color: #0979f1;
}
.mine {
  height: 38px;
  width: 100%;
  text-align: center;
  color: #fff;
  background-color: #0979f1;
}
.icon1 {
  width: 70px;
  height: 70px;
  text-align: center;
  line-height: 58px;
  background-color: rgba(83, 195, 28, 1);
  padding-top: 12px;
}
.icon2 {
  width: 70px;
  height: 70px;
  text-align: center;
  line-height: 58px;
  background-color: rgba(246, 60, 62, 1);
  padding-top: 12px;
}
.icon3 {
  width: 0px;
  height: 0px;
  border-top: 16px solid rgba(246, 60, 62, 1);
  border-right: 10px solid rgba(246, 60, 62, 1);
  border-bottom: 6px solid #fff;
  border-left: 10px solid rgba(246, 60, 62, 1);
  margin-left: 10px;
}
.icon4 {
  width: 0px;
  height: 0px;
  border-top: 16px solid rgba(83, 195, 28, 1);
  border-right: 10px solid rgba(83, 195, 28, 1);
  border-bottom: 6px solid #fff;
  border-left: 10px solid rgba(83, 195, 28, 1);
  margin-left: 10px;
}
.white {
  background-color: #fff;
}
.warning-title {
  width: 146px;
  height: 55px;
  text-align: center;
  background-color: rgba(250, 249, 249, 1);
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 22px;
  color: #f63c3e;
}
.dialog-chart-title {
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  color: #333333;
  font-size: 18px;
  position: relative;
  > i {
    font-size: 10px;
    position: absolute;
    top: 6px;
    right: 18px;
  }
}
</style>