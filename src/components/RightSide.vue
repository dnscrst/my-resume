<template>

    <section class="right-side">
        <figure class="avatar">
            <img src="../assets/avatar.png" alt="my-avatar">
        </figure>
        <h1> {{ data.name }} <br />
            <span>
                <b>{{ data.surname }}</b>
            </span>
        </h1>
        <h2>{{ data.role }}</h2>
        <p>Call {{ data.phone }} or email {{ data.email }}</p>
        <h3>SKILLS</h3>
        <RatingLevel :data="data.right.skills" />
        <TextComponent :data="data.right" />

    </section>

</template>

<script>
  import TextComponent from './TextComponent.vue';
  import RatingLevel from './RatingLevel.vue';

  export default {
      name: 'RightSide',
      components: { TextComponent, RatingLevel },
      props: {
        data: {
          type: Object
        }
      }
  }
</script>

<style lang="scss">
@import '../styles/vars.scss';
@import '../styles/base.scss';

.right-side {
    background-color: $light-grey;
    position: relative;

    @media only screen and (min-width: 0px) {
        width: 100%;

        .avatar {

            position: absolute;
            right: 0px;
            top: 9px;

            img {
                width: 90px;
            }

        }

        h1 {

            font-weight: 50;
            margin-bottom: 0;
        }

        h2 {
            background-color: $light-black;
            display: inline-block;
            color: white;
            font-weight: 400;
            padding: 4px 8px;
            margin-top: 8px;
        }

        .text-component {
            font-family: "Averta Std", sans-serif;
            position: relative;

            &:before {
                width: 29px;
                height: 25px;
                padding: 2px 2px;
                font-size: 13px;
                font-family: 'Averta Std', sans-serif;
                background-image: url("../assets/counter-icon.png");
                background-repeat: no-repeat;
                left: -90px;
                display: block;
                position: absolute;
                color: white;
            }
        }

        >p {
            display: block;
            margin: 20px 0 0
        }


    }

    @media only screen and (min-width: 586px) {
        padding: 40px 30px;

        .avatar {

            position: absolute;
            //right: 10px;
            top: 19px;

            >img {
                width: 93px;
            }
        }

        >p {
            display: none;
        }

        .text-component {
            div {
                position: relative;

                & :before {

                    //content: attr(index);
                    //width: 29px;
                    //height: 25px;
                    //padding: 2px 2px;
                    //font-size: 13px;
                    ///font-family: 'Averta Std', sans-serif;
                    background-image: url("../assets/counter-icon.png");
                    background-repeat: no-repeat;
                    //left: -90px;
                    //display: block;
                    position: absolute;
                    //color: white;
                }
            }
        }
    }

    @media only screen and (min-width: 767px) {
        max-width: 400px;
        border-right: 1px solid $medium-grey;
        padding: 60px;

        .avatar {

            position: absolute;
            right: 10px;
            top: 15px;

            >img {
                width: 130px;
            }
        }

        h1 {
            margin-top: 15px;
        }


    }
}
</style>