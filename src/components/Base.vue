<template>
  <div
    class="baseBeverage"
    :style="{ backgroundColor: baseColor }"
  ></div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  type: string;
}>();

const baseColor = computed(() => {
  if (props.type === "Coffee") {
    return "#6F4E37";
  } else if (props.type === "Green Tea") {
    return "#A5B978";
  } else if (props.type === "Black Tea") {
    return "#8B5034";
  }

  return "#6F4E37";
});
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
}
</style>
