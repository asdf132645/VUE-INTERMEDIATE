<template>
  <div>
      <!-- name 은 클래스명 tag 는 말그대로 태그사용할거 -->
      <transition-group name="list" tag="ul">
          <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item">
              
              <span v-on:click="toggoleCom(todoItem, index)" v-bind:class="{checkbtn: todoItem.completed}">checkBtn</span>

              <!-- todoItem.completed 값이 true 면  textCompleted 가들어감 false 는 안들감-->

              <span v-bind:class="{textcompleted: todoItem.completed}">{{ todoItem.item }}</span>

              <button v-on:click="removeTodo(todoItem, index)" >삭제</button>

          </li>
      </transition-group>
  </div>
</template>

<script>
    export default {
        methods:{
            removeTodo(todoItem, index){
                // this.$emit('removeItem', todoItem, index);
                //객체화 
                // const obj = {
                //     todoItem : todoItem,
                //     index: index
                // };
                this.$store.commit('removeOneItem', {todoItem,index});
                // console.log(todoItem)

            },
            toggoleCom(todoItem, index){
                // this.$emit('toggleItem', todoItem, index);
                this.$store.commit('toggleOne', {todoItem,index});
            }
        }
        
    }
</script>

<style>
    .textcompleted{
        text-align: center;
        color: red;
    }
    .checkbtn{
        color: blueviolet;
    }
    /* 리스트 아이템 트렌지션 효과 */
    .list-enter-active, .list-leave-active {
    transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
    }
</style>