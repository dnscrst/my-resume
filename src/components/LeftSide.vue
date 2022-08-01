<template>
    <section class=left-side>

        <p>Call {{ data.phone }} or email {{ data.email }}</p>
        <TextComponent :data="data" />

    </section>
</template>

<script>

import { computed } from 'vue'
import TextComponent from './TextComponent.vue'


export default {
    name: "LeftSide",
    components: { TextComponent },
    computed: {
        data() {
            const { about, work, phone, email,
                soft_skills, special_skills } = this.$store.state.resume
            return {
                about, work, phone, email,
                soft_skills, special_skills
            }
        }

    }
}
</script>

<style lang="scss" scoped>
@import '../styles/vars.scss';
@import '../styles/base.scss';

.left-side {

    @media only screen and (max-width: 485px) {

        .text-component {
            font-family: "Averta Std", sans-serif;
            margin-top: 48px;
        }

        >p {
            display: none;
        }
    }

    @media only screen and (min-width: 586x) {
        padding: 40px 30px;

        >p {
            display: inline-block;
        }

    }

    @media only screen and (min-width: 767px) {
        max-width: 400px;
        border-left: 1px solid $medium-grey;
        padding: 60px;
    }
}
</style>