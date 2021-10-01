<template>
  <div class="flex items-center">
    <LeftPane class="w-1/3"></LeftPane>
    <OverviewDashboard class=" w-2/3"></OverviewDashboard>
    <RightPane class="w-1/3"></RightPane>
  </div>
  <div class="flex">
    <div class="fixed bottom-0 w-full">

  <TheNavigationBar class="m-auto "></TheNavigationBar>
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavigationBar from "./components/TheNavigationBar.vue"
import OverviewDashboard from "./components/OverviewDashboard.vue"
import LeftPane from "./components/LeftPane.vue"
import RightPane from "./components/RightPane.vue"


export default defineComponent({
  name: "App",
  components: {
    OverviewDashboard, LeftPane, RightPane, TheNavigationBar
  },
});
</script>

<style>
</style>
