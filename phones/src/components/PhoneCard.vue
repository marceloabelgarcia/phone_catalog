<template>
  <div class="w-full h-full flex flex-wrap bg-white sm:rounded-lg shadow">
    <figure class="img p-4 w-1/3 flex-shrink-0">
      <img class="mx-auto object-contain max-h-96" :src="item.image" />
    </figure>
    <div
      class="
        px-2
        py-2
        sm:py-4
        pr-4
        font-bold
        flex flex-col
        justify-around
        flex-1
      "
    >
      <h2 class="text-2xl sm:text-3xl text-gray-900">{{ item.brand }}</h2>
      <h3 class="text-xl sm:text-3xl text-yellow-800">{{ item.title }}</h3>
      <div class="py-2 sm:py-4 text-lg text-red-500">
        {{ item.price | price }}
      </div>

      <div
        style="min-width: 200px"
        class="py-2 sm:py-4 leading-7 text-gray-500 font-light"
      >
        {{ item.description }}
      </div>

      <div class="flex flex-col text-gray-600 text-base space-y-2 font-light">
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

        <div class="py-4 flex flex-row items-center">
          <div class="">
            <span class="font-bold pr-2">Color:</span> {{ item.color }}
          </div>
        </div>
      </div>
      <div class="flex-1"></div>
      <hr class="my-2" />
      <div class="py-4 flex flex-row justify-end">
        <button
          @click="$emit('click', item)"
          class="
            flex flex-row
            items-center
            py-1
            px-4
            text-sm text-gray-100
            hover:text-gray-600
            bg-green-600
            hover:bg-green-300
            rounded-xl
            focus:outline-none
          "
        >
          <svg-info class="w-3 h-3"></svg-info>
          <div class="px-1">Back to list</div>
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
  min-width: 120px;
}
</style>
