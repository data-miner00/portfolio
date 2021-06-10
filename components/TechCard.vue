<template lang="pug">
  .tech-card
    .tech-card__logo
      //- img(:src="src")
      img(:src="src")
    .tech-card__name {{ name }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: String,
    logoFile: String,
  },
  computed: {
    src() {
      return `/logos/${this.logoFile}`
    },
  },
})
</script>

<style lang="sass" scoped>
.tech-card
  width: fit-content
  margin: 0 auto
  &__logo
    margin: 0 auto
    width: fit-content
    img
      height: 50px
  &__name
    font-size: 0.7em
    width: fit-content
    margin: 5px auto 0
    color: gray
</style>
