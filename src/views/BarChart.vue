<template>
  <div class="container">
    <Chart :height="600" :chartdata="chartdata" :options="options" />
    <span class="y-scalelabel y-scalelabel-0">飲水量(公升)</span>
  </div>
</template>

<script>
import Chart from "@/components/Chart";

export default {
  components: {
    Chart
  },
  data() {
    return {
      chartdata: {
        labels: ["日", "一", "二", "三", "四", "五", "六"],
        datasets: [
          {
            type: "bar",
            label: "水",
            id: "y-axis-0",
            backgroundColor: "#3FB4E0",
            data: [0.8, 2.3, 3.6, 3, 2.2, 1.6, 1.5]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "一週飲水量",
          padding: 40,
          fontSize: 18
        },
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 30,
            fontSize: 14,
            padding: 40,
            fontColor: "#555"
          }
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "black"
              },
              gridLines: {
                color: "#ccc"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                max: 5,
                min: 0,
                fontColor: "black",
                padding: 8
              },
              gridLines: {
                color: "#ccc",
                zeroLineColor: "#ccc"
              }
            }
          ]
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  max-width: 800px;
  margin: 50px auto;
  .y-scalelabel {
    position: absolute;
    top: 73px;
    &-0 {
      left: 40px;
    }
  }
}
</style>
