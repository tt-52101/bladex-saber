<template>
  <div class="data-statistics">
    <!-- 侧边栏 -->
    <el-container>
      <el-aside width="200px">
        <div class="left-title">选择区域</div>
        <el-tree
          :data="menu"
          :props="defaultProps"
          @node-click="handleNodeClick"
        ></el-tree>
      </el-aside>
      <el-container style="margin-left: 8px">
        <!-- 头部 -->
        <el-header style="font-size: 12px">
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="19">
              <el-row
                type="flex"
            
                justify="start"
              >
                <el-col :span="4" >
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

                <el-col :span="4" push="2">
                  <el-input
               
                    placeholder="请选择分项"
                    v-model="input"
                    :disabled="true"
                  >
                  </el-input>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="5">
              <el-row
                type="flex"
                
                justify="space-between"
              >
                <el-col :span="16">
                  <el-button-group>
                    <el-button icon="el-icon-s-operation">看能耗</el-button>
                    <el-button icon="el-icon-date">看成本</el-button>
                  </el-button-group>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-header>
        <!-- 内容 -->
        <el-main> 

          <Contrast contrastType='date' @getOptions='getOptions'>

            <template>

               <el-button-group>
                    <el-button>总 </el-button>
                    <el-button >人均</el-button>
                    <el-button >单位建筑面积</el-button>
                  </el-button-group>
            </template>
          </Contrast>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Contrast from "@/components/common/Contrast";
export default {
 
  components: {
    Contrast,
  },

  data() {
    return {
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
      activeName: "second",

      option: {},
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
      getOptions(e){
console.log(e)
      }
  },
};
</script>
<style lang="scss" scoped>
.data-statistics {
  //   background-color: #fff;

  box-sizing: border-box;
  box-shadow: none;
  font-family: 微软雅黑;
  font-weight: 400;
  font-style: normal;
  color: #fff;
  background: inherit inherit inherit inherit inherit inherit inherit inherit
    inherit;
  border-collapse: collapse;
}
.boder {
  border-width: 1px;
  border-style: solid;
  border-color: rgb(233, 233, 233);
  border-collapse: collapse;
}
.left-sidebar {
}

.el-button:hover {
  color: #fff;
  background-color: #409eff;
  border-color: #a5aec2c9;
}
.el-button:focus {
  color: #fff;
  background-color: #409eff;
  border-color: #a5aec2c9;
}

.left-title {
  width: 197px;
  height: 65px;
  line-height: 65px;
  text-align: center;
  font-family: 微软雅黑;
  font-weight: 400;
  font-style: normal;
  color: rgb(153, 153, 153);
  border-radius: 3px 3px 0px 0px;
  border-bottom:1px solid rgb(233, 233, 233);
   background-color: rgb(233, 233, 233);
}
.tabs {
  display: flex;
  padding: 15px;
  justify-content: start;
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
  .third {
    flex: 1;
    padding: 10px 0;
    > div {
      margin: 10px 10px 0 10px;
    }
  }
}
.charts {
  .charts-title {
    text-align: center;

    padding-bottom: 40px;
    font-size: 18px;
    color: #666666;
  }
}
.tabs {
  cursor: pointer;
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

::v-deep input::-webkit-input-placeholder {
  //-webkit-text-fill-color:#fff ;
  -webkit-text-fill-color: #666666;
}
</style>

