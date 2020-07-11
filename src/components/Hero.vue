<template>
    <div>
        <img :src="hero.icon" :alt="hero.name"/>
        <span>{{hero.localized_name}}</span>
    </div>
</template>

<script>
    export default {
        props: ['hero'],
        name: "Hero"
    }
</script>

<style scoped>

</style>