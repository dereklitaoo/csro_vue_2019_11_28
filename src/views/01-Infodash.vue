<template>
  <v-container fill-height fluid class="pl-0 pr-0">
    <v-row class="ml-0" dense>
      <v-col cols="6" lg="3">
        <TempValue></TempValue>
      </v-col>
      <v-col cols="6" lg="3">
        <HumiValue></HumiValue>
      </v-col>
      <v-col cols="6" lg="3">
        <PMValue></PMValue>
      </v-col>
      <v-col cols="6" lg="3">
        <PowerValue></PowerValue>
      </v-col>
    </v-row>
    <v-row class="ml-0" dense>
      <v-col cols="12" lg="5">
        <HistoryValue></HistoryValue>
      </v-col>
      <v-col cols="12" lg="3">
        <AirCondition></AirCondition>
      </v-col>
      <v-col cols="12" lg="4">
        <v-row no-gutters>
          <v-col cols="12">
            <v-card height="170px" class="d-flex justify-center align-center"
              >场景快速切换</v-card
            >
          </v-col>
          <v-col cols="12" class="pt-2">
            <v-card height="170px" class="d-flex justify-center align-center"
              >三日天气预报</v-card
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="ml-0" dense>
      <v-col cols="12" lg="4">
        <v-card height="430px" class="d-flex justify-center align-center"
          >最近使用设备/灯光设备/窗帘设备</v-card
        >
      </v-col>
      <v-col cols="12" lg="4">
        <v-card height="430px" class="d-flex justify-center align-center"
          >路况地图显示</v-card
        >
      </v-col>
      <v-col cols="6" lg="2">
        <v-card height="430px" class="d-flex justify-center align-center"
          >设备信息</v-card
        >
      </v-col>
      <v-col cols="6" lg="2">
        <TimeLine></TimeLine>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TempValue from "@/widgets/TempValue.vue";
import HumiValue from "@/widgets/HumiValue.vue";
import PMValue from "@/widgets/PMValue.vue";
import PowerValue from "@/widgets/PowerValue.vue";
import HistoryValue from "@/widgets/HistoryValue.vue";
import AirCondition from "@/widgets/AirCondition.vue";
import TimeLine from "@/widgets/TimeLine.vue";
export default {
  components: {
    TempValue,
    HumiValue,
    PMValue,
    PowerValue,
    HistoryValue,
    AirCondition,
    TimeLine
  },
  data: () => ({
    info_items: [{ name: "颗粒物当前值" }, { name: "功率当前值" }],
    scene_items: [
      { name: "回家" },
      { name: "离家" },
      { name: "用餐" },
      { name: "电影" },
      { name: "用餐" },
      { name: "电影" }
    ]
  })
};
</script>

<style></style>
