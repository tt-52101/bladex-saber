<template>
  <div class="overview">
    <el-row style="padding: 10px">
      <el-col :span="6" style="padding: 0px" class="item"
        ><div class="title">能耗趋势</div>
        <el-button-group style="margin-left: 20px">
          <el-button
            @click="
              () => {
                getEnergyTrend('4');
              }
            "
            >总</el-button
          >
          <el-button
            @click="
              () => {
                getEnergyTrend('3');
              }
            "
            >年</el-button
          >
          <el-button
            @click="
              () => {
                getEnergyTrend('2');
              }
            "
            >月</el-button
          >
        </el-button-group>

        <div
          id="main1"
          style="width: 400px; height: 260px; margin: 0 auto"
        ></div
      ></el-col>
      <el-col :span="10" style="margin: 0 10px; height: 272px" class="item"
        ><div class="title">本年度能耗概览</div>
        <el-row style="padding: 5px 20px">
          <el-col :span="11" class="item1">
            <div>
              <div>总能耗(吨标煤)</div>
              <div class="fontWeight">{{ yearEnergyData.totalEnergy }}</div>
            </div>
            <div>
              <div><i class="el-icon-top"></i> 与去年同期相比(%)</div>
              <div class="fontWeight">251.1</div>
            </div>
          </el-col>
          <el-col
            :span="13"
            class="item1"
            style="width: 290px; margin-left: 15px"
          >
            <div>
              <div>人均能耗(吨标煤)</div>
              <div class="fontWeight">{{ yearEnergyData.perPeople }}</div>
            </div>
            <div>
              <div style="padding-bottom: 10px">
                标准值({{ yearEnergyData.perPeopleStandard }})
              </div>
              <div><i>低于</i>标准值(0.2)</div>
            </div>
          </el-col>
          <el-col :span="11" class="item1">
            <div>
              <div>碳排放(吨)</div>
              <div class="fontWeight">{{ yearEnergyData.totalCoal }}</div>
            </div>
            <div>
              <div><i class="el-icon-top"></i> 与去年同期相比(%)</div>
              <div class="fontWeight">251.1</div>
            </div>
          </el-col>
          <el-col
            :span="13"
            class="item1"
            style="width: 290px; margin-left: 15px"
          >
            <div>
              <div>单位面积能耗(吨标煤/㎡)</div>
              <div class="fontWeight">31</div>
            </div>
            <div>
              <div style="padding-bottom: 10px">
                标准值({{ yearEnergyData.perAreaStandard }})
              </div>
              <div><i>低于</i>标准值(0.2)</div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6" class="item"
        ><div class="title">用能成本趋势</div>
        <el-button-group style="margin-left: 20px">
          <el-button
            @click="
              () => {
                getEnergyPriceTrend(4);
              }
            "
            >总</el-button
          >
          <el-button
            @click="
              () => {
                getEnergyPriceTrend(3);
              }
            "
            >年</el-button
          >
          <el-button
            @click="
              () => {
                getEnergyPriceTrend(2);
              }
            "
            >月</el-button
          >
        </el-button-group>
        <div
          id="main2"
          style="width: 400px; height: 260px; margin: 0 auto"
        ></div>
      </el-col>
      <el-col :span="6" class="item" style="margin-top: 18px"
        ><div class="title">分类分项能耗占比</div>
        <el-button-group style="margin-left: 20px">
          <el-button
            @click="
              () => {
                getItemProportion('4');
              }
            "
            >总</el-button
          >
          <el-button
            @click="
              () => {
                getItemProportion('3');
              }
            "
            >年</el-button
          >
          <el-button
            @click="
              () => {
                getItemProportion('2');
              }
            "
            >月</el-button
          >
        </el-button-group>
        <div
          id="main3"
          style="width: 360px; height: 260px; margin: 0 auto"
        ></div>
      </el-col>
      <el-col
        :span="10"
        class="item"
        style="margin: 0 10px; height: 487px; margin-top: -90px"
        ><div class="title">本年度区域能耗情况</div>
        <div>
          <el-image :src="src"></el-image>
        </div>
      </el-col>

      <el-col :span="6" class="item" style="margin-top: 18px">
        <div class="title">分户能耗</div>
        <el-button-group style="margin-left: 20px">
           <el-button @click="()=>{
           getOfficeEnergy(4)  }">总</el-button>
          <el-button @click="()=>{
           getOfficeEnergy(3)  }">年</el-button>
          <el-button @click="()=>{
           getOfficeEnergy(2)  }">月</el-button>
         
        </el-button-group>
        <el-table :data="officeEnergyTableData" border style="width: 95%;    margin: 10px auto;">
          <el-table-column prop="officeName" label="部门科室">
          </el-table-column>
          <el-table-column prop="total" label="总能耗（吨标煤）">
          </el-table-column>
          <el-table-column prop="proportion" label="占比(%)"> </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import img from "@/img/u2556.png";
