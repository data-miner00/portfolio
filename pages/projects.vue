<template>
  <div class="projects">
    <div class="wrap">
      <div class="projects__label">
        <h1>My projects</h1>
      </div>
      <Project
        name="E-learning Platform"
        type="Full-stack Web Application"
        :year="2021"
        imgSrc="temp.jpg"
        :stacks="stacks[0]"
      >
        <p>
          E-learning Platform for Distanced Collaborative Coding Assignments is
          a web-application aimed to provide a universal platform for students
          and lecturers to <span>interact</span> with each other effortlessly
          for <span>coding-based assignments</span>. This is the final year
          project of my studies at my university.
        </p>
        <p>
          The <span>project proposal</span> was made to outline and review all
          the requirements, technology, workflow and design during the initial
          planning phase that tooks about three months and the actual
          implementation of the system takes another three months to complete.
          Although the entire process of developing this system is arduous and
          tiresome, I am flattered that I am rewarded an A- grade for this.
        </p>
        <p>
          The core feature of this application is the
          <span>concurrent code editor</span> that allows students to program
          together in a group in real-time. It also provides a
          <span>chatting system</span> for the students to discuss by interact
          with each other with text messages. Besides, this application has a
          very strict rule on governing the relationships between different
          entities such as one student can join many course, one course can have
          many assignments etc. This is extremely important but the most
          cumbersome part to implement.
        </p>
      </Project>
      <Project
        name="Ignite de Spark"
        type="Webpage"
        :year="2019"
        imgSrc="temp.jpg"
        :stacks="stacks[1]"
      >
        <p>
          Ignite de Spark is the <span>last event</span> that committees of my
          society of my batch before we retire and this website was made to
          <span>promote the event</span> by providing every single bits of
          details of the event and a call for action to a Google form for
          registration. This website was the
          <span>first-ever project</span> that I've done apart from assignments.
          Hence, the quality are substandard but it was a resounding success for
          me back then. Unfortunately, due to the unforeseen outbreak of
          pandemic in our country, the event was canceled and the website was
          never been to light.
        </p>
      </Project>
      <Project
        name="Personal Blog"
        type="Webpage"
        :year="2021"
        imgSrc="temp.jpg"
        :stacks="stacks[2]"
      >
        <p>
          I have started out building the first blogging website that I can
          write and post at any time I wish. The incentive is to broaden my
          horizon into topics that are not related to technology while revamping
          my writing skills in various languages. I have yet to post any useful
          article at the moment but will do it soon.
        </p>
      </Project>
      <Project
        name="Personal Portfolio"
        type="Webpage"
        :year="2021"
        imgSrc="temp.jpg"
        :stacks="stacks[3]"
      >
        <p>
          This project is to build my <span>portfolio website</span>, which is
          here, where I will be sharing information about me, such as projects
          and education, basically an elaborate version of the resume. The
          project is relatively simple but I have still yet to complete it as
          the crux of this project is not implementation but design. Designing a
          good website really is tough for me who does not have a multimedia
          background but I will work through no matter what it takes.
        </p>
      </Project>
    </div>
    <Socials />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: () => ({
    title: 'Projects',
  }),
  layout: 'detailPage',
  computed: {
    stacks() {
      return [
        [
          {
            name: 'Vue.js',
            imgSrc: 'vue.png',
          },
          {
            name: 'Vuetify',
            imgSrc: 'vuetify.png',
          },
          {
            name: 'Sass',
            imgSrc: 'sass.png',
          },
          {
            name: 'Firebase',
            imgSrc: 'firebase.png',
          },
          {
            name: 'Socket.io',
            imgSrc: 'socket.png',
          },
          {
            name: 'TypeScript',
            imgSrc: 'typescript.png',
          },
          {
            name: 'Node.js',
            imgSrc: 'node.png',
          },
        ],
        [
          {
            name: 'HTML',
            imgSrc: 'html.png',
          },
          {
            name: 'CSS',
            imgSrc: 'css.png',
          },
          {
            name: 'JavaScript',
            imgSrc: 'javascript.png',
          },
        ],
        [
          {
            name: 'Next.js',
            imgSrc: 'next.png',
          },
          {
            name: 'React.js',
            imgSrc: 'react.webp',
          },
          {
            name: 'Sass',
            imgSrc: 'sass.png',
          },
          {
            name: 'Contentful',
            imgSrc: 'contentful.png',
          },
        ],
        [
          {
            name: 'Nuxt.js',
            imgSrc: 'nuxt.svg',
          },
          {
            name: 'Vue.js',
            imgSrc: 'vue.png',
          },
          {
            name: 'Sass',
            imgSrc: 'sass.png',
          },
          {
            name: 'TypeScript',
            imgSrc: 'typescript.png',
          },
        ],
      ]
    },
  },
})
</script>

<style lang="sass" scoped>
.projects
  padding: 50px 0
  &__label
    text-align: center
    h1
      font-style: italic
      font-size: 1.25em
      font-weight: normal
</style>
