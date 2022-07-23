<template>
  <div class="overview">
    <el-row style="padding: 10px">
      <el-col :span="6" style="padding: 0px" class="item"
        ><div class="title">能耗趋势</div>
        <el-button-group style="margin-left: 20px">
          <el-button>年</el-button>
          <el-button>月</el-button>
          <el-button>日</el-button>
        </el-button-group></el-col
      >
      <el-col :span="11" style="margin: 0 10px; height: 272px" class="item"
        ><div class="title">本年度能耗概览</div>
        <el-row style="padding: 5px 20px">
          <el-col :span="10"><div class="item1">用能成本趋势</div></el-col>
          <el-col :span="14"
            ><div class="item1" style="margin-left: 40px">
              用能成本趋势
            </div></el-col
          >
          <el-col :span="10"><div class="item1">用能成本趋势</div></el-col>
          <el-col :span="14"
            ><div class="item1" style="margin-left: 40px">
              用能成本趋势
            </div></el-col
          >
        </el-row>
      </el-col>
      <el-col :span="6" class="item" 
        ><div class="title">用能成本趋势</div>
        <el-button-group style="margin-left: 20px">
          <el-button>年</el-button>
          <el-button>月</el-button>
          <el-button>日</el-button>
        </el-button-group></el-col
      >
      <el-col :span="6" class="item" style="margin-top: 18px;"
        ><div class="title">分类分项能耗占比</div>
        <el-button-group style="margin-left: 20px">
          <el-button>年</el-button>
          <el-button>月</el-button>
          <el-button>日</el-button>
        </el-button-group>
      </el-col>
      <el-col :span="11" class="item" style="margin: 0 10px; height: 487px;    margin-top: -90px;"
        ><div class="title">本年度区域能耗情况</div>
        <div>
           <el-image :src="src"></el-image>
        </div>
      </el-col>

      <el-col :span="6" class="item" style="margin-top: 18px;"
        ><div class="title">分户能耗</div>
        <el-button-group style="margin-left: 20px">
          <el-button>年</el-button>
          <el-button>月</el-button>
          <el-button>日</el-button>
        </el-button-group>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import img from "@/img/u2556.png"
export default {
data(){
    return{
      src:img
    }
}

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
    height: 91px;
    text-align: center;
    border: 1px solid #999999;
    border-bottom: 3px solid #2c95e0;
  }
}
</style>