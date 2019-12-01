<template>
  <v-card height="350px" class="d-flex justify-center align-top">
    <apexchart
      type="radialBar"
      height="300"
      :options="chartOptions"
      :series="series"
    />
  </v-card>
</template>

<script>
export default {
  components: {},
  data: () => ({
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    series: [36.5],
    chartOptions: {
      chart: {
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            name: {
              offsetY: -20,
              show: true,
              color: "#888",
              fontSize: "20px"
            },
            value: {
              formatter: function(val) {
                return parseFloat(val);
              },
              color: "#111",
              fontSize: "42px",
              show: true
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["°C"]
    }
  })
};
</script>

<style></style>
