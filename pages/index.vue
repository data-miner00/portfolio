<template>
  <div class="home">
    <div class="home__side">
      <div class="home__logo">
        <img
          class="home__logo__img"
          src="~/assets/images/ck.svg"
          alt="Logo of the site that shows 'CK'"
        />
      </div>
      <div class="wrapper">
        <div class="home__links">
          <div class="home__links__link active">hello</div>
          <nuxt-link to="/profile">
            <div class="home__links__link">about me</div>
          </nuxt-link>
          <nuxt-link to="/education">
            <div class="home__links__link">schools i go</div>
          </nuxt-link>
          <nuxt-link to="/projects">
            <div class="home__links__link">things i do</div>
          </nuxt-link>
          <nuxt-link to="/career">
            <div class="home__links__link">working</div>
          </nuxt-link>
          <a href="https://notes.mumk.dev" target="_blank">
            <div class="home__links__link">tech</div>
          </a>
          <a href="https://blog.mumk.dev" target="_blank">
            <div class="home__links__link">blog</div>
          </a>
        </div>
        <div class="home__footer">
          <div class="home__footer__socials">
            <a
              v-for="(social, index) in socials"
              :key="index"
              class="home__footer__socials__social"
              :href="social.href"
              target="_blank"
              :title="social.title"
            >
              <fa :icon="social.icon" />
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
    title: 'Shaun Chong',
  }),
  computed: {
    socials() {
      return [
        {
          href: 'https://www.facebook.com/sysdate',
          icon: faFacebookF,
          title: 'Facebook profile',
        },
        {
          href: 'https://www.linkedin.com/in/chong-mum-khong-343b3b1b0/',
          icon: faLinkedinIn,
          title: 'LinkedIn profile',
        },
        {
          href: 'https://github.com/data-miner00',
          icon: faGithubAlt,
          title: 'GitHub profile',
        },
        {
          href: 'https://twitter.com/Has66771004',
          icon: faTwitter,
          title: 'Twitter (X) profile',
        },
      ]
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

        svg
          width: 16px
          height: 16px

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
