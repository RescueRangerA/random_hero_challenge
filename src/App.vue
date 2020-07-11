<template>
    <div id="app">
        <h3>Random hero challenge</h3>
        <select class="line_count_input" v-model="lineCount">
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
        </select>
        <button class="run_control" v-on:click="run">Go!</button>

        <ul>
            <li v-for="line in randomedLines" v-bind:key="line.hero.id">
                <RandomLine :hero="line.hero" :role="line.laneRole"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import RandomLine from "./components/RandomLine";

    export default {
        name: 'App',
        data() {
            return {
                lineCount: 1,
                randomedLines: [],
            }
        },
        components: {
            RandomLine,
        },
        methods: {
            run: function() {
                this.randomedLines = [];

                let heroes = [];
                this.heroes.forEach(hero => (heroes.push(Object.assign({}, hero))));

                for (let i = 1; i <= this.lineCount; i++) {
                    let hero = this.popRandomListItem(heroes);
                    let laneRole = this.getRandomListItem(this.laneRoles);

                    this.randomedLines.push({
                        hero: hero,
                        laneRole: laneRole,
                    });
                }

                this.randomedLines.sort(function (a, b) {
                    if (a.hero.name > b.hero.name) {
                        return 1;
                    }
                    if (a.hero.name < b.hero.name) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                });
            }
        }
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

    .run_control {
        width: 100px;
        height: 50px;
        font-size: 30px;
    }

    .line_count_input {
        width: 100px;
        height: 50px;
        font-size: 30px;
    }
</style>
