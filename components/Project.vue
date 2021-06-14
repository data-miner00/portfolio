<template lang="pug">
  .project
    .project__title 
      h2 {{ name }}
    .project__subtitle
      h4 {{ type }} ({{ year }})

    .project__wrap
      .project__wrap__img
        div
          img(:src="require(`../assets/images/${imgSrc}`)")
      .project__wrap__content
        .project__wrap__content__details
          slot
            p
              | Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eveniet
              | quod nostrum dolore ipsam blanditiis repellendus cum maiores facilis,
              | laudantium accusantium quasi perferendis. Facilis minima eligendi
              | cupiditate ipsum similique commodi!
        .project__wrap__content__tech
          .title
            h3 Tech Stacks
          .wrap
            .item(
              v-for="(tech, index) in stacks"
              :key="index"
            )
              .item__img
                figure
                  img(:src="`/logos/${tech.imgSrc}`")
              .item__name {{ tech.name }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: String,
    type: String,
    year: Number,
    imgSrc: String,
    stacks: Array,
  },
})
</script>

<style lang="sass" scoped>
.project
  padding: 20px 0 25px
  &__title
    padding: 0 5%
  &__subtitle
    padding: 0 5%
    h4
      font-weight: normal
      color: gray
  &__wrap
    padding-top: 10px
    &__img
      padding: 0 5%
      div
        width: 100%
        height: 140px
        padding-top: 66.67%
        position: relative
        overflow: hidden
        img
          position: absolute
          top: 0
          width: 100%
    &__content
      padding: 0 5%
      &__details
        p
          margin: 20px 0 25px
      &__tech
        .title
          margin-bottom: 20px
        .wrap
          display: flex
          flex-wrap: wrap
          width: 80%
          margin: 0 auto
          justify-content: center
          .item
            // padding: 12px
            height: 88px
            width: 105px
            // background: purple
            // border: 1px solid #eee
            text-align: center
            &__img
              figure
                height: 42px
                img

                  height: 42px
            &__name
              padding: 5px 0
              font-size: 14px
</style>
