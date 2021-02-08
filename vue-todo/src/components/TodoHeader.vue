<template>
  <header>
    <!-- <h1>TODO it!</h1> -->
    <h1>{{ this.$store.state.headText }}</h1>
  </header>
</template>


<!-- 
상속무시 현재 컴포넌트에만 유효하게 만드는 방법 -> style scoped
-->
<style scoped>
    h1{
        color: #333;
        font-weight: 900;
        margin: 2.5rem 0 1.5rem;
    }
</style>