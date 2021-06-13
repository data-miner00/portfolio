<template>
  <div class="education">
    <div class="wrap">
      <div class="education__label">
        <h1>My education</h1>
      </div>
      <div class="education__school">
        <div class="education__school__img"></div>
        <div class="education__school__content">
          <div class="education__school__content__name">
            <h2>Universiti Tunku Abdul Rahman <span>(2018 - 2021)</span></h2>
          </div>

          <div class="education__school__content__field">
            Degree - Software Engineering
          </div>
          <div class="education__school__content__result">CGPA 3.31</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eveniet quod nostrum dolore ipsam blanditiis repellendus cum maiores
            facilis, laudantium accusantium quasi perferendis. Facilis minima
            eligendi cupiditate ipsum similique commodi!
          </p>
        </div>
      </div>
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

  &__school
    padding: 0 5%
    &__img
      width: 100%
      height: 140px
      background: #eee
    &__content
      margin-top: 10px
      p
        margin: 20px 0 25px
      &__name
        h2
          font-size: 1.15em
          span
            color: gray
            font-size: .85em
            font-weight: normal
      &__field
        font-size: 0.75em
      &__result
        position: relative
        width: fit-content
        &::before
          content: ''
          position: absolute
          bottom: -6px
          left: 5px
          right: -5px
          height: 5px
          background: brown
</style>
