
<template>
    <div class="text-component">
        <div v-for="container in data" :key="container">
            <h3>{{ container.title }}</h3>
            <p v-html="container.details" />
        </div>
    </div>

</template>

<script>

export default {
    name: 'TextComponent',
    props: ['data'],

}
</script>
