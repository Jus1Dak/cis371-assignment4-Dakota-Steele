<template>
  <div
    class="syrup"
    :style="{ background: syrupPattern }"
  ></div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  type: string;
}>();

const syrupPattern = computed(() => {
  if (props.type === "Vanilla") {
    return `repeating-linear-gradient(
      45deg,
      #E2D098 0px,
      #E2D098 12px,
      #FFF0D4 12px,
      #FFF0D4 24px
    )`;
  } else if (props.type === "Caramel") {
    return `repeating-linear-gradient(
      45deg,
      #B96B25 0px,
      #B96B25 12px,
      #C69A70 12px,
      #C69A70 24px
    )`;
  } else if (props.type === "Hazelnut") {
    return `repeating-linear-gradient(
      45deg,
      #91613B 0px,
      #91613B 12px,
      #C69A70 12px,
      #C69A70 24px
    )`;
  }

  return "#C6C6C6";
});
</script>

<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  background-color: #c6c6c6;
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>
