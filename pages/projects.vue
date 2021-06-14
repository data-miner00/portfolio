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
          and lecturers to interact with each other effortlessly for
          coding-based assignments. This is the final year project of my studies
          at my university.
        </p>
        <p>
          The project proposal was made to outline and review all the
          requirements, technology, workflow and design during the initial
          planning phase that tooks about three months and the actual
          implementation of the system takes another three months to complete.
          Although the entire process of developing this system is arduous and
          tiresome, I am flattered that I am rewarded an A- grade for this.
        </p>
        <p>
          The core feature of this application is the concurrent code editor
          that allows students to program together in a group in real-time. It
          also provides a chatting system for the students to discuss by
          interact with each other with text messages. Besides, this application
          has a very strict rule on governing the relationships between
          different entities such as one student can join many course, one
          course can have many assignments etc. This is extremely important but
          the most cumbersome part to implement.
        </p>
      </Project>
      <Project
        name="Ignite de Spark"
        type="Webpage"
        :year="2019"
        imgSrc="temp.jpg"
        :stacks="stacks[1]"
      >
      </Project>
      <Project
        name="Personal Blog"
        type="Webpage"
        :year="2021"
        imgSrc="temp.jpg"
        :stacks="stacks[2]"
      >
      </Project>
      <Project
        name="Personal Portfolio"
        type="Webpage"
        :year="2021"
        imgSrc="temp.jpg"
        :stacks="stacks[3]"
      >
      </Project>
    </div>
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
    padding-bottom: 40px
    h1
      font-style: italic
      font-size: 1.25em
      font-weight: normal
</style>
