<template>
  <div>
    <el-row class="solid">
      <el-row
        type="flex"
        justify="space-between"
        style="
          height: 64px ;
          line-height: 64px;
          padding: 0 10px;
          border: 1px solid #C5C8CD;;
        "
      >
        <el-col :span="17">
          <el-row
            type="flex"
            style=" align-items: center;  height: 64px ;"
            justify="start"
          ><!-- classifySubentryManage -->
            <el-col :span="5">
              <el-button-group>
                <el-button>年</el-button>
                <el-button>月</el-button>
                <el-button>日</el-button>
              </el-button-group></el-col
            >

            <el-col :span="4">
              <el-button-group>
<<<<<<< HEAD
                <el-button>区间</el-button>
                <el-button>单个</el-button>
=======
                <el-button>单个</el-button>
                <el-button>区间</el-button>
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
              </el-button-group>
            </el-col>

            <el-col :span="5">
              <el-date-picker v-model="value3" type="year" placeholder="选择年">
              </el-date-picker>
            </el-col>
<<<<<<< HEAD
            <el-col :span="3" push="1">
              <el-select v-model="value" placeholder="总消耗">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>

            <el-col :span="3" push="2">
              <el-input
                placeholder="请选择分项"
                v-model="input"
                :disabled="true"
              >
              </el-input>
            </el-col>
=======
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
          </el-row>
        </el-col>
        <el-col :span="6">
          <el-row
            type="flex"
            style="align-items: center;  height: 64px ;"
            justify="space-between"
          >
            <el-col :span="16">
              <el-button-group>
                <el-button icon="el-icon-s-operation">看能耗</el-button>
                <el-button icon="el-icon-date">看成本</el-button>
              </el-button-group>
            </el-col>

<<<<<<< HEAD
            <el-col :span="8">
              <el-button icon="el-icon-tickets" plain>能耗报表</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <Contrast></Contrast>
=======
            <!-- <el-col :span="8">
              <el-button icon="el-icon-tickets" plain>能耗报表</el-button>
            </el-col> -->
          </el-row>
        </el-col>
      </el-row>
      <Contrast contrastType="area">
        <template>
           <el-button-group>
                <el-button>总 </el-button>
                <el-button >人均</el-button>
                <el-button >单位建筑面积</el-button>
              </el-button-group>
        </template>
      </Contrast>
>>>>>>> d6dad16b149a766e99a96ed2b53714eaa942d6ca
    </el-row>
  </div>
</template>

<script>
import Contrast from "@/components/common/Contrast";

export default {
  data() {
    return {
      input: "",
      value1: "",
      value2: "",
      value3: "",
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
    };
  },
  components: {
    Contrast,
  },
  mounted() {},
};
</script>


<style lang="scss" scoped>

.contrast {
  text-align: center;
  font-weight: 700;
  font-style: normal;
  font-size: 36px;
  color: #999999;
  border-left: 15px solid rgba(255, 102, 0, 1);
  border-right: 15px solid rgba(54, 169, 206, 1);
}
.progress-title {
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  color: #666666;
  text-align: center;
}
::v-deep .el-progress-bar__outer {
  background-color: transparent;
}

::v-deep .el-progress-bar__outer,
::v-deep .el-progress-bar__inner {
  border-radius: 0 10px 10px 0;
}
.left-progress {
  text-align: right;
  line-height: 30px;
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  color: #666666;
}
.right-progress {
  line-height: 30px;
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  color: #666666;
}
</style>