<template>
  <div class='classifySubentryOverview'>
    <div class="tabs">
      <div
        :style="{
          color: isActive == 1 ? this.$store.state.common.colorName : '#999999',
        }"
        class="first"
        @click="tabsChange(1)"
      >
        <div>总能耗</div>
        <div
          :style="{
            color:
              isActive == 1 ? this.$store.state.common.colorName : '#666666',
          }"
          class="weight"
        >
          4289.23(吨标煤)
        </div>
        <div><span>与同期相比</span><span>+45%</span></div>
        <span
          ><div
            :style="{
              'background-color':
                isActive == 1 ? this.$store.state.common.colorName : '#999999',
            }"
            class="tabs-line"
          ></div
        ></span>
      </div>
      <div
        :style="{
          color: isActive == 2 ? this.$store.state.common.colorName : '#999999',
        }"
        class="second"
        @click="tabsChange(2)"
      >
        <div>人均能耗</div>
        <div
          :style="{
            color:
              isActive == 2 ? this.$store.state.common.colorName : '#666666',
          }"
          class="weight"
        >
          0.23(吨标煤/人)
        </div>
        <div><span>与同期相比</span><span>+45%</span></div>
        <span
          ><div
            :style="{
              'background-color':
                isActive == 2 ? this.$store.state.common.colorName : '#999999',
            }"
            class="tabs-line"
          ></div
        ></span>
      </div>
  <!-- classDataStatistics dui classStatisticsAnalyse   tong classPariPassu  h classLinkRelativeRatio duibiao classBenchmarkingStatistics 
  shujubb classDataReport
  -->

  <!-- /familyEnergyManage/  zonglan familyEnergyOverview  sjtj familyDataStatistics  dui familyStatisticsAnalyse 
   tong familyPariPassu h familyLinkRelativeRatio   zuoxifenxi  familyRestStatistics    zuoxixiangqing familyRestDetails     
   paimfenxi  familyRankingStatistics     shujubb familyDataReport  jzfengxxi familyExtremumStatistics

   /cockpit
  /cockpit/largeScreen
  -->
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{ isActive: 1,}
    },
    methods:{
       tabsChange(e) {
      this.isActive = e;
    },
}
};

</script>

<style lang="scss" scoped>
.classifySubentryOverview{
 
.tabs {
  display: flex;
  padding: 15px 35px;
  justify-content: start;
   cursor: pointer;
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
}
</style>