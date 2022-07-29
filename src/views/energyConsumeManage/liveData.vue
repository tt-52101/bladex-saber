<template>
  <div>
    <el-row
      type="flex"
      justify="space-between"
      style="border-bottom: 1px solid rgba(233, 233, 233, 1)"
    >
      <el-col :span="18">
        <el-row :gutter="24">
          <el-col :offset="2" :span="6"
            ><el-input v-model="meterName" placeholder="表计名称"></el-input
          ></el-col>
          <el-col :span="6">
            <el-select
              v-model="meterType"
              placeholder="电表"
              @change="handleChange1"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-select
              v-model="communicateStatus"
              placeholder="在线"
              @change="handleChange2"
            >
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="6" :offset="12">
        <el-button>查看</el-button>
        <el-button>导出</el-button>
      </el-col>
    </el-row>
    <el-table :data="realTimeData" border style="width: 100%; margin: 10px 0">
      <el-table-column type="index" label="序号"> </el-table-column>
      <el-table-column
        prop="name"
        label="
表计名称"
      >
      </el-table-column>
      <el-table-column prop="dataTime" label="数据时间"> </el-table-column>
      <el-table-column prop="communicateStatus" label="通信状态">
      </el-table-column>

      <el-table-column
        prop="currentRatio"
        label="
电流变比"
      >
      </el-table-column>
      <el-table-column prop="voltageRatio" label="电压变比"> </el-table-column>
      <el-table-column
        prop="activeEnergy"
        label="
有功电能示数（kWh）"
      >
      </el-table-column>
      <el-table-column
        prop="energyJ"
        label="
尖电示数（kWh）"
      >
      </el-table-column>
      <el-table-column
        prop="energyF"
        label="
峰电示数（kWh）

"
      >
      </el-table-column>
      <el-table-column
        prop="energyP"
        label="

平电示数（kWh）"
      >
      </el-table-column>
      <el-table-column
        prop="energyG"
        label="
谷电示数（kWh）"
      >
      </el-table-column>
      <el-table-column
        prop=""
        label="
电流(A)"
      >
        <el-table-column
          prop="currentA"
          label="
A"
        >
        </el-table-column>
        <el-table-column
          prop="currentB"
          label="
B"
        >
        </el-table-column>
        <el-table-column
          prop="currentC"
          label="
C"
        >
        </el-table-column>
      </el-table-column>

      <el-table-column
        prop="address"
        label="
电压(V)"
      >
        <el-table-column
          prop="voltageA"
          label="
A"
        >
        </el-table-column>
        <el-table-column
          prop="voltageB"
          label="
B"
        >
        </el-table-column>
        <el-table-column
          prop="voltageC"
          label="
C"
        >
        </el-table-column>
      </el-table-column>

      <el-table-column
        prop=""
        label="
功率(KW)"
      >
        <el-table-column
          prop="activePower"
          label="
总"
        >
        </el-table-column>
        <el-table-column
          prop="activePowerA"
          label="
A"
        >
        </el-table-column>
        <el-table-column
          prop="activePowerB"
          label="
B"
        >
        </el-table-column>
        <el-table-column
          prop="activePowerC"
          label="
C"
        >
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="address"
        label="
功率因数(%)"
      >
        <el-table-column
          prop="powerFactor"
          label="
总"
        >
        </el-table-column>
        <el-table-column
          prop="powerFactorA"
          label="
A"
        >
        </el-table-column>
        <el-table-column
          prop="powerFactorB"
          label="
B"
        >
        </el-table-column>
        <el-table-column
          prop="powerFactorC"
          label="
C"
        >
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="current0"
        label="
零序电流"
      >
      </el-table-column>
    </el-table>
    <el-col style="text-align: right">
      <el-pagination
        style="margin-right: -10px"
        layout="prev, pager, next"
        :total="50"
      >
      </el-pagination
    ></el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meterName: "",
      communicateStatus: "",
      meterType: "",
      realTimeData: [],
      options: [
        {
          value: "1",
          label: "电表",
        },
        {
          value: "2",
          label: "水表",
        },
        {
          value: "3",
          label: "天然气表",
        },
        {
          value: "4",
          label: "蒸汽表",
        },
      ],
      options1: [
       /*  {
          value: "4",
          label: "全部",
        }, */
        {
          value: "1",
          label: "在线",
        },
        {
          value: "2",
          label: "离线",
        },

        {
          value: "3",
          label: "停用",
        },
      ],
      value: "",
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.getRealTimeData();
    },
    getRealTimeData() {
      this.$axios
        .get("/api/vkie/consumption/realTimeData", {
          params: {
            meterType: this.meterType,
            communicateStatus:this.communicateStatus,
            meterName:this.meterName
          },
        })
        .then((response) => {
          this.realTimeData = response.data.data.list;
          console.log(response.data.data);
        });
    },
    handleChange1(e) {
      this.meterType = e;
      this.getRealTimeData();
      console.log("eee", e);
    },
    handleChange2(e) {
      this.communicateStatus = e;
      this.getRealTimeData();
      console.log("eee", e);
    },
  },
};
</script>

<style lang='scss' scoped>
</style>