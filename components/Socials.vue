<template lang="pug">
.socials
  a.socials__social(v-for="(social, index) in socials" :key="index" :href="social.href" target="_blank" :title="social.title")
    fa(:icon="social.icon")
</template>

<script lang="ts">
import Vue from 'vue'

import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

export default Vue.extend({
  computed: {
    socials() {
      return [
        {
          href: 'https://www.facebook.com/sysdate',
          icon: faFacebook,
          title: 'Facebook profile',
        },
        {
          href: 'https://www.linkedin.com/in/chong-mum-khong-343b3b1b0/',
          icon: faLinkedin,
          title: 'LinkedIn profile',
        },
        {
          href: 'https://github.com/data-miner00',
          icon: faGithub,
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
.socials
  display: flex
  font-size: 1.65em
  justify-content: space-between
  width: 170px
  margin: 40px auto 0
  color: gray
  &__social
    display: flex
    svg
      width: 25px

@media screen and (min-width: 960px)
  .socials
    &__social

      transition: color .4s
      &:hover
        color: brown
</style>
