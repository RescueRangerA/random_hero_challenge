<template>
    <div id="app">
        <h3>List of heroes</h3>
        <ul>
            <li v-for="hero in heroes" v-bind:key="hero.id">
                <Hero :hero="hero"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import Hero from './components/Hero.vue'

    export default {
        name: 'App',
        components: {
            Hero
        },
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    ul {
        list-style-type: none;
    }
</style>
