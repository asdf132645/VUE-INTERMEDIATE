<template>
  <div>
      <ul>
          <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item">
              <span v-on:click="toggoleCom(todoItem, index)" v-bind:class="{checkbtn: todoItem.completed}">checkBtn</span>
              <!-- todoItem.completed 값이 true 면  textCompleted 가들어감 false 는 안들감-->
              <span v-bind:class="{textcompleted: todoItem.completed}">{{ todoItem.item }}</span>
              <button v-on:click="removeTodo(todoItem, index)" >삭제</button>
          </li>
      </ul>
  </div>
</template>

<script>
    export default {
        props:['propsdata'],
        methods:{
            removeTodo: function(todoItem, index){
                this.$emit('removeItem', todoItem, index);
                // console.log(todoItem)

            },
            toggoleCom: function(todoItem, index){
                this.$emit('toggleItem', todoItem, index);
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
</style>