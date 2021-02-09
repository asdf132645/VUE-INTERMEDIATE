import Vue from "vue";
import Vuex from "vuex";

//* as 별칭명
// import * as getters from './getters'
// import * as mutations from './mutations'

import todoApp from './modules/todoApp'

//뷰전역으로 등록할떄 USE
Vue.use(Vuex);



//export const 하는 순간 스토어를 다른 뷰에서 사용가능
export const store = new Vuex.Store({
    modules: {
        todoApp
    }

    //state: {
    //headText: "head",
    //todoItems: storage.aa(),
    //},
    //모듈화
    //getters: getters,

    //모듈화 안한코드
    // getters: {
    //     strodeTodoItems(state) {
    //         return state.todoItems;
    //     }
    // },

    //모듈화
    //mutations: mutations

    //모듈화 안한코드
    // mutations: {
    //     addOneItem(state, todoItem) {
    //         // console.log('test');
    //         const obj = { completed: false, item: todoItem };
    //         localStorage.setItem(todoItem, JSON.stringify(obj));
    //         state.todoItems.push(obj);
    //     },
    //     removeOneItem(state, payload) {
    //         localStorage.removeItem(payload.todoItem.item);
    //         state.todoItems.splice(payload.index, 1);
    //     },
    //     toggleOne(state, payload) {
    //         state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    //         localStorage.removeItem(payload.todoItem.item);
    //         localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    //     },
    //     clearAllItems(state) {
    //         localStorage.clear();
    //         state = [];
    //     }
    // }
});