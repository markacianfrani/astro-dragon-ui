<template>
  <div class="flex flex-col h-screen justify-between">
    <div class="text-3xl uppercase text-white p-8 text-center">
      Vehicle Overview
    </div>
    <div class="flex items-center flex-grow p-12">
      <LeftPane class="w-1/6 self-start"></LeftPane>
      <OverviewDashboard class="w-2/3"></OverviewDashboard>
      <RightPane class="w-1/6 self-start"></RightPane>
    </div>
    <TheNavigationBar class="m-auto"></TheNavigationBar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavigationBar from "./components/TheNavigationBar.vue";
import OverviewDashboard from "./components/OverviewDashboard.vue";
import LeftPane from "./components/LeftPane.vue";
import RightPane from "./components/RightPane.vue";

export default defineComponent({
  name: "App",
  components: {
    OverviewDashboard,
    LeftPane,
    RightPane,
    TheNavigationBar,
  },
});
</script>

<style></style>
