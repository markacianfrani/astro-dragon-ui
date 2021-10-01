<template>
  <div class="">
    <div class="text-3xl uppercase text-white">Vehicle Overview</div>
    <div class="primary-stats flex items-center justify-center">
      <div
        class="relative p-2 flex align-center mr-4"
        style="background: rgba(255, 255, 255, 0.02); opacity: 0.7"
      >
        <rux-monitoring-progress-icon
          class="m-auto"
          min="0"
          label="psia"
          max="100"
          progress="33"
        >
          <div class="flex flex-col" slot="progress-status">
            <div>2.68</div>
          </div>
        </rux-monitoring-progress-icon>
      </div>

      <div
        class="relative p-2 flex align-center mr-4"
        style="background: rgba(255, 255, 255, 0.02); opacity: 0.7"
      >
        <rux-monitoring-progress-icon
          label="Cabin Temp"
          class="m-auto"
          min="0"
          max="100"
          progress="93"
        ></rux-monitoring-progress-icon>
      </div>
      <div
        class="relative p-2 flex align-center mr-4"
        style="background: rgba(255, 255, 255, 0.02); opacity: 0.7"
      >
        <rux-monitoring-progress-icon
          label="Cabin Pressure"
          class="m-auto"
          min="0"
          max="100"
          progress="33"
        ></rux-monitoring-progress-icon>
      </div>
      <div
        class="relative p-2 flex align-center"
        style="background: rgba(255, 255, 255, 0.02); opacity: 0.7"
      >
        <rux-monitoring-progress-icon
          label="CO2"
          class="m-auto"
          min="0"
          max="100"
          progress="33"
        ></rux-monitoring-progress-icon>
      </div>
    </div>
    <div class="secondary-stats mt-10 flex justify-center">
      <div>
        <div>
          
          <rux-monitoring-progress-icon
            style="background: rgba(255, 255, 255, 0.02); opacity: 0.7"
            label="Loop A"
          ></rux-monitoring-progress-icon>
          <rux-monitoring-progress-icon
            label="Loop B"
          ></rux-monitoring-progress-icon>
        </div>
        <div class="mt-10 px-12">
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
      </div>

      <div class="text-center uppercase">
        <img alt="Vue logo" src="../assets/model.svg" />
        Cabin Mics: <span class="text-critical-500">Recording</span>
      </div>

      <div>
        <rux-monitoring-progress-icon
          label="Net Pwr 1"
        ></rux-monitoring-progress-icon>
        <rux-monitoring-progress-icon
          label="Net Pwr 2"
        ></rux-monitoring-progress-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OverviewDashboard",
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
  width: 176px;
  height: 176px;
}

.secondary-stats rux-monitoring-progress-icon::part(icon) {
  width: 10rem;
  height: 10rem;
}
</style>
