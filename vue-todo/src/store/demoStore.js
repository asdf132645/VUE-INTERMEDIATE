import Vue from "vue";
import Vuex from "vuex";

//뷰전역으로 등록할떄 USE
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        price: 100
    },
    getters: {
        originalPrice(state) {
            return state.price
        },
        doublePrice(state) {
            return state.price * 2;
        },
        triplePrice(state) {
            return state.price * 3;
        }
    }
});