<template>
  <div class="profile">
    <div class="wrap">
      <div class="profile__left-section">
        <div class="profile__left-section__avatar">
          <img src="~/assets/images/my-cute-photo.jpg" alt="my avatar" />
        </div>
      </div>

      <div class="profile__right-section">
        <div class="profile__right-section__hello">
          <h1>Pleasure to meet you</h1>
        </div>
        <div class="profile__right-section__content">
          <p>
            I'm Mum Khong(Shaun), a <span>software engineer</span> rookie that
            has just graduated recently. I believe that a good process is the
            part and parcel of a good software.
          </p>
          <p>
            A little bit of my demographics, I'm 23 years old and will be
            turning 24 in the upcoming year. I come from Melaka, a pristine
            state filled with joy in Malaysia.
          </p>
          <p>
            I have <span>never, ever</span> in my life been exposed to
            programming and coding related stuffs until I have opted for a
            Software Engineering Degree course in my university, which is
            Universiti Tunku Abdul Rahman, located at the suburbs of Selangor. I
            was 20 years old back then, which is relatively
            <span>"old"</span> to join the tech world in my opinion.
          </p>
          <p>
            During my first year of my university life, I am
            <span>not doing well</span> in the academics as I am not accustomed
            for university lifestyle and the programming course are just pure
            alienating to me. Fortunately, my uni life took a
            <span>critical turn</span> during my second year of studies wher I
            have met a number of fabulous friends that are knowledgeable in all
            kinds of topic. My academic performance showed signs of improvement
            as I have gotten my first A grade at that time.
          </p>
          <p>
            Sooner or later, I realised that programming is actually pretty
            <span>exciting</span> and <span>exhilirating</span>. Every facet of
            programming that was intimidating me at first are now making sense
            to me gradually. Topics such as data structures, machine learning,
            functional programming, Git etc. are indeed tough at first glance,
            but after started working with them, I am feeling more and more
            <span>comfortable</span> about them.
          </p>
          <p>
            I am an <span>inquisitive</span> person. Whenever I stumble upon
            something that I am not fond of, for things like technology, math,
            science, languages... basically evetyhing, I will be googling them
            until i get the rough idea of what it is, I will dive deeper if I
            found the topics intriguing.
          </p>
          <p>
            During my free time, I will constantly
            <span>give myself a project</span> to work with, using the
            programming skills that I have amassed to solve a problem that I am
            facing and consolidating my programming skills with different
            technologies.
          </p>
          <p>
            Technology asides, I indulge in reading article and short stories as
            a way to broaden up my horizon and improve my English writing
            skills. Moreover, I learn and study about <span>Japanese</span> and
            <span>Korean</span> language once in a while as I am a big fan of
            these beautiful languages.
          </p>
        </div>
      </div>
    </div>

    <Socials />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'detailPage',
  head: () => ({
    title: 'About Me',
  }),
  computed: {
    educations() {
      return [
        {
          color: '#84e35d',
          level: 'Degree',
          field: 'Software Engineering',
          school: 'Universiti Tunku Abdul Rahman',
          result: 'CGPA 3.31',
          year: '2018-2021',
        },
        {
          // color: 'blue',
          level: 'STPM',
          field: 'Physics',
          school: 'SMK Munshi Abdullah',
          result: 'CGPA 3.33',
          year: '2016-2017',
        },
        {
          // color: 'crimson',
          level: 'SPM',
          field: 'Science',
          school: 'SMK Tun Mutahir',
          result: '7A 1B 2C',
          year: '2011-2015',
        },
      ]
    },
    techs() {
      return [
        {
          name: 'Vue.js',
          logoFile: 'vue.png',
        },
        {
          name: 'React.js',
          logoFile: 'react.webp',
        },
        {
          name: 'Node.js',
          logoFile: 'node.png',
        },
        {
          name: 'CSS',
          logoFile: 'css.png',
        },
        {
          name: 'Python',
          logoFile: 'python.png',
        },
        {
          name: 'Java',
          logoFile: 'java.png',
        },
        {
          name: 'C#',
          logoFile: 'csharp.png',
        },
        {
          name: 'TypeScript',
          logoFile: 'typescript.png',
        },
      ]
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
        width: 350px
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

// .profile
//   background: purple
//   padding: 0 20%
//   display: grid
//   grid-template-columns: 35% 65%
//   &__left-section
//     background: black
//     &__avatar
//       width: 225px
//       height: 225px
//       overflow: hidden
//       border-radius: 50%
//       img
//         width: 300px
//         object-fit: cover
</style>
