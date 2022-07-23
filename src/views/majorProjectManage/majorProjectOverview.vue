<template>
  <div class="data-statistics">
    <!-- 侧边栏 -->
    <el-container>
      <el-aside width="200px">
        <el-row>
          <el-col :span="12">
            <div class="left-title">
              <el-input v-model="input" placeholder="请选择区域"></el-input>
            </div>

            <el-tree
              :data="menu"
              :props="defaultProps"
              @node-click="handleNodeClick"
            ></el-tree>
          </el-col>
        </el-row>
      </el-aside>
      <el-container style="margin-left: 8px">
        <el-main>
          <el-row style="text-align: center" type="flex" justify="space-around">
            <el-col
              :span="13"
              style="margin: 10px 0; border: 1px solid rgba(233, 233, 233, 1)"
            >
              <div>
                <el-image
                  style="width: 578px; height: 400px"
                  :src="src"
                ></el-image>
              </div>
            </el-col>
            <el-col
              :span="10"
              style="
                padding: 10px 40px;
                color: #666666;
                border: 1px solid rgba(233, 233, 233, 1);
                margin: 10px 0;
                height: 407px;
              "
            >
              <div class="inner-title">设备信息</div>
              <div class="inner-style">
                设备名称: &nbsp &nbsp &nbsp 1#水冷机组
              </div>
              <div class="inner-style">
                设备类型： &nbsp &nbsp &nbsp暖通空调设备
              </div>
              <div class="inner-style">设备区域： &nbsp &nbsp &nbsp 1#楼</div>
              <div class="inner-style">
                安装位置： &nbsp &nbsp &nbsp 1楼西侧井道
              </div>
            </el-col>
          </el-row>
          <el-row
            style="
              height: 471px px;
              border: 1px solid rgba(233, 233, 233, 1);
              margin: 10px 12px;
            "
          >
            <el-col class="title">实时监测</el-col>
            <el-col style="position: relative; padding: 0 10px">
              <el-tabs
                v-model="activeName"
                @tab-click="handleClick"
                type="card"
                :before-leave="beforeLeave"
              >
                <el-tab-pane label="图标" name="first">用户管理</el-tab-pane>
                <el-tab-pane label="表格" name="second">配置管理</el-tab-pane>
              </el-tabs>
              <el-button
                icon="el-icon-download"
                style="position: absolute; right: 10px; top: 5px"
                >导出</el-button
              >
            </el-col>
          </el-row>

          <el-row
            style="
              height: 471px px;
              border: 1px solid rgba(233, 233, 233, 1);
              margin: 10px 12px;
            "
          >
            <el-col class="title">统计分析</el-col>

            <el-row :gutter="20" style="margin: 0">
              <el-col :span="20">
                <el-row type="flex" justify="start">
                  <el-col :span="4">
                    <el-button-group>
                      <el-button>年</el-button>
                      <el-button>月</el-button>
                      <el-button>日</el-button>
                    </el-button-group></el-col
                  >

                  <el-col :span="4">
                    <el-button-group>
                      <el-button>区间</el-button>
                      <el-button>单个</el-button>
                    </el-button-group>
                  </el-col>

                  <el-col :span="3">
                    <el-date-picker
                      style="width: 170px"
                      v-model="value3"
                      type="year"
                      placeholder="选择年"
                    >
                    </el-date-picker>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="4">
                <el-button-group>
                  <el-button icon="el-icon-s-operation">看能耗</el-button>
                  <el-button icon="el-icon-date">看成本</el-button>
                </el-button-group>
              </el-col>
            </el-row>
            <el-col style="position: relative; padding: 0 10px">
              <el-tabs
                v-model="activeName1"
                @tab-click="handleClick"
                type="card"
                :before-leave="beforeLeave"
              >
                <el-tab-pane label="图标" name="first">用户管理</el-tab-pane>
                <el-tab-pane label="表格" name="second">配置管理</el-tab-pane>
              </el-tabs>
              <el-button
                icon="el-icon-download"
                style="position: absolute; right: 10px; top: 5px"
                >导出</el-button
              >
            </el-col>
          </el-row>

          <el-row
            style="
              height: 471px px;
              border: 1px solid rgba(233, 233, 233, 1);
              margin: 10px 12px;
            "
          >
            <el-col class="title">对比分析</el-col>
            <el-col>
              <el-row :gutter="20" style="padding: 0 10px">
                <el-col :span="4">
                  <el-button-group>
                    <el-button>年</el-button>
                    <el-button>月</el-button>
                  </el-button-group></el-col
                >

                <el-col :span="3">
                  <el-date-picker
                    style="width: 170px"
                    v-model="value3"
                    type="year"
                    placeholder="选择年"
                  >
                  </el-date-picker>
                </el-col>
                <el-col :span="8" :push="2">
                  <el-col
                    :span="6"
                    style="
                      padding: 0;
                      width: 13px;
                      height: 40px;
                      background: inherit;
                      background-color: rgba(255, 102, 0, 1);
                    "
                  ></el-col>
                  <el-col
                    :span="12"
                    style="
                      font-weight: 700;
                      font-style: normal;
                      font-size: 36px;
                      color: #999999;
                      text-align: center;
                    "
                  >
                    vs
                  </el-col>
                  <el-col
                    :span="6"
                    style="
                      padding: 0;
                      width: 13px;
                      height: 40px;
                      background: inherit;
                      background-color: rgba(54, 169, 206, 1);
                    "
                  ></el-col>
                </el-col>
                <el-col :span="3">
                  <el-date-picker
                    style="width: 170px"
                    v-model="value3"
                    type="year"
                    placeholder="选择年"
                  >
                  </el-date-picker>
                </el-col>
              </el-row>
            </el-col>
            <el-col style="position: relative; padding: 0 10px"> </el-col>
          </el-row>

          <el-row
            style="
              height: 471px px;
              border: 1px solid rgba(233, 233, 233, 1);
              margin: 10px 12px;
            "
          >
            <el-col class="title">对标分析</el-col>
            <el-col>
              <el-row :gutter="20" style="padding: 0 10px">
                <el-col :span="4">
                  <el-button-group>
                    <el-button>年</el-button>
                    <el-button>月</el-button>
                  </el-button-group></el-col
                >
                <el-col :span="4">
                  <el-button-group>
                    <el-button>区间</el-button>
                    <el-button>单个</el-button>
                  </el-button-group>
                </el-col>
                <el-col :span="3">
                  <el-date-picker
                    style="width: 170px"
                    v-model="value3"
                    type="year"
                    placeholder="选择年"
                  >
                  </el-date-picker>
                </el-col>
                <el-col :span="4" :push="11">
                  <el-button icon="el-icon-male">查询</el-button>
                </el-col>
              </el-row>
            </el-col>
            <el-col style="position: relative; padding: 0 10px"> </el-col>
          </el-row>

          <el-row
            style="
              height: 471px px;
              border: 1px solid rgba(233, 233, 233, 1);
              margin: 10px 12px;
            "
          >
            <el-col class="title"> 影响因素分析</el-col>
            <el-col>
              <el-row :gutter="20" style="padding: 0 10px">
                <el-col :span="4">
                  <el-button-group>
                    <el-button>年</el-button>
                    <el-button>月</el-button>
                    <el-button>日</el-button>
                  </el-button-group></el-col
                >
                <el-col :span="4">
                  <el-button-group>
                    <el-button>区间</el-button>
                    <el-button>单个</el-button>
                  </el-button-group>
                </el-col>
                <el-col :span="3">
                  <el-date-picker
                    style="width: 170px"
                    v-model="value3"
                    type="year"
                    placeholder="选择年"
                  >
                  </el-date-picker>
                </el-col>
                <el-col :span="4" :push="11">
                  <el-select v-model="influenceValue" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="4" :push="11">
                  <el-button icon="el-icon-male">查询</el-button>
                </el-col>
              </el-row>
            </el-col>
            <el-col style="position: relative; padding: 0 10px"> </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import img from "@/img/u19531.jpg";
