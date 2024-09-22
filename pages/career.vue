<template lang="pug">
.careers
  .wrap
    PageHeading(title="Careers")/
    Career(
      name="Experian"
      jobTitle="Software Developer"
      year="July 2021 - Current"
      imgSrc="experian.jpg"
      :stacks="stackDetailsMapper(['csharp', 'azure', 'dotnet', 'python', 'angular', 'react', 'databricks'])"
    )
      p
        | I joined Experian shortly after I graduated in July 2021 as an #[span associate developer].
        | I joined a team that specifically manages the #[span SaaS] infrastructure in my department which
        | I am glad I did. Working with the team is so much fun and exciting, where we get to
        | tackle challenging issues together as a team and learn new things along the way.
      p
        | I am responsible for implementing features and fixing bugs in our microservice components
        | that are implemented in #[span C#] and #[span .NET]. Asides, I am also responsible for handling any change
        | request in our front-end portals written in #[span Angular], #[span React] and #[span Mvc.Net].
      p
        | Along the way, I hosted numerous discussions, task breakdowns and groomings with the
        | team. The most evident achievement I get is the #[span promotion] from associate developer to
        | developer and I am grateful for that. I am thankful for the help and collaboration
        | I received over the years from my awesome team who always got my back when I made a
        | mistake.
      p
        | I learned to be #[span optimistic] when approaching a problem. There is always a solution
        | to the problem, and we are obliged to find it out instead of dismissing it right away. Another
        | notable takeaway is to #[span communicate well] with the team regarding any decision made and be
        | transparent about it. Sometimes other people may have a better solution that we might not
        | think of. I also learned how to properly #[span debug] my code in Visual Studio and write effective
        | #[span unit tests] using the BDD concept. I was able to wrap my head around the concept of
        | #[span microservices] as well.

    Career(
      name="Soft-Skills"
      jobTitle="Internship"
      year="Oct 2020 - Jan 2021"
      imgSrc="soft-skills.jpg"
      :stacks="stackDetailsMapper(['vue', 'vuetify', 'node', 'typescript', 'figma'])"
    )
      p
        | As a final year student, I had my internship at a small but impactful local software firm
        | named Soft-Skills Sdn Bhd at around October 2020. My internship spans for only a short 13
        | weeks or 3 months and subsequently, I returned to the university to complete my final semester
        | in early January the year after. I am thankful to be able to seize the opportunity to
        | work in the company as the country was suffering from a terrible recession due to the
        | pandemic lockdowns across the nation.
      p
        | As a clueless kid venturing into the software industry for the first time, I am grateful
        | that I was assigned to Jack, an amiable senior to be my mentor for my momentary employment
        | here. During the first few weeks of my job, I was given the time to learn and understand
        | the essence of #[span UI/UX] and #[span design] in general, with interactive exercises and good reads
        | curated by my mentor in hopes to consolidate my understanding and be able to contribute
        | to the project that I will be picking up soon. Besides that, I was gifted a book entitled
        | #[a(href="https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things") "The Designs of Everyday Things"] by Don Norman as well as an E-book named #[a(href="https://www.refactoringui.com/") "Refactoring UI"]
        | by Adam Wathan and Steve Schoger, the creators of Tailwind CSS to supplement my learning.
      p
        | I was in charge of #[span designing] and #[span implementing] a whole new web UI for a backend system and
        | thus I have learned about creating #[span wireframes] with #[span Figma], making API calls with #[span Postman] and
        | implementing the interface with the company's #[span Vue.js] baseline. I was exposed to Trello for
        | keeping track of my task and was asked to utilize it to jot down notes, gather useful
        | resources and ask questions on the board. Before I left, I gave a presentation to the team
        | that wraps up the things I've done for the past 13 weeks. 
      p
        | In hindsight, I realized that my #[span attitude] back then had left a lot to be desired as I tend
        | to disregard things that seemed "impossible" to accomplish instead of making more research
        | and finding alternatives. "No, this can't be done", and "I don't think this is possible" was
        | some of my mantra back then and I am guilty of that. The thing is, I thought my attitude
        | was satisfying and I did everything great back then but only dawned on me years later that
        | I had such a dismal mentality. Maybe this is due to the "undergrads mindset" that I was plagued by.
      p
        | All and all, I would like to express my gratitude towards Soft-Skills for offering a
        | position that exposes me to what the real working environment is like in the software
        | industry. I would also like to show my gratitude towards my mentor, Jack for having the
        | patience of the saint for guiding an unbearably imprudent child over his internship.
    Socials/
</template>

<script lang="ts">
import Vue from 'vue'
import { stackDetailsMapper } from '@/data/utils'

export default Vue.extend({
  head: () => ({
    title: 'Career - Shaun Chong',
  }),
  layout: 'detailPage',
  methods: { stackDetailsMapper },
})
</script>

<style lang="sass" scoped>
.careers
  padding: 50px 0
</style>
