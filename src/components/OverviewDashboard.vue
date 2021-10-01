<template>

<div class="">
      <div class="text-3xl uppercase text-white">Vehicle Overview</div>
      <div class="flex items-center">
        <div
          class="w-1/4 relative p-2 flex align-center mr-4"
          style="background: rgba(255, 255, 255, 0.02); opacity: 0.7"
        >
          <rux-monitoring-progress-icon
            class="m-auto"
            min="0"
            max="100"
            progress="33"
          ></rux-monitoring-progress-icon>
        </div>
        <div
          class="w-1/4 relative p-2 flex align-center mr-4"
          style="background: rgba(255, 255, 255, 0.02); opacity: 0.7"
        >
          <rux-monitoring-progress-icon
            class="m-auto"
            min="0"
            max="100"
            progress="33"
          ></rux-monitoring-progress-icon>
        </div>
        <div
          class="w-1/4 relative p-2 flex align-center mr-4"
          style="background: rgba(255, 255, 255, 0.02); opacity: 0.7"
        >
          <rux-monitoring-progress-icon
            class="m-auto"
            min="0"
            max="100"
            progress="33"
          ></rux-monitoring-progress-icon>
        </div>
        <div
          class="w-1/4 relative p-2 flex align-center"
          style="background: rgba(255, 255, 255, 0.02); opacity: 0.7"
        >
          <rux-monitoring-progress-icon
            class="m-auto"
            min="0"
            max="100"
            progress="33"
          ></rux-monitoring-progress-icon>
        </div>
      </div>
      <div>

      <img alt="Vue logo" src="../assets/model.png" />
      </div>

    </div>
</template>

<script>
	export default {
		name: 'OverviewDashboard'
		
	}
</script>

<style scoped>

</style>