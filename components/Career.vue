<template lang="pug">
.career
  .career__img
    img(:src="require(`../assets/images/${imgSrc}`)")
  .career__wrap
    .career__wrap__left
      h2 {{ name }}
      h4 {{ jobTitle }} ({{ year }})
      p.year 
      .career__wrap__left__tech 
        .career__wrap__left__tech__item(v-for="tech of stacks")
          img(:src="`/logos/${tech.imgSrc}`")
    .career__wrap__right
      slot
        p
          | Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eveniet
          | quod nostrum dolore ipsam blanditiis repellendus cum maiores facilis,
          | laudantium accusantium quasi perferendis. Facilis minima eligendi
          | cupiditate ipsum similique commodi!

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: String,
    jobTitle: String,
    year: String,
    imgSrc: String,
    stacks: Array,
  },
})
</script>

<style lang="sass" scoped>
.career
  padding: 0 0 75px

  &__img
    padding-bottom: 20px
    img
      width: 100%

  &__wrap
    &__left
      padding: 0 5%
      h4
        font-weight: normal
        color: gray
        margin-bottom: 16px

      &__tech
        display: flex
        flex-wrap: wrap
        gap: 16px
        margin-bottom: 16px
        &__item
          height: 30px
          width: 30px
          img
            width: 100%

    &__right
      padding: 0 5%
      p
        margin: 20px 0 25px

        a
          text-decoration: underline

@media screen and (min-width: 1024px)
  .career
    width: 1025px
    margin: 0 auto
</style>
