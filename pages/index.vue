<template>
  <div class="home">
    <div class="home__side">
      <div class="home__logo">
        <img
          class="home__logo__img"
          src="~/assets/images/ck.svg"
          alt="CK Logo"
        />
      </div>
      <div class="wrapper">
        <div class="home__links">
          <div class="home__links__link active">hello</div>
          <nuxt-link to="/"
            ><div class="home__links__link">view my profile</div></nuxt-link
          >
          <nuxt-link to="/"
            ><div class="home__links__link">things i do</div></nuxt-link
          >
          <nuxt-link to="/"
            ><div class="home__links__link">get in touch</div></nuxt-link
          >
          <nuxt-link to="/"
            ><div class="home__links__link">testimonial</div></nuxt-link
          >
        </div>
        <div class="home__footer">
          <div class="home__footer__socials">
            <div class="home__footer__socials__social">
              <fa :icon="faFacebookF" />
            </div>
            <div class="home__footer__socials__social">
              <fa :icon="faLinkedinIn" />
            </div>
            <div class="home__footer__socials__social">
              <fa :icon="faGithubAlt" />
            </div>
            <div class="home__footer__socials__social">
              <fa :icon="faTwitter" />
            </div>
          </div>
          <div class="home__footer__craft">
            crafted with <span>love</span> by terrence.
          </div>
        </div>
      </div>
    </div>
    <div class="home__illustration"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  faFacebookF,
  faGithubAlt,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

export default Vue.extend({
  head: () => ({
    title: "Mum Khong's Personal Portfolio",
    meta: [],
  }),
  computed: {
    faFacebookF() {
      return faFacebookF
    },
    faGithubAlt() {
      return faGithubAlt
    },
    faLinkedinIn() {
      return faLinkedinIn
    },
    faTwitter() {
      return faTwitter
    },
  },
})
</script>

<style lang="sass" scoped>
.home
  height: 100vh

  .wrapper
    padding-top: 50px
    padding-left: 20%
    display: flex
    flex-direction: column
    justify-content: space-between
    height: calc(100vh - 70px)

  &__logo
    height: 70px
    display: grid
    place-items: center
    border-bottom: 1px solid #eee
    &__img
      width: 55px
      display: block

  &__links
    display: flex
    flex-direction: column
    row-gap: 20px
    color: gray

    &__link
      &.active
        color: black

  &__footer
    padding: 20px 0

    &__socials
      display: flex
      justify-content: space-between
      width: 200px
      margin-bottom: 20px

    &__craft
      span
        color: pink

@media screen and (min-width: 620px)
  .home
    display: grid
    grid-template-columns: 230px 1fr

    .wrapper
      padding-top: 0
      height: calc(100vh - 157.59px)

    &__logo
      border-bottom: none
      place-items: left
      padding-left: 20%
      padding-top: 50px
      padding-bottom: 50px
      height: fit-content
      &__img
        width: 75px

    &__illustration
      height: 100%
      background: #eee

    &__footer
      &__socials
        width: 150px

@media screen and (min-width: 960px)
  .home
    grid-template-columns: 350px 1fr
</style>
