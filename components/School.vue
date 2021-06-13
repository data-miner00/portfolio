<template>
  <div class="school">
    <div class="school__img">
      <div>
        <img :src="require(`../assets/images/${imgSrc}`)" :alt="name" />
      </div>
    </div>
    <div class="school__content">
      <div class="school__content__name">
        <h2>
          {{ name }} <span>({{ year }})</span>
        </h2>
      </div>

      <div class="school__content__field">{{ scholar }} — {{ field }}</div>
      <div class="school__content__result">{{ result }}</div>

      <!-- Slot for paragraphs -->
      <!-- Default placeholder -->
      <slot>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eveniet
          quod nostrum dolore ipsam blanditiis repellendus cum maiores facilis,
          laudantium accusantium quasi perferendis. Facilis minima eligendi
          cupiditate ipsum similique commodi!
        </p>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: String,
    year: String,
    scholar: String,
    field: String,
    result: String,
    imgSrc: String,
  },
})
</script>

<style lang="sass" scoped>
.school
  padding-bottom: 50px
  &__img
    padding: 0 5%
    background: #eee
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
    margin-top: 10px
    p
      margin: 20px 0 25px
    &__name
      h2
        font-size: 1.15em
        span
          color: gray
          font-size: .85em
          font-weight: normal
    &__field
      font-size: 0.75em
    &__result
      position: relative
      width: fit-content
      &::before
        content: ''
        position: absolute
        bottom: -6px
        left: 5px
        right: -5px
        height: 5px
        background: brown

@media screen and (min-width: 620px)
  .school
    display: grid
    grid-template-columns: 40% 60%

    &__content
      &__field
        font-size: .85em

@media screen and (min-width: 1024px)
  .school
    width: 1024px
    margin: 0 auto
</style>
