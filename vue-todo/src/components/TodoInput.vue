<template>
  <div>
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <!-- <button v-on:click="addTodo">add</button> -->
      <span class="addContainer">
            <i class="fas fa-plus" v-on:click="addTodo">sss</i>
      </span>
  </div>
</template>

<script>
export default {
    data : function(){
        return {
            newTodoItem: ""
        }
    },
    methods: {
        addTodo: function(){
            console.log(this.newTodoItem);
            //저장하는 로직
            // 키 , 밸류
            localStorage.setItem(this.newTodoItem, this.newTodoItem);
            this.clearInput();
        },
        clearInput: function(){
            this.newTodoItem = "";
        }
    }
}
</script>

<style>

</style>