export default {
  components: {},

  data() {
    return {influenceValue:'',
      activeName: "second",
       activeName1: "second",
      src: img,
      defaultProps: {
        children: "children",
        label: "label",
      },
      menu: [
        {
          children: [
            {
              children: [
                { children: [], id: 6, label: "子部门1", parentId: 2 },
                { children: [], id: 10, label: "子部门10", parentId: 2 },
                { children: [], id: 11, label: "子部门11", parentId: 2 },
              ],
              id: 2,
              label: "部门1",
              parentId: 1,
            },
            {
              children: [
                { children: [], id: 7, label: "子部门2", parentId: 3 },
              ],
              id: 3,
              label: "部门2",
              parentId: 1,
            },
            {
              children: [
                { children: [], id: 8, label: "子部门3", parentId: 4 },
              ],
              id: 4,
              label: "部门3",
              parentId: 1,
            },
            {
              children: [
                { children: [], id: 9, label: "子部门4", parentId: 5 },
              ],
              id: 5,
              label: "部门4",
              parentId: 1,
            },
          ],
          id: 1,
          label: "公司",
          parentId: 0,
        },
      ],
      value3: "",
      isActive: 1,
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
      input: "",
     

      option: {},
    };
  },
  created() {},
  mounted() {
    console.log(this.$store.state.common.colorName);
  },
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    tabsChange(e) {
      this.isActive = e;
    },
    handleNodeClick(data) {
      console.log(data);
    },
  },
};
</script>
<style lang="scss" scoped>
.inner-title {
  font-family: "微软雅黑";
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  color: #666666;
}
.inner-style {
  background-color: rgb(242, 242, 242);
  text-align: left;
  border-radius: 10px;
  height: 42px;
  line-height: 42px;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  text-indent: 18px;
  margin: 36px 0;
}
.left-title {
  width: 197px;
  height: 65px;
  line-height: 65px;
  text-align: center;

  border-radius: 3px 3px 0px 0px;
}
.title {
  height: 48px;
  line-height: 48px;
  text-indent: 20px;
  background: inherit;
  background-color: rgba(242, 242, 242, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(233, 233, 233, 1);
  border-radius: 3px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
  font-weight: 700;
  font-style: normal;
}
</style>

