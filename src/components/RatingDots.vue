<template>
    <div class="rating-dots">
        <span v-for="dot in dots"
              :key="dot"
              :class="{rated: +dot < +rate}" />
    </div>
</template>

<script>

export default {
    name: 'RatingDots',
    props: ['rate'],

    data() {
        return {
            dots: Array.from(Array(10).keys())
        }
    }
}
</script>

<style lang="scss" >
  @import '../styles/vars.scss';

  .rating-dots {
      @media only screen and (min-width: 0) {
          width: 96px;
          display: flex;
          justify-content: space-between;

          span {
              width: 6px;
              height: 6px;
              border-radius: 50%;
              font-family: 'Averta Std', sans-serif;
              display: inline-block;
              background-color: $medium-grey;

              &.rated {
                  background-color: $dark-grey;
              }
          }
      }
  }
</style>