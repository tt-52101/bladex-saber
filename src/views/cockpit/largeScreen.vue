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
            <el-col :span="2"><div class="more">更多</div></el-col>
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
            type="flex"
            class="row-bg"
            justify="start"
            style="padding: 0 32px; flex-wrap: wrap"
          >
            <el-col :span="12">
              <el-row
                type="flex"
                class="row-bg"
                justify="space-between"
                :gutter="20"
              >
                <el-col :span="8" class="icon1">
                  <i
                    class="iconfont el-icon-tongjiyuce"
                    style="font-size: 38px"
                  ></i>
                </el-col>
                <el-col :span="16">
                  <el-col :span="24"> 碳达峰峰值预测</el-col>
                  <el-col :span="24">20吨 </el-col>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="12">
              <div class="icon3"></div>
              <el-col :span="24"> 碳中和指标</el-col>
              <el-col :span="24"> 90%</el-col>
            </el-col>
            <el-col :span="12">
              <el-row
                type="flex"
                class="row-bg"
                justify="space-between"
                :gutter="20"
              >
                <el-col :span="8" class="icon2">
                  <i class="iconfont el-icon-yuce" style="font-size: 38px"></i>
                </el-col>
                <el-col :span="16">
                  <el-col :span="24"> 碳达峰峰值预测</el-col>
                  <el-col :span="24">20吨 </el-col>
                </el-col>
              </el-row>
            </el-col>

            <el-col :span="12">
              <div class="icon4"></div>
              <el-col :span="24"> 碳排放量</el-col>
              <el-col :span="24">20吨 </el-col></el-col
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

          <el-col :span="8" style="text-align: center">
            <div id="smallPie1" style="width: 90px; height: 90px"></div>
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
                :data="list"
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
                  prop="fileName"
                  label="预警时间"
                  align="center"
                />
                <el-table-column
                  prop="uploadDate"
                  label="预警类型"
                  align="center"
                />
                <el-table-column
                  prop="fileSize"
                  label="预警项"
                  align="center"
                />
                <el-table-column
                  prop="uploadMan"
                  label="预警子项"
                  align="center"
                />
                <el-table-column
                  prop="visitNum"
                  label="实际能耗值"
                  align="center"
                />
              </el-table>

              <vue-seamless-scroll
                :data="list"
                class="seamless-warp"
                style="width: 100%"
                :class-option="classOption"
              >
                <el-table
                  :data="list"
                  style="width: 100%"
                  class="bottom"
                  border
                  :row-style="{ height: '20px' }"
                  :cell-style="{ padding: '0' }"
                >
                  <el-table-column
                    prop="fileName"
                    label="油库名称"
                    align="center"
                  />
                  <el-table-column
                    prop="uploadDate"
                    label="油库编号"
                    align="center"
                  />
                  <el-table-column
                    prop="fileSize"
                    label="总库存(m3)"
                    align="center"
                  />
                  <el-table-column
                    prop="uploadMan"
                    label="安全高度(mm)"
                    align="center"
                  />
                  <el-table-column
                    prop="visitNum"
                    label="安全容量(m3)"
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
            :data="tableData"
            style="width: 100%"
            :row-style="{ height: '20px' }"
            :cell-style="{ padding: '0' }"
            :header-cell-style="{
              background: '#0090FF',
              color: '#fff',
              height: '20px',
              padding: '0px',
            }"
          >
            <el-table-column
              label="序号"
              align="center"
              type="index"
              width="50"
            ></el-table-column>
            <el-table-column prop="date" label="日期"> </el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column> </el-table></el-col
      ></el-col>
    </el-row>
    <div style="margin-top: 30px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotaManageData: {},
      energyConservationData: {},
      efficiencyManageData: {},
      getCostControlData: {},
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀",
        },
      ],
      list: [
        {
          fileName: "123",
          uploadDate: "2021-11-18",
          fileSize: "8",
          uploadMan: "165",
          visitNum: "112",
        },
        {
          fileName: "123",
          uploadDate: "2021-11-18",
          fileSize: "8",
          uploadMan: "165",
          visitNum: "112",
        },
        {
          fileName: "123",
          uploadDate: "2021-11-18",
          fileSize: "8",
          uploadMan: "165",
          visitNum: "112",
        },
        {
          fileName: "123",
          uploadDate: "2021-11-18",
          fileSize: "8",
          uploadMan: "165",
          visitNum: "112",
        },
        {
          fileName: "123",
          uploadDate: "2021-11-18",
          fileSize: "8",
          uploadMan: "165",
          visitNum: "112",
        },
        {
          fileName: "123",
          uploadDate: "2021-11-18",
          fileSize: "8",
          uploadMan: "165",
          visitNum: "112",
        },
      ],
    };
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
  methods: {
    initData() {
      this.getQuotaManage();
      this.getEnergyConservation();
      this.efficiencyManage();
      this.getCostControl();
      this.getClassifiedEnergy();
        this.getEnergySaving()
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

      this.$axios.get("/api/vkie/overview/quotaManage").then((response) => {
        this.quotaManageData = response.data.data;
        let { legend, series, xAxisData } = response.data.data.echarts;
        option.legend.data = legend;
        option.series = series;
        option.xAxis[0].data = xAxisData;

        var myChart = this.$echarts.init(document.getElementById("main1"));
        myChart.setOption(option);
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
        tooltip: {
          trigger: "item",
        },
        legend: {
        /*   top: "5%",
          left: "center", */
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: fal,
                fontSize: "40",
                fontWeight: "bold",
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


          var myChart = this.$echarts.init(document.getElementById("smallPie1"));

        myChart.setOption(option1);
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>