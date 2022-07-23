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
            ><el-input v-model="input" placeholder="请输入内容"></el-input
          ></el-col>
          <el-col :span="6">
            <el-select v-model="value" placeholder="电表">
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
            <el-select v-model="value" placeholder="全部">
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
        <el-button>导入</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%;margin:10px 0;">
      <el-table-column type="index" label="序号"> </el-table-column>
      <el-table-column
        prop="date"
        label="
表计名称"
      >
      </el-table-column>
      <el-table-column prop="name" label="数据时间"> </el-table-column>
      <el-table-column prop="address" label="通信状态"> </el-table-column>

      <el-table-column
        prop="address"
        label="
电流变比"
      >
      </el-table-column>
      <el-table-column prop="address" label="电压变比"> </el-table-column>
      <el-table-column
        prop="address"
        label="
有功电能示数（kWh）"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="
尖电示数（kWh）"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="
峰电示数（kWh）

"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="

平电示数（kWh）"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="
谷电示数（kWh）"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="
电流(A)"
      >
        <el-table-column
          prop="address"
          label="
A"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="
B"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="
C"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="
D"
        >
        </el-table-column>
      </el-table-column>

      <el-table-column
        prop="address"
        label="
电压(V)"
      >
        <el-table-column
          prop="address"
          label="
A"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="
B"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="
C"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="
D"
        >
        </el-table-column>
      </el-table-column>

      <el-table-column
        prop="address"
        label="
功率(KW)"
      >
        <el-table-column
          prop="address"
          label="
总"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="
A"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="
B"
        >
        </el-table-column>
        <el-table-column
          prop="address"
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
          prop="address"
          label="
总"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="
A"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="
B"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="
C"
        >
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="address"
        label="
零序电流"
      >
      </el-table-column>
    </el-table>
    <el-col style="text-align: right;">
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
          label: "蒸汽表",
        },
      ],
      options1: [
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
          label: "停用",
        },
      ],
      value: "",
    };
  },
};
</script>

<style lang='scss' scoped>
</style>