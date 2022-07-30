<template>
   <el-button @click="exPort()">导出</el-button>
</template>

<script>
export default {
  props: {
    //下载名字
    exportName: {
      type: String,
      default: "下载", //date
    }, //下载表格id
    tableId: {
      type: String,
    },
  },
  methods:{
       exPort(){
    if(this.exportName&&this.tableId)
      this.$outToExcels.exportExcel(this.exportName,this.tableId)
    }
  }
};
</script>

<style>
</style>