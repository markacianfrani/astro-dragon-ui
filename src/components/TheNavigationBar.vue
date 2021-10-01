<template>
  <div class="w-3/4 navigation-bar flex">
    <ul class="w-full flex items-center justify-between p-8 bg-tertiary-700">
      <li>
        <a
          href=""
          class="text-center flex flex-col px-4 pb-2"
          :class="{ 'border-b-4': isSelected('overview') }"
          @click.prevent="setSelected('overview')"
        >
          <rux-monitoring-icon
            icon="mission"
            :status="isSelected('overview') ? 'standby' : 'off'"
          ></rux-monitoring-icon>
          Overview
        </a>
      </li>
      <li>
        <a
          href="#"
          class="text-center flex flex-col px-4 pb-2"
          :class="{ 'border-b-4': isSelected('comms') }"
          @click.prevent="setSelected('comms')"
        >
          <rux-monitoring-icon
            icon="antenna"
            :status="isSelected('comms') ? 'standby' : 'off'"
          ></rux-monitoring-icon>
          Comms
        </a>
      </li>
      <li>
        <a
          href="#"
          class="text-center flex flex-col px-4 pb-2"
          :class="{ 'border-b-4': isSelected('prop') }"
          @click.prevent="setSelected('prop')"
        >
          <rux-monitoring-icon
            icon="settings-backup-restore"
            :status="isSelected('prop') ? 'standby' : 'off'"
          ></rux-monitoring-icon>
          Prop
        </a>
      </li>
      <li>
        <a
          href="#"
          class="text-center flex flex-col px-4 pb-2"
          :class="{ 'border-b-4': isSelected('mech') }"
          @click.prevent="setSelected('mech')"
        >
          <rux-monitoring-icon
            icon="equipment"
            :status="isSelected('mech') ? 'standby' : 'off'"
          ></rux-monitoring-icon>
          Mech
        </a>
      </li>
      <li>
        <a
          href="#"
          class="text-center flex flex-col px-4 pb-2"
          :class="{ 'border-b-4': isSelected('power') }"
          @click.prevent="setSelected('power')"
        >
          <rux-monitoring-icon
            icon="propulsion-power"
            :status="isSelected('power') ? 'standby' : 'off'"
          ></rux-monitoring-icon>
          Power
        </a>
      </li>
      <li>
        <a
          href="#"
          class="text-center flex flex-col px-4 pb-2"
          :class="{ 'border-b-4': isSelected('avionics') }"
          @click.prevent="setSelected('avionics')"
        >
          <rux-monitoring-icon
            icon="processor"
            :status="isSelected('avionics') ? 'standby' : 'off'"
          ></rux-monitoring-icon>
          Avionics
        </a>
      </li>
      <li>
        <a
          href="#"
          class="text-center flex flex-col px-4 pb-2"
          :class="{ 'border-b-4': isSelected('gnc') }"
          @click.prevent="setSelected('gnc')"
        >
          <rux-monitoring-icon
            icon="location-searching"
            :status="isSelected('gnc') ? 'standby' : 'off'"
          ></rux-monitoring-icon>
          GNC
        </a>
      </li>
      <li>
        <a
          href="#"
          class="text-center flex flex-col px-4 pb-2"
          :class="{ 'border-b-4': isSelected('thermal') }"
          @click.prevent="setSelected('thermal')"
        >
          <rux-monitoring-icon
            icon="brightness-medium"
            :status="isSelected('thermal') ? 'standby' : 'off'"
          ></rux-monitoring-icon>
          Thermal
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TheNavigationBar",
  data() {
    return {
      selected: "overview",
    };
  },
  methods: {
    isSelected(itemName) {
      return this.selected === itemName;
    },
    setSelected(itemName) {
	    this.selected = itemName
    }
  },
};
</script>
<style scoped>
.navigation-bar::before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-bottom: 170px solid var(--color-tertiary-700);
  border-left: 170px solid transparent;
}
.navigation-bar::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-bottom: 170px solid var(--color-tertiary-700);
  border-right: 170px solid transparent;
}
.is-selected {
}
</style>
