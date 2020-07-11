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

