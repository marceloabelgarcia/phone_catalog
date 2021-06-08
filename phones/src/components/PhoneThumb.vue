<template>
  <div
    class="w-full h-full flex flex-row flex-wrap bg-white sm:rounded-lg shadow"
  >
    <figure class="img p-4 w-1/3 flex-shrink-0">
      <img class="mx-auto object-contain max-h-32" :src="item.image" />
    </figure>
    <div class="px-2 py-4 pr-4 font-bold flex flex-col justify-around flex-1">
      <h2>{{ item.brand }} {{ item.title }}</h2>
      <div class="text-red-500">{{ item.price | price }}</div>

      <div class="flex-1"></div>
      <div
        class="
          flex flex-row flex-wrap
          justify-between
          text-gray-600 text-sm
          font-light
        "
      >
        <div class="flex flex-row items-center">
          <svg-cam class="w-4 h-4"></svg-cam>
          <div class="px-2">
            Camera: <span>{{ item.cam }}</span>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <svg-memory class="w-4 h-4"></svg-memory>
          <div class="px-2">
            Memory: <span>{{ item.memory }}</span>
          </div>
        </div>
      </div>
      <hr class="my-2" />
      <div class="flex flex-row justify-end">
        <button
          @click="$emit('click', item)"
          class="
            flex flex-row
            items-center
            py-1
            px-4
            text-sm text-gray-100
            hover:text-gray-600
            bg-yellow-600
            hover:bg-yellow-300
            rounded-xl
            focus:outline-none
          "
        >
          <svg-info class="w-3 h-3"></svg-info>
          <div class="px-1">Details</div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { SvgCam, SvgMemory, SvgInfo } from "./svg/";

export default {
  components: {
    SvgCam,
    SvgMemory,
    SvgInfo,
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          title: "title",
        };
      },
    },
  },
};
</script>
<style scoped>
.img {
  min-width: 100px;
}
</style>
