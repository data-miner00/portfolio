<template>
  <div class="education">
    <div class="wrap">
      <div class="education__label">
        <h1>My education</h1>
      </div>
      <School
        name="Universiti Tunku Abdul Rahman"
        year="2018-2021"
        scholar="Degree"
        field="Software Engineering"
        result="CGPA 3.31"
        imgSrc="utar.jpg"
      ></School>
      <School
        name="SMK Munshi Abdullah"
        year="2016-2017"
        scholar="STPM"
        field="Major in Physics"
        result="CGPA 3.33"
        imgSrc="munshi.jpg"
      ></School>
      <School
        name="SMK Tun Mutahir"
        year="2011-2015"
        scholar="SPM"
        field="Science"
        result="7A 1B 2C"
        imgSrc="tmu.jpg"
      ></School>
    </div>
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

  &__label
    text-align: center
    padding-bottom: 40px
    h1
      font-style: italic
      font-size: 1.25em
      font-weight: normal
</style>
