<template>
  <div>
    <Beverage
      :isIced="currentTemp === 'Cold'"
      :base="currentBase"
      :creamer="currentCreamer"
      :syrup="currentSyrup"
    />

    <ul>
      <li>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>

      <li>
        <template v-for="base in bases" :key="base">
          <label>
            <input
              type="radio"
              name="base"
              :value="base"
              v-model="currentBase"
            />
            {{ base }}
          </label>
        </template>
      </li>

      <li>
        <template v-for="syrup in syrups" :key="syrup">
          <label>
            <input
              type="radio"
              name="syrup"
              :value="syrup"
              v-model="currentSyrup"
            />
            {{ syrup }}
          </label>
        </template>
      </li>

      <li>
        <template v-for="creamer in creamers" :key="creamer">
          <label>
            <input
              type="radio"
              name="creamer"
              :value="creamer"
              v-model="currentCreamer"
            />
            {{ creamer }}
          </label>
        </template>
      </li>
    </ul>

    <!-- Beverage Name and Make Beverage -->
    <div>
      <input
        type="text"
        v-model="beverageName"
        placeholder="Beverage Name"
      />

      <button @click="beverageStore.makeBeverage()">
        Make Beverage
      </button>
    </div>

    <!-- Saved Beverages -->
    <div id="beverage-container">
      <template v-for="(beverage, index) in beverages" :key="index">
        <label class="saved-beverage">
          <input
            type="checkbox"
            :checked="
              selectedBeverage >= 0 &&
              beverages[selectedBeverage].temp === beverage.temp &&
              beverages[selectedBeverage].base === beverage.base &&
              beverages[selectedBeverage].syrup === beverage.syrup &&
              beverages[selectedBeverage].creamer === beverage.creamer
            "
            @change="beverageStore.showBeverage(index)"
          />
          {{ beverage.name }}
        </label>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
import { storeToRefs } from "pinia";

const beverageStore = useBeverageStore();

const {
  temps,
  bases,
  syrups,
  creamers,
  currentTemp,
  currentBase,
  currentSyrup,
  currentCreamer,
  beverageName,
  beverages,
  selectedBeverage,
} = storeToRefs(beverageStore);
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}

ul {
  list-style: none;
}

/* Saved beverages */
#beverage-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
  max-width: 100%;
}

/* Make saved recipe checkboxes look like radio dots */
.saved-beverage input[type="checkbox"] {
  appearance: none;
  width: 13px;
  height: 13px;
  border: 1px solid gray;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  vertical-align: middle;
}

.saved-beverage input[type="checkbox"]:checked {
  background: radial-gradient(circle, #007bff 45%, white 50%);
  border-color: #007bff;
}

.saved-beverage {
  white-space: nowrap;
}
</style>