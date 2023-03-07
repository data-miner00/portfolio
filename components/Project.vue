<template lang="pug">
.project
  .project__title 
    h2 {{ name }}
  .project__subtitle
    h4 {{ type }} ({{ year }})

  .project__wrap
    .project__wrap__left
      .project__wrap__left__img
        img(:src="require(`../assets/images/${imgSrc}`)")
      .project__wrap__left__links
        p Links
        div
          a(:href="`https://www.github.com/data-miner00/${gitHubRepo}`" target="_blank" rel="noreferrer noopener") View Repository #[span ↝]
          a(v-if="websiteUrl" :href="websiteUrl" target="_blank" rel="noreferrer noopener") View Website #[span ↝]
    .project__wrap__content
      .project__wrap__content__details
        span.project__wrap__content__details__generated(v-if="generatedFrom") ⤿ Generated from #[a(:href="`#${generatedFromId}`") {{ generatedFrom }}]
        slot
          p
            | Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eveniet
            | quod nostrum dolore ipsam blanditiis repellendus cum maiores facilis,
            | laudantium accusantium quasi perferendis. Facilis minima eligendi
            | cupiditate ipsum similique commodi!
      .project__wrap__content__tech
        .title
          h3 Technology
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
    id: String,
    name: String,
    type: String,
    year: String,
    imgSrc: String,
    stacks: Array,
    gitHubRepo: {
      type: String,
      default: 'data-miner00',
    },
    websiteUrl: String,
    generatedFrom: String,
    generatedFromId: String,
  },
})
</script>

<style lang="sass" scoped>
.project
  padding: 0 0 75px

  &__title
    padding: 0 5%
  &__subtitle
    padding: 0 5%
    h4
      font-weight: normal
      color: gray
  &__wrap
    padding-top: 10px
    &__left
      padding: 0 5%
      &__img
        width: 100%
        height: 140px
        padding-top: 66.67%
        position: relative
        overflow: hidden
        img
          position: absolute
          top: 0
          width: 100%
      &__links
        p
          font-weight: 600
          margin-bottom: 10px
        div
          display: flex
          flex-wrap: wrap
          a
            font-size: 14px
            display: block
            position: relative
            margin-right: 10px
            color: #888
            &::after
              content: ''
              position: absolute
              left: 0
              bottom: -4px
              height: 2px
              width: 0
              background: #888
              border-radius: 3px
              transition: width .2s ease
            &:hover
              color: #0F1419
              &::after
                width: 100%
                background: #0F1419
    &__content
      padding: 0 5%
      &__details
        &__generated
          font-size: 12px
          color: #666
          a
            font-weight: 600
            color: #333
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
            flex-grow: 1
            flex-shrink: 1
            height: 88px
            width: 105px
            display: flex
            flex-direction: column
            justify-content: center
            text-align: center
            &__img
              figure
                height: 42px
                img

                  height: 42px
            &__name
              padding: 5px 0
              font-size: 14px

@media screen and (min-width: 620px)
  .project
    &__wrap
      display: grid
      grid-template-columns: 2fr 3fr
      &__left__links
        padding-left: 30px

@media screen and (min-width: 1024px)
  .project
    width: 1025px
    margin: 0 auto
</style>
