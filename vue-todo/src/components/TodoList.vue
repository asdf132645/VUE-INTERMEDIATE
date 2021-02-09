<template>
  <div>
      <!-- name 은 클래스명 tag 는 말그대로 태그사용할거 -->
      <transition-group name="list" tag="ul">
          <li v-for="(todoItem, index) in this.strodeTodoItems" v-bind:key="todoItem.item">
              
              <span v-on:click="toggoleCom({todoItem, index})" v-bind:class="{checkbtn: todoItem.completed}">checkBtn</span>

              <!-- todoItem.completed 값이 true 면  textCompleted 가들어감 false 는 안들감-->

              <span v-bind:class="{textcompleted: todoItem.completed}">{{ todoItem.item }}</span>
                <!-- 뮤스테이션을 안쓰고 인자값을 넘길떄는 2개를 전달 -->
              <!-- <button v-on:click="removeTodo(todoItem, index)" >삭제</button> -->

              <!-- 뮤스테이션을 쓰고 인자값을 객체로 넘기기 -->
              <button v-on:click="removeTodo({todoItem, index})" >삭제</button>

          </li>
      </transition-group>
  </div>
</template>

<script>
    import { mapGetters , mapMutations } from 'vuex'

    export default {
        methods:{
            ...mapMutations({
                //인자를 넘기지 안기위해 위에서 객체로 만들어서 보내면됌
                removeTodo:'removeOneItem',
                toggoleCom:"toggleOne"
            }),
            //removeTodo(todoItem, index){
                // this.$emit('removeItem', todoItem, index);
                //객체화 
                // const obj = {
                //     todoItem : todoItem,
                //     index: index
                // };
                //this.$store.commit('removeOneItem', {todoItem,index});
                // console.log(todoItem)

            //},
            //toggoleCom(todoItem, index){
                // this.$emit('toggleItem', todoItem, index);
                //this.$store.commit('toggleOne', {todoItem,index});
            //}
        },
        computed:{
            // todoItems() {
            //     return this.$store.getters.strodeTodoItems;
            // }
            
            //배열 리터럴
            ...mapGetters(['strodeTodoItems'])

            //객체 리터럴 이름이 서로 다를때 사용
            // ...mapGetters({
            //     todoItems : 'strodeTodoItems'
            // })
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