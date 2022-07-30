<template>
  <div class="classifySubentryOverview">
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
          {{ overviewText.energy }}(吨标煤)
        </div>
        <div v-if="overviewText.energyChange">
          <span>与同期相比</span
          ><span>
            {{
              overviewText.energyChange > 0
                ? `+  ${overviewText.energyChange}`
                : `${overviewText.energyChange}`
            }}%</span
          >
        </div>
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
          {{ overviewText.price }}(万元)
        </div>
        <div v-if="overviewText.priceChange">
          <span>与同期相比</span
          ><span
            >{{
              overviewText.priceChange > 0
                ? `+  ${overviewText.priceChange}`
                : `${overviewText.priceChange}`
            }}%</span
          >
        </div>
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
    </div>
    <div class="charts">
      <el-row class="charts-title" type="flex" justify="space-between">
        <el-col :style="{ color: this.$store.state.common.colorName }"
          >本年度作息用能占比情况(吨标煤)</el-col
        >
        <el-col :style="{ color: this.$store.state.common.colorName }">
          本年度分类能耗占比趋势(吨标煤)</el-col
        >
      </el-row>
      <el-row class="charts-title" type="flex" justify="space-between"
        ><el-col>
          <div id="main1" style="width: 481px; height: 446px"></div>
        </el-col>
        <el-col style="border: 1px solid rgba(233, 233, 233, 1)">
          <el-menu
            style="padding-bottom: 10px"
            default-active="1"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">总</el-menu-item>

            <el-menu-item index="2">人均</el-menu-item>
            <el-menu-item index="3">面积</el-menu-item>
          </el-menu>
          <el-col
            style="text-align: left; width: 95%;margin-left: 15px;;    height: 48px; border-bottom: 1px solid rgba(233, 233, 233, 1);"
            v-for="(item, index) in yearProportionList"
            :key="index"
          >
            <el-col :span="18">
              <span style="font-size: 14px; color: #333333"
                >0{{ index + 1 }}.{{ item.name }}</span
              >
              <el-progress
                :text-inside="true"
                style="padding-left: 12px; font-size: 14px"
                :percentage="item.proportion"
              ></el-progress
            ></el-col>

            <el-col :span="6" style="font-size: 14px; padding: 22px 0 0 5px">
              {{ item.value }} ({{ item.proportion }}%)
            </el-col>
          <!--   <el-col :span='24' > <el-divider></el-divider></el-col> -->
            <!--  -->
            </el-col
          >
        
        </el-col>
        
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { isActive: 1, overviewText: {}, yearProportionList: [], type: 1 };
  },
  mounted() {
    this.initData();
  },
  methods: {
    tabsChange(e) {
      this.isActive = e;
      this.type= e
       this.initData()
    },
    initData() {
      this.getOverviewMsg();
      this.getWorkRestProportion();
      this.getYearOfficeEnergyProportion();
    },
    getOverviewMsg() {
      this.$axios
        .get("/api/vkie/officeManage/overviewMsg", {})
        .then((response) => {
          this.overviewText = response.data.data;
          console.log(response.data.data);
        });
    },
    getWorkRestProportion() {
      var option = {
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
        .get("/api/vkie/officeManage/yearWorkRestProportion", {
          params: {
            type: this.type,
          },
        })
        .then((response) => {
          let { legend, series, xAxisData, type } = response.data.data.echarts;
          /*   option.legend.data = legend; */
          option.series[0].data = series;
          /*     option.xAxis[0].data = xAxisData; */

          var myChart = this.$echarts.init(document.getElementById("main1"));
          myChart.setOption(option);
        });
    },
    getYearOfficeEnergyProportion(method = 1) {
      this.$axios
        .get("/api/vkie/officeManage/yearOfficeEnergyProportion", {
          params: {
            method: method,
            type: this.type,
          },
        })
        .then((response) => {
          this.yearProportionList = response.data.data.list.filter((item,index)=>{
            return index<10
          })
          console.log(response.data.data);
        });
    },
    handleSelect(method) {
      this.getYearOfficeEnergyProportion(method);
    },
  },
};
</script>

<style lang="scss" scoped>
.classifySubentryOverview {
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
::v-deep .el-progress__text {
  font-size: 14px !important;
}
</style>