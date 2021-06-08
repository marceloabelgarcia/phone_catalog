import Vue from "vue";

Vue.filter("price", (value) => {
  return value + " €";
});
