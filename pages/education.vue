<template>
  <div class="education">
    <div class="wrap">
      <PageHeading title="Education" />
      <School
        name="Universiti Tunku Abdul Rahman"
        year="2018-2021"
        scholar="Degree"
        field="Software Engineering"
        result="CGPA 3.31"
        imgSrc="utar.jpg"
      >
        <p>
          UTAR, a university that are dreaded by many including me, as legends
          says that the examination and assessment there are extraordinarily
          difficult but somehow ended there for my university journey.
        </p>
        <p>
          Registering for the Software Engineering course was actually
          coincidental as I am wanted to enroll in any IT related course but the
          Sg. Long Campus only offers Software Engineering there.
        </p>
        <p>
          My first year there was definitely not a bed of roses as I have to
          deal with unfamiliar environment and inexperience. I was a total
          mediocre back then as I don't fail my course, but at the same time I
          couldn't ace it once.
        </p>
        <p>
          Fortunately, things took a good turn since my second year as I am more
          accustomed to the way assessment works and got myself two Dean's List
          award at Year 2 and Year 3 respectively.
        </p>
        <p>
          Thoughout the entire course, I have been exposed to various
          programming languages such as C++, C#, Java, Python and PHP. I have
          also gained knowledges on UI design, software design, data structures,
          software testing, software quality assurance and software
          constructions as well that is the essential at the core of software
          engineering.
        </p>
      </School>
      <School
        name="SMK Munshi Abdullah"
        year="2016-2017"
        scholar="STPM"
        field="Major in Physics"
        result="CGPA 3.33"
        imgSrc="munshi.jpg"
      >
        <p>
          SMK Munshi Abdullah is one of the secondary school that have Form 6 in
          Melaka. I had been offered for joining the Physics class which is
          insanely difficult and I gladly accepted the offer because I wanted to
          give myself a challenge.
        </p>
        <p>
          All of the Form 6 students are obligated to register for the MUET
          certification and we are blessed to have a dedicated class taught by
          experienced lecturers. Hence, it is actually not that bad after all as
          it saves the hassle to participate MUET in my university. My MUET
          score is Band 4, not terrible but not excellent either.
        </p>
        <p>
          My favourite class is Chemistry especially Organic Chemistry as I am
          obsessed with the Benzene ring very much. The class I despise is the
          Pengajian Am class. There is way too much formula and rules to
          memorize to answer the question and I just couldn't take it.
        </p>
      </School>
      <School
        name="SMK Tun Mutahir"
        year="2011-2015"
        scholar="SPM"
        field="Science"
        result="7A 1B 2C"
        imgSrc="tmu.jpg"
      >
        <p>
          SMK Tun Mutahir, established back in 1968, is a secondary school
          located just beside SMK Munshi Abdullah, how convenient. I've spent
          most of my honeymoon year here with my buddies just having fun playing
          around the school.
        </p>
      </School>
    </div>
    <Socials />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: () => ({
    title: 'Education',
  }),
  layout: 'detailPage',
})
</script>

<style lang="sass" scoped>
.education
  padding: 50px 0
</style>
