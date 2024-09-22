<template>
  <div class="projects">
    <div class="wrap">
      <PageHeading title="Projects" />
      <Project
        name="Personal Portfolio"
        type="Webpage"
        year="2021, 2023"
        imgSrc="p4.png"
        :stacks="stackDetailsMapper(['nuxt', 'vue', 'sass', 'typescript'])"
        gitHubRepo="portfolio"
        websiteUrl="https://mumk.vercel.app/"
      >
        <p>
          This project is to build my <span>portfolio website</span>, which is
          here, where I will be sharing information about me, such as projects
          and education, basically an elaborate version of the resume. The
          project is relatively simple but the crux is the designing part.
          Designing a good website with mobile responsiveness is really tough
          for me who does not have a multimedia background nor any designing
          experience.
        </p>
      </Project>
      <Project
        name="Personal Blog"
        type="Webpage"
        year="2021-2022"
        imgSrc="p3.png"
        :stacks="
          stackDetailsMapper([
            'next',
            'react',
            'sass',
            'contentful',
            'typescript',
            'tailwind',
            'framer',
            'firebase',
          ])
        "
        gitHubRepo="blog"
        websiteUrl="https://blog-mumk.vercel.app/"
      >
        <p>
          I started out building my own blogging website to record down fun
          experience in my life as memories are fleeting. Furthermore, it also
          aimed at brodening my horizon into intriguing topics that are
          <span>unrelated</span> to technology while continuously improving and
          <span>consolidating</span> my writing skills in various languages. It
          takes a lot of effort (~7 days) to plan, outline, write, enhance and
          proofreading to ensure quality of a blog post. As a result, I post
          relatively slowly as I did not have the time solely dedicated for
          writing. However, I hope that the time to deliver will change as my
          language competency improves.
        </p>
      </Project>
      <Project
        name="Book"
        type="Webpage"
        year="2021-2023"
        imgSrc="p8.png"
        :stacks="
          stackDetailsMapper(['vue', 'nuxt', 'typescript', 'tailwind', 'sass'])
        "
        gitHubRepo="book"
        websiteUrl="https://book-dun-three.vercel.app/"
      >
        <p>
          Book is a project that I use to
          <span>document technical topics</span> that I learned in the form of
          tutorials, notes and cheatsheets. As I am obsessed with learning new
          stuffs, I am mindful that there are just too much things to learn and
          it is impossible to keep everything in memory all the time.
        </p>
        <p>
          Hence, I wanted a place to store and manage the info that I've came
          across so that I can <span>refer</span> them back in the future when
          needed. This also helps me to have a <span>better picture</span> to
          the topic that I am trying to pick up as it forces me to dive deeper
          to disambiguate my superficial understanding. Also, by putting it
          online, I hope that this will <span>benefit others</span> as well.
        </p>
      </Project>
      <Project
        name="The Hacker Times"
        type="Web Application"
        year="2021-2023"
        imgSrc="p10.png"
        :stacks="
          stackDetailsMapper([
            'angular',
            'sass',
            'firebase',
            'jasmine',
            'circleci',
          ])
        "
        gitHubRepo="ng-hackernews"
        websiteUrl="https://hackernews-4ea93.web.app/"
      >
        <p>
          This project started out as a simple project where I want to build a
          aesthetically pleasing UI around the <span>Hackernews API</span> as
          the UI in the actual website is something looks like from the 1990s.
          However, I took me over 2 years+ and I have yet to complete this
          project. This effectively shows how <span>busy</span> (lazy) I am. I
          referenced the slick black and white newspaper themed UI from
          <span>The New York Times</span> and it was outstanding. I have added
          the "favourite" and "read later" feature that is persisted via
          Firebase for the users.
        </p>
      </Project>
      <Project
        name="TT Wellness Website"
        type="Webpage"
        year="2023"
        imgSrc="tt-wellness.png"
        :stacks="
          stackDetailsMapper(['nuxt', 'vue', 'tailwind', 'typescript', 'sass'])
        "
        websiteUrl="https://ttwellnesshealthcare.com.my"
        generatedFrom="Nuxt Content Template"
        generatedFromId="nuxt-content-template"
      >
        <p>
          A <span>static website</span> that displays the business information
          for TT Wellness Healthcare Centre @ TT Clinic. This is my first
          <span>freelance</span>
          project and I am grateful for the opportunity. Feature includes
          <span>internationalization</span> for English and Chinese translation,
          <span>mobile responsive</span> and
          <span><abbr title="Search Engine Optimization">SEO</abbr></span
          >.
        </p>
        <p>
          One thing that I am very proud of is the Google lighthouse score for
          the website. The home page scored 98 for <span>performance</span>, 95
          for <span>accessibility</span>, 100 for
          <span>best practices</span> and 100 for <span>SEO</span> when I last
          measured. However, I will still improve the website from these aspects
          when I see the opportunity.
        </p>
      </Project>
      <Project
        name="Positron+"
        type="Web Application"
        year="2022"
        imgSrc="p7.png"
        :stacks="
          stackDetailsMapper([
            'react',
            'typescript',
            'solidity',
            'truffle',
            'ganache',
            'storybook',
            'framer',
          ])
        "
        gitHubRepo="positron"
      >
        <p>
          Positron+ is a web application that allows user to
          <span>send Ethereum</span> to another user along with a
          <span>random GIF</span> as well as a piece of message that will be
          persisted on the Ethereum blockchain via a smart contract. It started
          out as a code along project with a tutorial by Mastering JS on
          Youtube. However as I follow along, I decide to develop my way by
          redesigning the UI and using another smart contract framework.
        </p>
        <p>
          The smart contract for the project is not deployed anywhere in the
          network and I only tested it a local testnet running on my machine.
        </p>
      </Project>
      <Project
        name="Avax NFT Minter"
        type="Web Application"
        year="2022-2023"
        imgSrc="p9.png"
        :stacks="
          stackDetailsMapper([
            'react',
            'framer',
            'typescript',
            'tailwind',
            'jest',
            'solidity',
            'pinata',
          ])
        "
        gitHubRepo="avax-nft-minter"
        generatedFrom="React ESBuild Template"
        generatedFromId="react-esbuild-template"
      >
        <p>
          This is a simple project to <span>mint images</span> as NFT on the
          <a href="https://www.avax.network/">Avalanche</a> blockchain. The idea
          sparkled from a challenge on StackUp platform but then I decided to
          make use of what I learned on minting NFT to this project. The smart
          contract was deployed to the Avalanche Fuji testnet and the images for
          NFT minted were stored in Pinata IPFS.
        </p>
      </Project>
      <Project
        id="react-esbuild-template"
        name="React ESBuild Template"
        type="Web Application Template"
        year="2023"
        imgSrc="p11.png"
        :stacks="
          stackDetailsMapper([
            'react',
            'typescript',
            'esbuild',
            'tailwind',
            'framer',
            'zod',
            'jest',
            'workflow',
          ])
        "
        gitHubRepo="React-Esbuild-Template"
        websiteUrl="https://react-esbuild-template.vercel.app"
      >
        <p>
          A template project to kickstart my React development. One day while I
          was working with a dApps with front-end bootstrapped with
          <code>create-react-app</code>. Not to mention <code>cra</code> is
          bloated and unwieldy, I faced some irritating issue while integrating
          the decentralized wallet.
        </p>
        <p>
          One of the cryptic errors confronted being
          <code>Buffer not found</code>. I spent quite some time to rectify the
          issue but to no avail and I gave up eventually. I tried
          <a href="https://vitejs.dev/">Vite</a> but also faced the the same
          problem. Confused and disgruntled, I decided to create my own
          <strong>React app</strong> from scratch.
        </p>

        <p>
          This template has included a lot of tools and utilities that I find it
          useful for developing with React and hence it is
          <span>heavy</span> and <span>opionionated</span>.
        </p>
      </Project>
      <Project
        id="react-rescript-template"
        name="React Rescript Template"
        type="Web Application Template"
        year="2021-2023"
        imgSrc="p12.png"
        :stacks="
          stackDetailsMapper([
            'react',
            'rescript',
            'esbuild',
            'tailwind',
            'sass',
          ])
        "
        gitHubRepo="react-rescript-template"
        websiteUrl="https://react-rescript-template-kohl.vercel.app/"
      >
        <p>
          A template project that started out as an <span>experiment</span> back
          in 2021 to play around with ReScript. The template was using
          <code>create-react-app</code> when first started out and it was
          <span>awfully simple</span> with just a hello world in the home page.
          No further development after the initial version and the repo was
          pretty much forsaken since then.
        </p>
        <p>
          On December 2022, when I was reminded about ReScript on Youtube, I
          <span>revisited</span> the template and decided to
          <span>ditch</span> everything including
          <code>create-react-app</code> and reconstruct anew with better tooling
          such as esbuild, Tailwind CSS and the latest version of React.
        </p>
      </Project>
      <Project
        id="nuxt-content-template"
        name="Nuxt Content Template"
        type="Web Docs Template"
        year="2023"
        imgSrc="p13.png"
        :stacks="stackDetailsMapper(['vue', 'nuxt', 'tailwind', 'typescript'])"
        gitHubRepo="nuxt-content-template"
        websiteUrl="https://nuxt-content-template.netlify.app/"
      >
        <p>
          Yet another template project but with the purpose of creating
          aesthetically pleasing <span>documentation</span> sites. It comes with
          <span>dark mode</span>, <span>Markdown</span> (in MDC) to HTML
          converter and also supports <span>LaTeX</span> for writing profound
          mathematical equations.
        </p>
        <p>This template is using Vue v3 with Composition API and Nuxt v3.</p>
      </Project>
      <Project
        name="Starker Regen"
        type="Web Application Template"
        year="2023"
        imgSrc="p14.png"
        :stacks="
          stackDetailsMapper([
            'react',
            'fsharp',
            'esbuild',
            'javascript',
            'tailwind',
          ])
        "
        gitHubRepo="starker-regen"
      >
        <p>
          An <span>experimental</span> React template written with F# and
          JavaScript. The F# code is transpiled to JavaScript by the Fable
          compiler and Feliz for React bindings. Esbuild is used to compile the
          generated JavaScript files into a bundle. There are still a lot of
          bugs and missing features at the moment.
        </p>
      </Project>

      <Project
        id="elm-vite-template"
        name="Elm Vite Template"
        type="Web Application Template"
        year="2023"
        imgSrc="elm-vite-tailwind.png"
        :stacks="stackDetailsMapper(['elm', 'vite', 'javascript', 'tailwind'])"
        gitHubRepo="elm-vite-template"
        websiteUrl="https://elm-vite-template.vercel.app/"
      >
        <p>
          A <span>starter</span> template for building <span>robust</span> web
          application with Elm. Contains all the necessary development scripts
          for starting out. It is blazingly fast and it supports
          <span><abbr title="Hot Module Reloading">HMR</abbr></span
          >. To top it off, TailwindCSS is configured with VSCode
          <span>intellisense</span> for class autocompletion.
        </p>
      </Project>

      <!-- ----------------------------------------- -->
      <Project
        name="E-learning Platform"
        type="Full-stack Web Application"
        year="2021"
        imgSrc="p1.png"
        :stacks="
          stackDetailsMapper([
            'vue',
            'vuetify',
            'sass',
            'firebase',
            'socket',
            'typescript',
            'node',
          ])
        "
        gitHubRepo="leedv2.1"
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
          planning phase that took about three months and the actual
          implementation of the system takes another three months to complete.
          Although the entire process of developing this system is arduous and
          tiresome, I am flattered that I was rewarded an A- grade for this.
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
        year="2019"
        imgSrc="p2.png"
        :stacks="stackDetailsMapper(['html', 'css', 'javascript'])"
        gitHubRepo="IgniteTheSpark"
        websiteUrl="https://data-miner00.github.io/IgniteTheSpark/#"
      >
        <p>
          Ignite de Spark was the <span>last event</span> that committees of my
          society had put our heart and soul into before we retire and this
          website was made to <span>promote the event</span> by providing every
          single bits of details of the event and a call for action to a Google
          form for registration. This website was the
          <span>first-ever project</span> that I've done apart from assignments.
          Hence, the quality is substandard but I was proud of myself.
          Unfortunately, due to the unforeseen outbreak of pandemic in the
          world, the event was canceled and the website had never been to light.
        </p>
      </Project>

      <Project
        name="Covid-19 Dashboard"
        type="Webpage"
        year="2021"
        imgSrc="p5.png"
        :stacks="
          stackDetailsMapper([
            'angular',
            'bulma',
            'sass',
            'typescript',
            'echarts',
          ])
        "
        gitHubRepo="ng-covid-tracker"
        websiteUrl="https://ng-covid-tracker.web.app/"
      >
        <p>
          This project is about displaying the latest covid data and trends
          worldwide all within a single page. Development started on
          <span>June 2021</span>, after I had my final semester in the
          university. I came across the covid API by mathdroid and thought it
          would be great to start a project with it. The application has a
          section where users can choose a country to view its infection,
          recover and death case for that particular day with a interactive Pie
          chart.
        </p>
        <p>
          It went great until early 2022 where data for recovered case was no
          longer provided. As of 2023, the entire covid API has been
          <span>discontinued</span> and is no longer available for use. As a
          result, the site is currently broken and devoid of data. I am plotting
          to take down the website in the near future.
        </p>
      </Project>
      <Project
        name="Newtab Remastered"
        type="Webpage"
        year="2021"
        imgSrc="p6.png"
        :stacks="stackDetailsMapper(['vue', 'less', 'typescript'])"
        gitHubRepo="newtab-remastered"
        websiteUrl="https://newtab-remastered.vercel.app/"
      >
        <p>
          As an aspiring developer that is always on the go to learn and build
          stuffs, I found myself <span>struggling</span> to navigate between the
          useful sites and resources quickly. To read the docs for TailwindCSS,
          I will need to open up a new tab, insert the URL manually or Google to
          navigate to the site. If I want to access Vue.js docs, I will need to
          repeat the same process. It gets tedious as time goes and sometimes I
          wonder wouldn't it be phenomenal to have a page that has everything I
          need inside? That way, I can navigate around with east and less
          ceremony.
        </p>
        <p>
          This project started out with a intention to replace my browser's new
          tab page, or become the home page. However, I found myself
          <span>not using</span> it as much as I thought I would. There are more
          facets to be improved and implemented before I can consider it useful.
          Albeit underwhelming, it was a great attempt and I still
          <span>treasures</span> the things I've learnt during the development.
        </p>
      </Project>
    </div>
    <Socials />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { stackDetailsMapper } from '~/data/utils'

export default Vue.extend({
  head: () => ({
    title: 'Projects - Shaun Chong',
  }),
  layout: 'detailPage',
  methods: { stackDetailsMapper },
})
</script>

<style lang="sass" scoped>
.projects
  padding: 50px 0
</style>
