<template>
    <section class="left-side">

      <p>Call: {{ data.phone }} </p>
      <p>Email: {{ data.email }}</p>
      <p>Git: {{data.git}}</p>
        <TextComponent :data="data.left" />

    </section>
</template>

<script>
  import TextComponent from "@/components/TextComponent";

  export default {
      name: "LeftSide",
      components: { TextComponent },
      props: {
        data: {
          type: Object
        }
      }
  }
</script>

<style lang="scss">
  @media only screen and (min-width: 0px) {
    .left-side {
      border-left: 1px solid #C2C2C2;
      border-right: 1px solid #C2C2C2;
    }
  }


</style>
