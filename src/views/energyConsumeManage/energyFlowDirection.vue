<template>
  <div>
    <div id="main" style="width: 481px; height: 446px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      // 数据
    };
  },
  created() {},
  mounted() {
    var myChart = this.$echarts.init(document.getElementById("main"));
  },
  methods: {
    rednerChart() {
      const uploadedDataURL =
        ROOT_PATH + "/data/asset/data/ec-option-doc-statistics-201604.json";
      myChart.showLoading();
      $.getJSON(uploadedDataURL, function (rawData) {
        myChart.hideLoading();
        function convert(source, target, basePath) {
          for (let key in source) {
            let path = basePath ? basePath + "." + key : key;
            if (!key.match(/^\$/)) {
              target.children = target.children || [];
              const child = {
                name: path,
              };
              target.children.push(child);
              convert(source[key], child, path);
            }
          }
          if (!target.children) {
            target.value = source.$count || 1;
          } else {
            target.children.push({
              name: basePath,
              value: source.$count,
            });
          }
        }
        const data = {
          children: [],
        };
        convert(rawData, data, "");
        myChart.setOption(
          (option = {
            title: {
              text: "ECharts Options",
              subtext: "2016/04",
              left: "leafDepth",
            },
            tooltip: {},
            series: [
              {
                name: "option",
                type: "treemap",
                visibleMin: 300,
                data: data.children,
                leafDepth: 2,
                levels: [

                  {
                    itemStyle: {
                      borderColor: "#555",
                      borderWidth: 4,
                      gapWidth: 4,
                    },
                  },
                  {
                    colorSaturation: [0.3, 0.6],
                    itemStyle: {
                      borderColorSaturation: 0.7,
                      gapWidth: 2,
                      borderWidth: 2,
                    },
                  },
                  {
                    colorSaturation: [0.3, 0.5],
                    itemStyle: {
                      borderColorSaturation: 0.6,
                      gapWidth: 1,
                    },
                  },
                  {
                    colorSaturation: [0.3, 0.5],
                  },
                ],
              },
            ],
          })
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.drawerDiv {
  height: 100%;
  //background-color: black;
  //color: white;
}
.chartSG {
  width: 100%;
  height: 725px;
  color: white;
}
</style>