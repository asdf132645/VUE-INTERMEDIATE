<template>
  <div>
      <ul>
          <li v-for="todoItem in todoItems" v-bind:key="todoItem">
              {{ todoItem }}
              <span v-on:click="removeTodo">삭제</span>
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
            removeTodo: function(){
                
            }
        },
        created: function(){
            if(localStorage.length > 0){
                for(var i = 0; i < localStorage.length; i ++){
                    if(localStorage.key(i) !== "loglevel:webpack-dev-server"){
                        this.todoItems.push(localStorage.key(i));
                    }
                }
            }
        }
    }
</script>

<style>

</style>