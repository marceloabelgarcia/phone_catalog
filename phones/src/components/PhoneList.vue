<template>
  <div class="sm:px-6">
    <div class="flex flex-wrap w-full justify-center">
      <div
        class="sm:py-4 sm:px-6 w-full md:max-w-xs lg:max-w-md xl:max-w-lg"
        v-for="phone in phones"
        :key="phone.id"
      >
        <phone-thumb @click="handleClick" :item="phone" />
      </div>
    </div>
  </div>
</template>

<script>
import PhoneThumb from "./PhoneThumb.vue";
export default {
  name: "PhoneList",
  components: {
    PhoneThumb,
  },
  computed: {
    phones() {
      return this.$store.state.phones;
    },
  },
  methods: {
    handleClick(item) {
      this.$router.push({ name: "Phone", params: { id: item.id } });
    },
  },
};
</script>
