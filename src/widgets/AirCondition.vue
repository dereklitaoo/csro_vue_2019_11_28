<template>
  <v-card height="350px" class="d-flex justify-center align-center">
    <v-container class="pa-0">
      <v-row>
        <v-col cols="12" class="d-flex justify-center align-center">
          <v-btn-toggle v-model="toggle_exclusive">
            <v-btn color="light-blue lighten-4">
              <v-icon left>mdi-weather-sunny</v-icon>制热
            </v-btn>
            <v-btn color="light-blue lighten-4">
              <v-icon left>mdi-snowflake</v-icon>制冷
            </v-btn>
            <v-btn color="light-blue lighten-4">
              <v-icon left>mdi-snowflake</v-icon>除湿
            </v-btn>
            <v-btn color="light-blue lighten-4">
              <v-icon left>mdi-snowflake</v-icon>通风
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-center align-center">
          <apexchart type="radialBar" height="300" :options="chartOptions" :series="series" />
        </v-col>
      </v-row>
    </v-container>
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
