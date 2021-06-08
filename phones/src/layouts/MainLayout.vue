<template>
  <div class="main mx-auto h-full bg-gray-50 max-w-6xl rounded-md">
    <div class="sm:p-4 h-full">
      <div v-if="loading" class="p-12 flex justify-center">
        <Loading />
      </div>
      <transition name="fade">
        <div v-show="!loading">
          <slot></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Loading from "../components/Loading";
export default {
  name: "MainLayout",
  components: { Loading },

  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>
<style scoped>
.main {
  min-height: calc(100vh - 100px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
