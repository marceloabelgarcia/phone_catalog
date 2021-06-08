<template>
  <main-layout>
    <phone-detail />
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/MainLayout";
import PhoneDetail from "../components/PhoneDetail";

export default {
  name: "Phone",
  components: {
    MainLayout,
    PhoneDetail,
  },

  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("loadPhone", id);
  },
};
</script>
