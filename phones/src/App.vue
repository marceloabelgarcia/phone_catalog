<template>
  <div id="app">
    <div
      class="
        py-4
        flex
        justify-center
        font-light
        text-sm text-yellow-600
        divide-x divide-yellow-600
        border-b border-gray-50
      "
      id="nav"
    >
      <router-link class="px-2" to="/">Home</router-link>
      <router-link class="px-2" to="/phones">Phones</router-link>
    </div>
    <router-view class="" />
  </div>
</template>
