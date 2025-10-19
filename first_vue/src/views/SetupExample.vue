<template>
        <!-- Giao dien -->
  <div class="container">
    <h2>{{ message }}</h2>
  </div>
</template>

<script setup>
    //Logic xu ly
const message = "Hello this is my first component";
</script>

<style scoped>
    /* CSS chi ap dung cho trang nay */
.container {
  text-align: center;
  padding: 40px;
  font-size: 1.4rem;
}
</style>
