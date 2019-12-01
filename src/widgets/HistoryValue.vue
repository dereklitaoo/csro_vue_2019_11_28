<template>
  <v-card height="350px" class="d-flex justify-center align-center">
    <v-carousel height="100%">
      <v-carousel-item v-for="color in colors" :key="color">
        <apexchart
          type="area"
          height="300"
          :options="chartOptions"
          :series="series"
        />
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  components: {},
  data: () => ({
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ],
    chartOptions: {
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },

      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00",
          "2018-09-19T01:30:00",
          "2018-09-19T02:30:00",
          "2018-09-19T03:30:00",
          "2018-09-19T04:30:00",
          "2018-09-19T05:30:00",
          "2018-09-19T06:30:00"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    }
  })
};
</script>

<style></style>
