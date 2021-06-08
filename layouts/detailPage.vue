<template lang="pug">
  .detailPage
    Header/
    Nuxt/
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'detailPage',
})
</script>

<style lang="sass" scoped>
@import "../assets/sass/global"

.detailPage
  width: 100vw
  overflow-x: hidden
  min-height: 100vh
</style>
