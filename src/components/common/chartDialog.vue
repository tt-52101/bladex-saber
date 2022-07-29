<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="showDialog"
      width="60%"
      :modal-append-to-body="false"
      @close="kcDialog = false"
    >
      <el-tabs tab-position="left" @tab-click="tabActive">
        <el-row>
          <el-col :span="16">
            <el-date-picker
              v-model="yeartsStart"
              :picker-options="startDatePicker"
              value-format="yyyy"
              type="year"
              @change="startTime"
              placeholder="开始时间"
            >
            </el-date-picker>
            ~
            <el-date-picker
              v-model="yeartsEnd"
              value-format="yyyy"
              @change="startTime"
              :picker-options="endDatePicker"
              type="year"
              placeholder="结束时间"
            >
            </el-date-picker>
          </el-col>
          <el-col :span="4"> <el-button type="primary">查询</el-button></el-col>

          <el-col :span="24"> </el-col>
        </el-row>
        <el-row :gutter="80" >
          <el-col :span="12"> <slot name="one"></slot> </el-col>
          <el-col :span="12"> <slot name="two"> </slot></el-col>
        </el-row>
        <el-tab-pane label="年"> </el-tab-pane>
        <el-tab-pane label="月"> </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabLabel: "年",
      startDatePicker: this.beginDate(),
      endDatePicker: this.processDate(),
      yeartsStart: "",
      yeartsEnd: "",
    };
  },
  props: {
    title: {
      type: String,
    },
    showDialog: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    /*  showDialog(val){
      console.log('val',val)
    } */
  },
  methods: {
    tabActive(tab) {
      this.tabLabel = tab.label;
      console.log(this.tabLabel);
    },

    beginDate() {
      let self = this;
      return {
        disabledDate(time) {
          if (self.yeartsEnd !== "") {
            let fixedTime = new Date(time);
            return fixedTime.getFullYear() > self.yeartsEnd;
          }
        },
      };
    },
    // 提出结束时间必须大于提出开始时间
    processDate() {
      let self = this;
      return {
        disabledDate(time) {
          // let fixedTime = new Date(self.oldTime).getTime()
          // return time.getTime() < fixedTime
          let fixedTime = new Date(time);
          return fixedTime.getFullYear() < self.yeartsStart;
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>