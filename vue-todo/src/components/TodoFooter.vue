<template>
  <div>
      <button v-on:click="clearTodo">clear all</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo(){
      this.$emit('clearAll')
    }
  }
}
</script>

<style scoped>

</style>>