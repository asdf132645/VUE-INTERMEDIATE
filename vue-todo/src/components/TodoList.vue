<template>
  <div>
      <ul>
          <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem">
              <span :click="toggoleCom(todoItem, index)" v-bind:class="{checkBtn: todoItem.completed}">checkBtn</span>
              <!-- todoItem.completed 값이 true 면  textCompleted 가들어감 false 는 안들감-->
              <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
              <span v-on:click="removeTodo(todoItem, index)" >삭제</span>
          </li>
      </ul>
  </div>
</template>

<script>
    export default {
        data: function(){
            return {
                todoItems: []
            }
        },
        methods:{
            removeTodo: function(todoItem, index){
                console.log(todoItem, index);
                localStorage.removeItem(todoItem);
                this.todoItems.splice(index, 1);
            },
            toggoleCom: function(todoItem, index){
                todoItem.completed = !todoItem.completed;
                localStorage.removeItem(todoItem.item);
                localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
            }
        },
        created: function(){
            if(localStorage.length > 0){
                for(var i = 0; i < localStorage.length; i ++){
                    if(localStorage.key(i) !== "loglevel:webpack-dev-server"){
                        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    }
                }
            }
        }
    }
</script>

<style>
    .textCompleted{
        text-align: center;
        color: red;
    }
    .checkBtn{
        color: blueviolet;
    }
</style>