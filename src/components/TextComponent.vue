<template>
    <div class="text-component">
        <div v-for="component in data" :key="component.title">
            <h3>{{ component.title }}</h3>
            <p v-html="component.details" />
        </div>
    </div>

</template>

<script>
  export default {
      name: 'TextComponent',
      props: ['data'],
  }
</script>

<style lang="scss">
  @import '../styles/base.scss';
  @import '../styles/vars.scss';

  .text-component {
    line-height: 1.5;
  }
</style>
