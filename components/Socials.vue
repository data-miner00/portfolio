<template lang="pug">
  .socials
    .socials__social
      fa(:icon="faFacebook")
    .socials__social
      fa(:icon="faGithub")
    .socials__social
      fa(:icon="faLinkedin")
    .socials__social
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
  margin: 0 auto

@media screen and (min-width: 960px)
  .socials
    &__social
      transition: color .4s
      &:hover
        color: brown
</style>
