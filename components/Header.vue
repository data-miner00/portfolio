<template lang="pug">
  header.header
    .header__dummy
    .header__logo
      img.header__logo__img(src="~/assets/images/ck.svg")

    .header__burger
      img.header__burger__img(src="~/assets/images/berger.svg")
    .header__nav-links
      .header__nav-links__logo
        img.header__nav-links__logo__img(src="~/assets/images/ck.svg")
      NuxtLink(to="/")
        .header__nav-links__link home
      NuxtLink(to="/profile")
        .header__nav-links__link profile
      NuxtLink(to="/projects")
        .header__nav-links__link projects
      NuxtLink(to="/contact")
        .header__nav-links__link contact
      .header__nav-links__made-by made with ❤ by terrence #[br] &copy; 2021
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  //
})
</script>

<style lang="sass" scoped>
.header
  height: 100px
  border-bottom: 1px solid #eee
  display: flex
  padding: 0 5%
  justify-content: space-between
  align-items: center
  position: relative
  &__dummy
    height: 17px
    width: 27px
  &__logo
    &__img
      width: 55px

  &__nav-links
    position: absolute
    top: 0
    right: 0
    height: 100vh
    width: 200px
    background: #eee
    // transform: translateX(100%)
    display: flex
    flex-direction: column
    transition: transform .4s ease
    padding: 30px 10%
    row-gap: 15px
    text-align: right

    &__logo
      margin-bottom: 15px
      &__img
        width: 55px

    &.pulled-in
      transform: translate(0)

    &__link
      padding: 15px 0

    &__made-by
      font-size: 0.5em
      margin-top: auto


//   &__nav-links
//     width: 350px
//     display: flex
//     justify-content: space-between
</style>
