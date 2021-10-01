<template>
  <div class="flex items-center">
    <LeftPane class="w-1/3"></LeftPane>
    <OverviewDashboard class="w-1/3"></OverviewDashboard>
    <RightPane class="w-1/3"></RightPane>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OverviewDashboard from "./components/OverviewDashboard.vue"
import LeftPane from "./components/LeftPane.vue"
import RightPane from "./components/RightPane.vue"


export default defineComponent({
  name: "App",
  components: {
    OverviewDashboard, LeftPane, RightPane
  },
});
</script>

<style>
</style>
