<template>
  <div class="sm:px-6">
    <div class="flex flex-wrap w-full justify-center sm:justify-start">
      <div class="sm:py-4 sm:px-6 w-full">
        <phone-card @click="handleClick" :item="phone" />
      </div>
    </div>
  </div>
</template>

<script>
import PhoneCard from "./PhoneCard";
export default {
  name: "PhoneDetail",
  components: {
    PhoneCard,
  },
  computed: {
    phone() {
      return this.$store.state.phone;
    },
  },
  methods: {
    handleClick() {
      this.$router.push({ name: "Phones" });
    },
  },
};
</script>
