<template>
  <div class="flex flex-col h-full justify-start">
    <div class="primary-stats flex items-center justify-center">
      <div
        class="relative p-2 flex align-center mr-4"
        v-for="(primaryStat, index) in primaryStats"
        :key="index"
      >
        <rux-monitoring-progress-icon
          class="m-auto"
          min="0"
          :label="primaryStat.label"
          max="100"
          :progress="primaryStat.progress"
        >
          <div class="text-3xl flex flex-col" slot="progress-status">
            <div>{{ primaryStat.value }} {{ primaryStat.unit }}</div>
          </div>
        </rux-monitoring-progress-icon>
      </div>
    </div>
    <div class="relative">
      <div class="secondary-stats grid grid-cols-5">
        <rux-monitoring-progress-icon
          v-for="(stat, index) in secondaryStatsLeft"
          :key="index"
          :label="stat.label"
          :progress="stat.progress"
        >
          <div class="text-xl flex flex-col" slot="progress-status">
            <div>{{ stat.value }} {{ stat.unit }}</div>
          </div>
        </rux-monitoring-progress-icon>
        <div></div>
        <rux-monitoring-progress-icon
          v-for="(stat, index) in secondaryStatsRight"
          :key="index"
          :label="stat.label"
          :progress="stat.progress"
        >
          <div class="text-xl flex flex-col" slot="progress-status">
            <div>{{ stat.value }} {{ stat.unit }}</div>
          </div>
        </rux-monitoring-progress-icon>
      </div>
      <div class="rocket-overview text-center uppercase">
        <img class="w-full h-full" alt="rocket" src="../assets/model.svg" />
        Cabin Mics: <span class="text-critical-500">Recording</span>
      </div>
    </div>

<div class="grid grid-cols-5">
  <div class="mt-10 w-1/2 m-auto col-span-2  py-8 ">
          <div
            class="
              uppercase
              text-2xl text-primary-200
              border-b border-primary-200
              pb-6
            "
          >
            Connections
          </div>
          <ul>
            <li class="flex my-4 pr-1">
              <span class="text-primary-200">Manual Rigs</span
              ><span class="ml-auto font-bold uppercase">Connected</span>
            </li>
            <li class="flex my-4 pr-1">
              <span class="text-primary-200">Changelog</span
              ><span class="ml-auto font-bold uppercase">Connected</span>
            </li>
            <li class="flex my-4 pr-1">
              <span class="text-primary-200">Airlock</span
              ><span class="ml-auto font-bold uppercase">Connected</span>
            </li>
            <li class="flex my-4 pr-1">
              <span class="text-primary-200">Wing</span
              ><span class="ml-auto font-bold uppercase">Connected</span>
            </li>
          </ul>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

</div>


    
  </div>
</template>

<script>
export default {
  name: "OverviewDashboard",
  data() {
    return {
      primaryStats: [
        {
          value: 2.69,
          label: "PPO2",
          unit: "psia",
          progress: 20,
        },
        {
          value: 2.41,
          label: "Cabin Temp",
          unit: "°C",
          progress: 5,
        },
        {
          value: 14,
          label: "Cabin Pressure",
          unit: "psia",
          progress: 20,
        },
        {
          value: 0.07,
          label: "CO2",
          unit: "mmHg",
          progress: 35,
        },
      ],
      secondaryStatsLeft: [
        {
          value: 26.53,
          label: "Loop A",
          unit: "°C",
          progress: 60,
        },
        {
          value: 20,
          label: "Loop B",
          unit: "°C",
          progress: 50,
        },
      ],
      secondaryStatsRight: [
        {
          value: 0.0,
          label: "Net Pwr 1",
          unit: "W",
          progress: 0,
        },
        {
          value: 0.0,
          label: "Net Pwr 2",
          unit: "W",
          progress: 0,
        },
      ],
    };
  },
};
</script>

<style scoped>
rux-monitoring-progress-icon::part(icon-group) {
  width: 100%;
}

rux-monitoring-progress-icon::part(label) {
  margin-top: 0.5rem;
  max-width: 100%;
}

rux-monitoring-progress-icon::part(status) {
  display: none;
}

.primary-stats rux-monitoring-progress-icon::part(icon) {
  width: 12vw;
  height: 12vw;
}

.secondary-stats rux-monitoring-progress-icon::part(icon) {
  width: 8vw;
  height: 8vw;
}
.rocket-overview {
  width: 400px;
  left: 0;
  top: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
}
</style>
