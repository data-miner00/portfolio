<template lang="pug">
  .profile
    .wrap
      .profile__left-section
        .profile__left-section__avatar
          img(src="~/assets/images/avatar.jpg" alt="My avatar")/
      
      .profile__right-section
        .profile__right-section__hello
          h1 Pleasure to meet you
        .profile__right-section__content
          p
            | I'm Shaun, a mid-level #[span software engineer] currently
            | working at #[a(href="https://www.experian.com.my/") Experian Malaysia]
            | as a full-stack engineer.
          p
            | A little bit of my demographics, I'm {{ age }} years old and will be
            | turning {{ age + 1 }} in the upcoming year. I come from Melaka, a
            | pristine state filled with joy in Malaysia.
          p
            | I have #[span never, ever] in my life been exposed to
            | programming and coding-related stuff until I opted for a Software
            | Engineering Degree course in my university, which is Universiti
            | Tunku Abdul Rahman, located in the suburbs of Selangor. I was 20
            | years old back then, which is relatively #[span "old"] to join
            | the tech world in my opinion.
          p
            | During my first year of my university life, I was
            | #[span not doing well] in academics as I was not accustomed to
            | the university lifestyle and the programming courses were just pure
            | alienating to me. Fortunately, my uni life took a
            | #[span critical turn] during my second year of studies where I
            | met many fabulous friends who are knowledgeable in all kinds of
            | topics. My academic performance showed signs of improvement as I got
            | my first A grade at that time.
          p
            | Sooner or later, I realised that programming is actually pretty
            | #[span exciting] and #[span enjoyable]. Every facet of
            | programming that was intimidating to me at first is now making
            | perfect sense to me. Topics such as data structures, machine
            | learning, functional programming, Git etc. are extremely tough for a
            | rookie. Thankfully, after started working with them, I am feeling
            | more and more #[span comfortable] about them.
          p
            | I am an #[span inquisitive] person. Whenever I stumble upon
            | something that I am not fond of, for things like technology, math,
            | science, languages... basically everything, I will Google them until
            | I get a rough idea of what it is. I will dive deeper if I found the
            | topics intriguing.
          p
            | During my free time, I will constantly
            | #[span give myself a project] to work on, using the programming
            | skills that I have amassed to solve a problem that I am facing while
            | consolidating my programming skills with different technologies.
          p
            | Technology aside, I indulge in reading articles and short stories as
            | a way to broaden my horizons and improve my English writing skills.
            | Moreover, I learn and study #[span Japanese] and
            | #[span Korean] language on and off but I am planning to
            | participate in a dedicated class soon to master them once and for
            | all.
    Socials/
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'detailPage',
  head: () => ({
    title: 'About - Shaun Chong',
  }),
  computed: {
    age() {
      const today = new Date()
      const bday = new Date('1998-03-04')

      const diff = today.getTime() - bday.getTime()
      const YEAR = 60 * 60 * 24 * 365 * 1000

      return ~~(diff / YEAR)
    },
  },
})
</script>

<style lang="sass" scoped>
.profile
  padding: 50px 0
  .wrap
    display: flex
    flex-direction: column

  &__left-section
    padding: 0 1%

    &__avatar
      width: 250px
      height: 250px
      overflow: hidden
      border-radius: 50%
      margin: 0 auto
      img
        width: 280px
        object-fit: cover
  &__right-section
    padding: 50px 5%
    &__hello
      margin-bottom: 25px
      h1
        font-size: 1.25em

    &__content
      p
        margin: 20px 0 25px
        span
          font-weight: bold
          color: brown
        a
          text-decoration: underline
          font-weight: bold

@media screen and (min-width: 620px)
  .profile
    .wrap
      flex-direction: row
    &__left-section
      padding-top: 50px
      padding-left: 5%
      &__avatar
        width: 200px
        height: 200px

@media screen and (min-width: 960px)
  .profile

    &__left-section

      &__avatar
        width: 260px
        height: 260px

@media screen and (min-width: 1024px)
  .profile
    .wrap
      width: 1024px
      margin: 0 auto
</style>
