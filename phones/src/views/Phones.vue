<template>
  <main-layout>
    <phone-list />
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/MainLayout";
import PhoneList from "@/components/PhoneList.vue";

export default {
  name: "Phones",
  components: {
    PhoneList,
    MainLayout,
  },

  created() {
    this.$store.dispatch("loadPhones");
  },
};
</script>
