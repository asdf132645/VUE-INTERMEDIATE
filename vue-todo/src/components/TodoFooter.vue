<template>
  <div>
      <button v-on:click="clearTodo">clear all</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      clearTodo: 'clearAllItems'
    })
    // clearTodo(){
    //   // this.$emit('clearAll');
    //   this.$store.commit('clearAllItems');
    // }
  }
}
</script>

<style scoped>

</style>>