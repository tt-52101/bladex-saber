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
<<<<<<< HEAD
            ><el-input v-model="meterName" placeholder="表计名称"></el-input
          ></el-col>
          <el-col :span="6">
            <el-select
              v-model="meterType"
              placeholder="电表"
              @change="handleChange1"
            >
=======
            ><el-input v-model="input" placeholder="请输入内容"></el-input
          ></el-col>
          <el-col :span="6">
            <el-select v-model="value" placeholder="电表">
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
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
<<<<<<< HEAD
            <el-select
              v-model="communicateStatus"
              placeholder="在线"
              @change="handleChange2"
            >
=======
            <el-select v-model="value" placeholder="全部">
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
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
<<<<<<< HEAD
        <el-button>导出</el-button>
      </el-col>
    </el-row>
    <el-table :data="realTimeData" border style="width: 100%; margin: 10px 0">
      <el-table-column type="index" label="序号"> </el-table-column>
      <el-table-column
        prop="name"
=======
        <el-button>导入</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%;margin:10px 0;">
      <el-table-column type="index" label="序号"> </el-table-column>
      <el-table-column
        prop="date"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
        label="
表计名称"
      >
      </el-table-column>
<<<<<<< HEAD
      <el-table-column prop="dataTime" label="数据时间"> </el-table-column>
      <el-table-column prop="communicateStatus" label="通信状态">
      </el-table-column>

      <el-table-column
        prop="currentRatio"
=======
      <el-table-column prop="name" label="数据时间"> </el-table-column>
      <el-table-column prop="address" label="通信状态"> </el-table-column>

      <el-table-column
        prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
        label="
电流变比"
      >
      </el-table-column>
<<<<<<< HEAD
      <el-table-column prop="voltageRatio" label="电压变比"> </el-table-column>
      <el-table-column
        prop="activeEnergy"
=======
      <el-table-column prop="address" label="电压变比"> </el-table-column>
      <el-table-column
        prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
        label="
有功电能示数（kWh）"
      >
      </el-table-column>
      <el-table-column
<<<<<<< HEAD
        prop="energyJ"
=======
        prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
        label="
尖电示数（kWh）"
      >
      </el-table-column>
      <el-table-column
<<<<<<< HEAD
        prop="energyF"
=======
        prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
        label="
峰电示数（kWh）

"
      >
      </el-table-column>
      <el-table-column
<<<<<<< HEAD
        prop="energyP"
=======
        prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
        label="

平电示数（kWh）"
      >
      </el-table-column>
      <el-table-column
<<<<<<< HEAD
        prop="energyG"
=======
        prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
        label="
谷电示数（kWh）"
      >
      </el-table-column>
      <el-table-column
<<<<<<< HEAD
        prop=""
=======
        prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
        label="
电流(A)"
      >
        <el-table-column
<<<<<<< HEAD
          prop="currentA"
=======
          prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
          label="
A"
        >
        </el-table-column>
        <el-table-column
<<<<<<< HEAD
          prop="currentB"
=======
          prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
          label="
B"
        >
        </el-table-column>
        <el-table-column
<<<<<<< HEAD
          prop="currentC"
=======
          prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
          label="
C"
        >
        </el-table-column>
<<<<<<< HEAD
=======
        <el-table-column
          prop="address"
          label="
D"
        >
        </el-table-column>
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
      </el-table-column>

      <el-table-column
        prop="address"
        label="
电压(V)"
      >
        <el-table-column
<<<<<<< HEAD
          prop="voltageA"
=======
          prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
          label="
A"
        >
        </el-table-column>
        <el-table-column
<<<<<<< HEAD
          prop="voltageB"
=======
          prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
          label="
B"
        >
        </el-table-column>
        <el-table-column
<<<<<<< HEAD
          prop="voltageC"
=======
          prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
          label="
C"
        >
        </el-table-column>
<<<<<<< HEAD
      </el-table-column>

      <el-table-column
        prop=""
=======
        <el-table-column
          prop="address"
          label="
D"
        >
        </el-table-column>
      </el-table-column>

      <el-table-column
        prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
        label="
功率(KW)"
      >
        <el-table-column
<<<<<<< HEAD
          prop="activePower"
=======
          prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
          label="
总"
        >
        </el-table-column>
        <el-table-column
<<<<<<< HEAD
          prop="activePowerA"
=======
          prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
          label="
A"
        >
        </el-table-column>
        <el-table-column
<<<<<<< HEAD
          prop="activePowerB"
=======
          prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
          label="
B"
        >
        </el-table-column>
        <el-table-column
<<<<<<< HEAD
          prop="activePowerC"
=======
          prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
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
<<<<<<< HEAD
          prop="powerFactor"
=======
          prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
          label="
总"
        >
        </el-table-column>
        <el-table-column
<<<<<<< HEAD
          prop="powerFactorA"
=======
          prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
          label="
A"
        >
        </el-table-column>
        <el-table-column
<<<<<<< HEAD
          prop="powerFactorB"
=======
          prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
          label="
B"
        >
        </el-table-column>
        <el-table-column
<<<<<<< HEAD
          prop="powerFactorC"
=======
          prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
          label="
C"
        >
        </el-table-column>
      </el-table-column>
      <el-table-column
<<<<<<< HEAD
        prop="current0"
=======
        prop="address"
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
        label="
零序电流"
      >
      </el-table-column>
    </el-table>
<<<<<<< HEAD
    <el-col style="text-align: right">
=======
    <el-col style="text-align: right;">
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
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
<<<<<<< HEAD
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
=======
      input: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      options: [
        {
          value: "选项1",
          label: "电表",
        },
        {
          value: "选项2",
          label: "水表",
        },
        {
          value: "选项3",
          label: "天然气表",
        },
        {
          value: "选项4",
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
          label: "蒸汽表",
        },
      ],
      options1: [
<<<<<<< HEAD
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
=======
        {
          value: "选项1",
          label: "全部",
        },
        {
          value: "选项2",
          label: "离线",
        },
        {
          value: "选项3",
          label: "在线",
        },
        {
          value: "选项4",
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
          label: "停用",
        },
      ],
      value: "",
    };
  },
<<<<<<< HEAD
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
=======
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
};
</script>

<style lang='scss' scoped>
</style>