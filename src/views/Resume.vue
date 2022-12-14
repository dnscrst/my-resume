<template>
  <main class="resume">
    <LeftSide :data="resume"
              class="sections" />
    <RightSide :data="resume"
               class="sections" />
  </main>
</template>

<script>
  import LeftSide from '@/components/LeftSide.vue'
  import RightSide from '@/components/RightSide.vue'
  export default {
    name: 'Resume',

    components: {
      LeftSide,
      RightSide
    },

    computed: {
      resume() {
        return this.$store.state.resume
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/base.scss';
  @import '../styles/vars.scss';

  @media only screen and (min-width: 0px) {
    main {
      display: flex;
      flex-wrap: wrap-reverse;
      justify-content: center;

      .sections {
        padding: 30px 50px;
        max-width: 400px;
      }
    }
  }

  @media only screen and (min-width: 586px) {
    main {
      display: flex;
      justify-content: center;

      .sections {
        width: 50%;
      }
    }
  }
</style>


