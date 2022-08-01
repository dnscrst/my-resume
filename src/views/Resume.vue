<template>
  <main class="resume">

    <LeftSide class="sections" />
    <RightSide class="sections" />

  </main>
</template>

<script>
// @ is an alias to /src
import LeftSide from '@/components/LeftSide.vue'
import RightSide from '@/components/RightSide.vue'

export default {
  name: 'Resume',
  components: {
    LeftSide,
    RightSide
  },
  created() {
    this.$store.dispatch('get_resume')
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

    .sections {
      padding: 30px 50px;
    }

  }
}

@media only screen and (min-width: 586px) {
  main {
    //margin: 60px;
    display: flex;
    justify-content: center;

    .sections {
      width: 50%;
    }
  }
}
</style>


