import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'


const store = require('./store');
Vue.use(Vuex);

Vue.config.productionTip = false

Vue.mixin({
    computed: {
        heroes() {
            return this.$store.state.heroes;
        },
        laneRoles() {
            return this.$store.state.additional.lane_roles;
        },
    },
    methods: {
        getRandomListItem: function (list) {
            return list[Math.floor(Math.random() * list.length)];
        },
        popRandomListItem: function (list) {
            let index = Math.floor(Math.random() * list.length);
            let item = Object.assign({}, list[index]);

            // delete by reference
            list = list.splice(index, 1);

            return item;
        }
    },
})

new Vue({
    el: '#app',
    render: h => h(App),
    store
});

new Vuex.Store({
    modules: {
        store: store,
    },
});

