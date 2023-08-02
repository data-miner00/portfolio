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
          <nuxt-link to="/profile" @click.native="setActive('a')"
            ><div class="home__links__link">about me</div></nuxt-link
          >
          <nuxt-link to="/education" @click.native="setActive('e')"
            ><div class="home__links__link">schools i go</div></nuxt-link
          >
          <nuxt-link to="/projects" @click.native="setActive('p')"
            ><div class="home__links__link">things i do</div></nuxt-link
          >
          <nuxt-link to="/career" @click.native="setActive('c')">
            <div class="home__links__link">working</div>
          </nuxt-link>
        </div>
        <div class="home__footer">
          <div class="home__footer__socials">
            <a
              class="home__footer__socials__social"
              href="https://www.facebook.com/sysdate"
              target="_blank"
            >
              <fa :icon="faFacebookF" />
            </a>
            <a
              class="home__footer__socials__social"
              href="https://www.linkedin.com/in/chong-mum-khong-343b3b1b0/"
              target="_blank"
            >
              <fa :icon="faLinkedinIn" />
            </a>
            <a
              class="home__footer__socials__social"
              href="https://github.com/data-miner00"
              target="_blank"
            >
              <fa :icon="faGithubAlt" />
            </a>
            <a
              class="home__footer__socials__social"
              href="https://twitter.com/Has66771004"
              target="_blank"
            >
              <fa :icon="faTwitter" />
            </a>
          </div>
          <div class="home__footer__craft">crafted by shaun</div>
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
    title: 'Welcome to my Portfolio',
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
  methods: {
    setActive(pageName: string): void {
      this.$store.commit('app/setPage', pageName)
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
      &__social
        display: block
        transition: color .4s
        &:hover
          color: brown

    &__craft
      font-size: 0.75em
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
      background-image: url(~assets/images/background.jpg)
      background-size: cover
      background-position: center
      background-repeat: no-repeat

    &__footer
      &__socials
        width: 150px

@media screen and (min-width: 960px)
  .home
    grid-template-columns: 350px 1fr
    &__footer
      &__craft
        font-size: 1em
</style>
