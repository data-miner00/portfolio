<template lang="pug">
  .edu-card
    .row
      .box(:style="{'background-color': color}")
      .edu-card__level-field {{ level }} / {{ field }}
    
    .edu-card__school {{ school }}
    .edu-card__year {{ year }} ({{ result }})
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    level: String,
    field: String,
    school: String,
    year: String,
    result: String,
    color: {
      type: String,
      default: '#c4c4c4',
    },
  },
})
</script>

<style lang="sass" scoped>
.edu-card

  margin-bottom: 20px
  .row
    display: flex
    align-items: center
    .box
      height: 15px
      width: 15px
      margin-right: 15px
  &__level-field
    font-size: .7em
    font-weight: 600

  &__school
    font-size: 1em
    font-weight: 700

  &__year
    font-size: .7em
    color: gray
</style>