export default {
  data() {
    return {
      src: img,
      yearEnergyData: {},
      officeEnergyTableData: [],
    };
  },
  mounted() {
    this.initData();
  },

  methods: {
    initData() {
      this.getEnergyTrend();
      // this.getEnergyPriceTrend();
      this.getYearEnergy();
      this.getItemProportion();
      this.getOfficeEnergy()
    },
    getEnergyTrend(type = 3) {
      var option = {
        grid: {
          left: "10%",
          top: "10%",
          right: "10%",
          bottom: "10%",
        },
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: {
          type: "value",
        },
        series: [],
      };
      this.$axios
        .get("/api/vkie/consumption/energyTrend", {
          params: { dateType: type },
        })
        .then((response) => {
          option.series = response.data.data.echarts.series;
          option.xAxis.data = response.data.data.echarts.xAxisData;

          var myChart = this.$echarts.init(document.getElementById("main1"));
          myChart.setOption(option);
        });
    },

    getYearEnergy() {
      this.$axios
        .get("/api/vkie/consumption/yearEnergy", {})
        .then((response) => {
          this.yearEnergyData = response.data.data.yearEnergyVo;
          console.log(response.data.data.yearEnergyVo);
        });
    },
    getEnergyPriceTrend(type = 3) {
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
        .get("/api/vkie/consumption/energyPriceTrend", {
          params: { dateType: type },
        })
        .then((response) => {
          let { legend, yAxis, series, xAxisData } = response.data.data.echarts;

          console.log("yAxis", yAxis);
          option.yAxis = yAxis;
          option.series = series;

          var myChart = this.$echarts.init(document.getElementById("main2"));
          myChart.setOption(option);
        });
    },
    getItemProportion(type = 3) {
      var option = {
        title: {
          /*   text: "Referer of a Website",
          subtext: "Fake Data",
          left: "center", */
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          y: "bottom",
          x: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [],
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

      this.$axios
        .get("/api/vkie/consumption/itemProportion", {
          params: { dateType: type },
        })
        .then((response) => {
          option.series[0].data = response.data.data.echarts.series;
          //  option.xAxis.legend.data = response.data.data.echarts.legend;
          console.log(response.data.data);

          var myChart = this.$echarts.init(document.getElementById("main3"));
          myChart.setOption(option);
        });
    },
    getOfficeEnergy(type = 3) {
      this.$axios
        .get("/api/vkie/consumption/officeEnergy", {
          params: { dateType: type },
        })
        .then((response) => {
       
            this.officeEnergyTableData = response.data.data.list;
        });
    },
  },
};
</script>  

<style lang="scss" scoped>
.overview {
  .item {
    height: 373px;
    box-sizing: border-box;
    box-shadow: none;
    font-family: 微软雅黑;
    font-weight: 400;
    font-style: normal;
    text-align: left;

    border-width: 1px;
    border-style: solid;
    border-color: rgb(233, 233, 233);
    border-radius: 5px;
    .title {
      background-color: rgb(242, 242, 242);

      font-size: 16px;
      color: rgb(102, 102, 102);
      text-align: left;
      line-height: 40px;
      height: 40px;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(233, 233, 233);
      border-radius: 5px 5px 0px 0px;
      text-indent: 20px;
    }
  }
  .item1 {
    // width: 281px;
    color: #999999;
    text-align: center;
    font-size: 14px;
    height: 91px;
    text-align: center;
    border: 1px solid #999999;
    border-bottom: 5px solid rgba(153, 153, 255, 1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* padding: 10px; */
  }
  .fontWeight {
    font-size: 24px;
  }
}
</style>