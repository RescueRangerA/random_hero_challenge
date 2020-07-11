<template>
    <div class="random_line">
        <div class="hero_icon">
            <img :src="hero.icon" :alt="hero.name"/>
        </div>
        <div class="hero_name">
            <span>{{hero.localized_name}}</span>
        </div>
        <div class="role">
            <span>{{this.role}}</span>
        </div>

    </div>
</template>

<script>
    export default {
        props: ['hero', 'role'],
        name: "RandomLine"
    }
</script>

<style scoped>
    .random_line {
        display: flex;
        text-align: center;
    }

    .random_line .hero_name {
        margin: auto 10px;
        min-width: 150px;
    }

    .random_line .role {
        margin: auto 10px;
        min-width: 100px;
    }

</style>