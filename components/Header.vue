<template lang="pug">
  header.header
    .header__dummy
    .header__logo
      img.header__logo__img(src="~/assets/images/ck.svg")
    .header__burger(@click="openNav")
      img.header__burger__img(src="~/assets/images/berger.svg")
    .header__nav-links(ref="sidebar")
      .header__nav-links__logo(@click="closeNav")
        img.header__nav-links__logo__img(src="~/assets/images/ck.svg")
      NuxtLink(to="/" @click.native="setActive('h')")
        .header__nav-links__link(:class="{'active': isActive('h')}") Home
      NuxtLink(to="/profile" @click.native="setActive('a')")
        .header__nav-links__link(:class="{'active': isActive('a')}") About
      NuxtLink(to="/education" @click.native="setActive('e')")
        .header__nav-links__link(:class="{'active': isActive('e')}") Education
      NuxtLink(to="/projects" @click.native="setActive('p')")
        .header__nav-links__link(:class="{'active': isActive('p')}") Projects
      .header__nav-links__made-by made with ❤ by shaun #[br] &copy; 2021
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    setActive(pageName: string): void {
      this.$store.commit('app/setPage', pageName)
    },
    isActive(pageName: string): boolean {
      return this.selectedPage == pageName
    },
    openNav(): void {
      ;(this.$refs['sidebar'] as HTMLElement).classList.add('pulled-in')
    },
    closeNav(): void {
      ;(this.$refs['sidebar'] as HTMLElement).classList.remove('pulled-in')
    },
  },
  computed: {
    selectedPage() {
      return this.$store.state.app.selectedPage
    },
  },
})
</script>

<style lang="sass" scoped>
.header
  height: 100px
  display: flex
  padding: 0 5%
  justify-content: space-between
  align-items: center
  position: fixed
  background: #fbfaf5
  top: 0
  left: 0
  width: 100vw
  z-index: 999

  &__dummy
    height: 17px
    width: 27px
  &__logo
    &__img
      width: 55px

  &__nav-links
    position: fixed
    top: 0
    right: 0
    height: 100vh
    width: 200px
    background: #fbfaf5
    transform: translateX(100%)
    display: flex
    flex-direction: column
    transition: transform .4s ease
    padding: 30px 10%
    row-gap: 15px
    text-align: right
    border-left: 1px solid #eee
    z-index: 10
    &__logo
      margin-bottom: 15px
      &__img
        width: 55px

    &.pulled-in
      transform: translate(0)

    &__link
      padding: 15px 0
      font-weight: bold

      &.active
        color: brown

    &__made-by
      font-size: 0.5em
      margin-top: auto

@media screen and (min-width: 375px)
  .header
    &__nav-links
      width: 250px

@media screen and (min-width: 620px)
  .header
    &__nav-links
      &__made-by
        font-size: 0.7em

@media screen and (min-width: 960px)
  .header
    width: 100%
    // padding: 0 20%
    &__dummy
      display: none

    &__burger
      display: none

    &__nav-links
      border-left: none
      position: static
      height: fit-content
      width: 350px
      flex-direction: row
      padding: 0
      background: none
      justify-content: space-between
      transform: translate(0)
      transition: none
      &__logo
        display: none
      &__made-by
        display: none
</style>
