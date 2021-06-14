<template lang="pug">
  .socials
    a.socials__social(href="https://www.facebook.com/sysdate" target="_blank")
      fa(:icon="faFacebook")
    a.socials__social(href="https://www.linkedin.com/in/chong-mum-khong-343b3b1b0/" target="_blank")
      fa(:icon="faGithub")
    a.socials__social(href="https://github.com/data-miner00" target="_blank")
      fa(:icon="faLinkedin")
    a.socials__social(href="https://twitter.com/Has66771004" target="_blank")
      fa(:icon="faTwitter")
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
    faFacebook() {
      return faFacebook
    },
    faGithub() {
      return faGithub
    },
    faLinkedin() {
      return faLinkedin
    },
    faTwitter() {
      return faTwitter
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
    display: block

@media screen and (min-width: 960px)
  .socials
    &__social

      transition: color .4s
      &:hover
        color: brown
</style>
