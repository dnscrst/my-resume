<template>
  <div id="app">
    <Resume />


    <router-view />
  </div>
</template>

<script>
import Resume from './views/Resume'

export default {
  name: 'App',
  components: {
    Resume
  }
}
</script>
<style lang="scss">
</style>
