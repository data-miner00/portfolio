<template>
  <div class="profile">
    <div class="name-card-wrap">
      <div class="profile__name-card">
        <div class="label">About Me</div>
        <div class="profile__name-card__card">
          <div class="profile__name-card__card__avatar">
            <img src="~/assets/images/my-cute-photo.jpg" alt="my avatar" />
          </div>
          <div class="profile__name-card__card__name">
            Chong Mum Khong<br />(Shaun)
          </div>
          <div class="divider"></div>
          <div class="profile__name-card__card__pos">Software Engineer</div>
        </div>
      </div>
    </div>
    <section class="profile__about">
      <div class="title">
        <h1>About Me</h1>
      </div>
      <div class="profile__about__para content">
        <p>
          Hello. I'm Mum Khong. I am a Software Engineering Freshgrade from
          Universiti Tunku Abdul Rahman (UTAR). I am 23 years old and I came
          from Melaka. Nice to meet you!
        </p>
      </div>
    </section>
    <section class="profile__education">
      <div class="wrap">
        <div class="title">
          <h1>Education</h1>
        </div>

        <div class="profile__education__content content">
          <EduCard
            v-for="(education, index) in educations"
            :key="index"
            :color="education.color"
            :level="education.level"
            :field="education.field"
            :school="education.school"
            :result="education.result"
            :year="education.year"
          />
        </div>
      </div>
      <div class="profile__education__illus-img"></div>
    </section>
    <section class="profile__technical">
      <div class="title">
        <h1>Tech Skills</h1>
      </div>
      <div class="subtitle">The technologies that I use often.</div>
      <div class="profile__technical__skills content">
        <TechCard
          v-for="(tech, index) in techs"
          :key="index"
          :name="tech.name"
          :logoFile="tech.logoFile"
        />
      </div>
    </section>
    <section class="profile__goals">
      <div class="title">
        <h1>My Goals</h1>
      </div>
      <div class="profile__goals__goals content">
        <p>
          Being grateful to the amazing technologies built by wonderful
          developers out there, I would like to contribute to open-source
          projects when I am capable of as a way of repaying to the community.
          It is a social responsibility.
        </p>
      </div>
    </section>
    <div class="profile__check-out">
      <div class="profile__check-out__label">Checkout More of My Details!</div>
      <div class="profile__check-out__actions">
        <div class="profile__check-out__actions__btn btn--primary">Resume</div>
        <div class="profile__check-out__actions__btn btn--secondary">
          Projects
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'detailPage',
  head: () => ({
    title: 'Profile | Terrence',
    meta: [],
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
//
.profile
  padding: 20px 0 0

  section
    margin-bottom: 40px
    padding-left: calc(20px + 5%)
    padding-right: 5%

  .content
    margin-top: 20px

  .subtitle
    color: gray
    font-size: 0.6em

  .name-card-wrap
    padding: 0 5%
  &__name-card
    padding: 40px
    text-align: center
    background: #f4ece6
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2)
    border-radius: 5px
    margin-bottom: 40px
    .label
      font-style: italic
      font-size: 0.8em
    &__card
      margin-top: 20px
      &__avatar
        border-radius: 50%
        height: 70px
        width: 70px
        margin: 0 auto
        overflow: hidden
        img
          width: 70px

      &__name
        margin-top: 20px
        font-weight: 700

      .divider
        width: 30%
        height: 3px
        margin: 30px auto
        background: gray
  &__about
    &__para
      // font-size: .85em
      line-height: 1.625

  &__technical
    padding-right: calc(20px + 5%)
    &__skills
      display: grid
      grid-template-columns: 50% 50%
      row-gap: 20px
  &__goals
    &__goals
      line-height: 1.625

  &__check-out
    background: #e6dace
    padding: 50px
    margin-bottom: 0
    &__label
      font-size: 1.5em
      color: white

    &__actions
      display: flex
      margin-top: 10px
      &__btn
        border-radius: 250px
        padding: 6px 20px
        &.btn--primary
          background: brown
          color: white
        &.btn--secondary
          margin-left: 10px
          background: #e6dace
          border: 2px solid black

@media screen and (min-width: 420px)
  .profile
    &__technical
      &__skills
        grid-template-columns: 33% 33% 33%

@media screen and (min-width: 620px)
  .profile
    .name-card-wrap
      padding: 0 30%

    section
      padding: 0 20%
      margin-bottom: 80px

    p
      text-indent: 40px

    &__check-out
      padding: 60px 20%

@media screen and (min-width: 960px)
  .profile
    .name-card-wrap
      padding: 0 36%

    // Adding an illustration image for education section
    &__education
      display: flex
      .wrap
        margin-right: 80px
        width: fit-content
      &__content

        width: fit-content
      &__illus-img
        height: 250px
        width: 300px
        background-image: url(~assets/images/podium.jpg)
        background-size: cover
        background-repeat: no-repeat
        background-position: center

//   section
//     margin-bottom: 50px

//   &__label
//     text-align: center
//     font-size: 0.75em
//     color: gray
//   &__intro

//     &__hi
//       font-size: 3em
//       font-weight: 700

//     &__name
//       span
//         color: #BAA5FF
//         font-weight: 600

//     &__im
//       margin-top: 50px
//       font-size: 2.5em
//       font-weight: 600
//       text-align: right
//     &__from
//       text-align: right
//       font-size: 0.8em
//       span
//         color: #0FA3B1

//     &__ih
//       margin-top: 50px
//       font-size: 2.5em
//       font-weight: 700
//     &__studied
//       font-size: .7em
//       img
//         width: 40px

//       span

        // font-weight: 500
        // font-style: italic


    // &__avatar-sec
    //   margin-top: 100px
    //   background: #B2967D
    //   min-height: 200px
    //   padding: 40px 20px
    //   border-radius: 10px


    //   &__label
    //     color: #eee
    //     text-align: center

    //   &__avatar
    //     width: 100px
    //     height: 100px
    //     border-radius: 50%
    //     margin: 0 auto
    //     overflow: hidden
    //     img
    //       width: 100px



    // .label
    //   color: #0fa3b1
    //   font-weight: 800

    // &__content


    // &__avatar
    //   width: fit-content
    //   // border-radius: 250px
    //   overflow: hidden
    //   margin: 0 auto

    //   &__img
    //     width: 100px
</style>
