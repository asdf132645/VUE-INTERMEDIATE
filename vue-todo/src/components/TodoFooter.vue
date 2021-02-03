<template>
  <div>
      <button v-on:click="clearTodo">clear all</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo: function(){
      localStorage.clear();
    }
  }
}
</script>

<style scoped>

</style>>