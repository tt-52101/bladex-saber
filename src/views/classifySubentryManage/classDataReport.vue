<template>
  <div>
    <el-row
      type="flex"
      justify="space-between"
      style="border-bottom: 1px solid rgba(233, 233, 233, 1)"
    >
      <el-col :span="18">
<<<<<<< HEAD
        <el-row :gutter="24">
          <el-col :offset="2" :span="6"
            ><el-input v-model="input" placeholder="请输入内容"></el-input
          ></el-col>
          <el-col :span="6">
=======
        <el-row  style='width:65%;align-items: flex-start' :gutter="30">
          <el-col :span="8">
            <el-button-group>
              <el-button >年</el-button>
              <el-button >月</el-button>
              <el-button >日</el-button>
            </el-button-group></el-col
          >

          <el-col :span="6">
            <el-button-group>
              <el-button >区间</el-button>
              <el-button >单个</el-button>
            </el-button-group>
          </el-col>

          <el-col :span="10">
            <el-date-picker
              style="width: 170px"
              
              v-model="value3"
              type="year"
              placeholder="选择年"
            >
            </el-date-picker>
          </el-col>
          <!-- <el-col :offset="2" :span="6"
            ><el-input v-model="input" placeholder="请输入内容"></el-input
          ></el-col> -->
          <!-- <el-col :span="6">
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
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
<<<<<<< HEAD
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="6" :offset="12">
        <el-button>查看</el-button>
        <el-button>导入</el-button>
      </el-col>
=======
          </el-col> -->
        </el-row>
      </el-col>

      <el-row  type=flex  justify="end" style='width:30%;'>
        <el-col :span="13">
          <el-button-group>
            <el-button icon="el-icon-s-operation">看能耗</el-button>
            <el-button icon="el-icon-date">看成本</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="6">
          <!-- <el-button>查看</el-button> -->
          <el-button>导出</el-button>
        </el-col>
      </el-row>
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
    </el-row>

    <avue-crud
      :data="data"
      :option="option"
      :span-method="spanMethod"
    ></avue-crud>
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
      data: [
        {
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
        {
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          name: "王大虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
      ],
      option: {
        border: true,
        column: [
          {
            label: "姓名",
            prop: "name",
          },
          {
            label: "数值 1",
            prop: "amount1",
          },
          {
            label: "数值 2",
            prop: "amount2",
          },
          {
            label: "数值 3",
            prop: "amount3",
          },
        ],
      },
      spanArr: [],
      key: "name",
    };
  },
  created() {
    this.rowspan();
  },
  methods: {
    rowspan() {
      this.spanArr = [];
      this.position = 0;
      this.data.forEach((item, index) => {
        if (index === 0) {
          this.spanArr.push(1);
          this.position = 0;
        } else {
          if (this.data[index][this.key] === this.data[index - 1][this.key]) {
            this.spanArr[this.position] += 1;
            this.spanArr.push(0);
          } else {
            this.spanArr.push(1);
            this.position = index;
          }
        }
      });
    },
    spanMethod({ row, column, rowIndex, columnIndex }) {
      if (column.property == [this.key]) {
        const _row = this.spanArr[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col,
        };
      }
    },
  },
};
</script>

<style lang='scss' scoped>
</style>