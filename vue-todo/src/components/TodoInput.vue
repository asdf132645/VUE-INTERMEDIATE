<template>
  <div>
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <!-- <button v-on:click="addTodo">add</button> -->
      <span class="addContainer">
            <i class="fas fa-plus" v-on:click="addTodo">추가</i>
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
            if(this.newTodoItem !== ''){
                // this.$emit('이벤트 이름', 인자1, 인자2, ...)
                //상위컴포넌트로 보내기 $emit
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            }
            
        },
        clearInput: function(){
            this.newTodoItem = "";
        }
    }
}
</script>

<style>

</style>