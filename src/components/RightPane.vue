<template>
  <div>
    <ul>
      <li class="mb-4" v-for="(item, index) in data" :key="item">
        <div class="flex items-center">
          <div class="w-full">
            <div class="text-lg mb-2 text-white capitalize">
              {{ item.label }}
            </div>
            <rux-progress :value="item.value" :max="item.max">
              <div slot="output" class="w-2/3 ml-4 text-right">
                <span class="text-2xl">{{ item.value }}</span> {{ item.unit }}
              </div>
            </rux-progress>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          label: "intertial velocity",
          value: 7.68,
          max: 10,
          unit: "km/s",
        },
        {
          label: "altitude",
          value: 390.0,
          max: 1000,
          unit: "km",
        },
        {
          label: "apogee",
          value: 404.4,
          max: 1000,
          unit: "km",
        },
        {
          label: "perigee",
          value: 389.4,
          max: 1000,
          unit: "km",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
