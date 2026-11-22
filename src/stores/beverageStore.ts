import { defineStore } from "pinia";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: ["Hot", "Cold"],
    bases: ["Black Tea", "Green Tea", "Coffee"],
    syrups: ["No Syrup", "Vanilla", "Caramel", "Hazelnut"],
    creamers: ["No Cream", "Milk", "Cream", "Half & Half"],

    currentTemp: "Hot",
    currentBase: "Green Tea",
    currentSyrup: "Vanilla",
    currentCreamer: "Milk",

    beverageName: "",
    selectedBeverage: -1,

    beverages: JSON.parse(localStorage.getItem("beverages") || "[]") as Array<{
      name: string;
      temp: string;
      base: string;
      syrup: string;
      creamer: string;
    }>,
  }),

  actions: {
    makeBeverage() {
      this.beverages.push({
        name: this.beverageName,
        temp: this.currentTemp,
        base: this.currentBase,
        syrup: this.currentSyrup,
        creamer: this.currentCreamer,
      });

      localStorage.setItem("beverages", JSON.stringify(this.beverages));

      this.selectedBeverage = this.beverages.length - 1;
      this.beverageName = "";
    },

    showBeverage(index: number) {
      const beverage = this.beverages[index];

      this.selectedBeverage = index;
      this.currentTemp = beverage.temp;
      this.currentBase = beverage.base;
      this.currentSyrup = beverage.syrup;
      this.currentCreamer = beverage.creamer;
    },
  },
});