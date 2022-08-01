<template>
    <div class="rating-level">
        <div v-for="(rating, index) in data" :key="rating">
            <span>{{ rating.name }}</span>
            <RatingDots :rate="rating.rate" />

        </div>

    </div>
</template>

<script>
import RatingDots from './RatingDots.vue';
export default {
    name: 'RatingLevel',
    components: { RatingDots },
    props: ['data']
}
</script>

<style lang="scss" scoped>
//<RatingDots :value="data.rate"/>
.rating-level {
    >div {
        display: flex;
        justify-content: space-between;
        max-width: 280px;
    }
}
</style>