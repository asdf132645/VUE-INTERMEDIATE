<template>
  <div>
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <!-- <button v-on:click="addTodo">add</button> -->
      <span class="addContainer">
            <i class="fas fa-plus" v-on:click="addTodo">추가</i>
      </span>
       <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">
                헤더
                <button @click="showModal = false">닫기</button>
            </h3>
            <h3 slot="body">
                s
            </h3>
            <!-- <h3 slot="footer">
                
            </h3> -->
      </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'
export default {
    data(){
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo(){
            if(this.newTodoItem !== ''){
                // this.$emit('이벤트 이름', 인자1, 인자2, ..)
                //상위컴포넌트로 보내기 $emit
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            }else{
                this.showModal = !this.showModal
            }
            
        },
        clearInput(){
            this.newTodoItem = "";
        }
    },
    components: {
        Modal
    }
}
</script>

<style>

</style>