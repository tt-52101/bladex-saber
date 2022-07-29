<template>
  <div class="main">
    <el-row
      type="flex"
      class="row-bg"
      justify="space-between"
      style="text-align: center"
    >
      <el-col :span="10">
        <el-button-group>
          <el-button
            @click="
              () => {
                dateTyep = 'year';
                  datePlaceholder='年'
              }
            "
            >年</el-button
          >
          <el-button @click="
              () => {
                dateTyep = 'month';
                  datePlaceholder='月'
              }
            ">月</el-button>
          <el-button @click="
              () => {
                dateTyep = 'date';
                 datePlaceholder='日'
              }
            ">日</el-button>
        </el-button-group>
        <el-date-picker
          style="margin: 8px 20px"
          v-model="leftDate"
          
          :type="dateTyep"
          :placeholder="datePlaceholder"
        >
        </el-date-picker>
        <el-cascader
          v-if="contrastType == 'area'"
          style="width: 330px; height: 38px; margin-top: 8px"
          v-model="leftValue"
          :options="inputLeftList"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
        ></el-cascader
      ></el-col>
      <el-col :span="4"
        ><div class="contrast">对比</div>
        <slot></slot>
      </el-col>
      <el-col :span="10">
        <el-date-picker
          style="margin: 8px 20px"
          v-model="rightDate"
          :type="dateTyep"
           :placeholder="datePlaceholder"
        >
        </el-date-picker>
        <el-cascader
          v-if="contrastType == 'area'"
          style="width: 330px; height: 38px; margin-top: 8px"
          v-model="rightValue"
          :options="inputRightList"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
        ></el-cascader
      ></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col
        :span="10"
        style="
          background-color: rgb(255, 102, 0);
          border-radius: 10px 0 0 10px;
          color: rgb(255, 102, 0);
        "
        >1</el-col
      >
      <el-col
        :span="10"
        style="
          background-color: rgb(54, 169, 206);
          border-radius: 0 10px 10px 0;
          color: rgb(54, 169, 206);
        "
        >1</el-col
      >
    </el-row>
    <el-row type="flex" class="row-bg" justify="center" style="margin: 10px">
      <el-col :span="4" class="left-progress" style="text-align: right"
        >11</el-col
      >
      <el-col :span="6"
        ><el-progress
          style="transform: rotateY(180deg)"
          :show-text="false"
          :stroke-width="30"
          :percentage="50"
          color="rgb(255, 102, 0)"
        >
        </el-progress>
      </el-col>

      <el-col :span="4" class="progress-title"> 建筑面积(㎡)</el-col>
      <el-col :span="6"
        ><el-progress
          :show-text="false"
          color="rgb(54, 169, 206)"
          :stroke-width="30"
          :percentage="50"
        ></el-progress
      ></el-col>
      <el-col :span="4" class="right-progress">11</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateTyep: "year",
      leftValue: "",
      rightValue: "",  
      leftDate: "",
      rightDate: "",
      datePlaceholder:'年',
    };
  },
  porps: {
    contrastType: {
      type: String,
      default: "area", //date
    },
    progressList: {
      type: Array,
      default: function () {
        return [];
      },
    },
    inputLeftList: {
      type: Array,
      default: function () {
        return [];
      },
    },
    inputRightList: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },

  watch:{
    leftValue(value,oldValue) {
       this.$emit("getOptions", `${value}-${this.rightDate}`);
    },
    rightValue(value,oldValue) {
       this.$emit("getOptions", value);
    },
    leftDate(value,oldValue) {
     
    
       this.$emit("getOptions", `${  this.$moment( value).format("YYYY-MM-DD") }至${this.$moment( this.rightValue).format("YYYY-MM-DD")}`);
    },
    rightDate(value,oldValue) {
   

       this.$emit("getOptions", `${  this.$moment( this.leftDate).format("YYYY-MM-DD") }至${this.$moment( value).format("YYYY-MM-DD")}`);
    }

},

  computed: {
   
  },
  methods: {
  /*   upData(e) {
     
      this.$emit("getOptions", e);
    }, */
  },
};
</script>


<style lang="scss" scoped>
.main {
  margin-top: 20px;
}
.contrast {
  text-align: center;
  font-weight: 700;
  font-style: normal;
  font-size: 36px;
  color: #999999;
  border-left: 15px solid rgba(255, 102, 0, 1);
  border-right: 15px solid rgba(54, 169, 206, 1);
  margin-bottom: 10px;
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