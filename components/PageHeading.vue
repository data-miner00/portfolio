<template lang="pug">
  .heading
    .heading__actual(:data-content="title")
      h1 {{ title }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: String,
  },
})
</script>

<style lang="sass" scoped>
.heading
  height: 150px
  display: grid
  place-items: center


  &__actual
    position: relative
    z-index: 0
    &::before
      content: attr(data-content)
      position: absolute
      top: 50%
      left: 50%
      font-size: 3rem
      color: #eee
      transform: translate(-50%, -50%)
      z-index: -1
</style>
