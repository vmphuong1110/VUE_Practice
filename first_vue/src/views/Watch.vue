<!-- DUng khi muon lam side effect, goi API, ghi log, update data, show message when data update
<template>
  <div class="container">
    <h2>Watch Example</h2>
    <input type="text" v-model="name" placeholder="Enter your name" />
    <p>Your name is: {{ name }}</p>
    <p>Message: {{ message }}</p>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
const name = ref('')
const message = ref('')

watch(name, (newName) => {
  message.value = `Hello, ${newName}!`
})
</script>   
<style scoped>
.container {
  text-align: center;
  margin-top: 40px;
}
</style> -->

<template>
  <div class="watch-example">
    <h2>Watch Example</h2>
    <input type="text" v-model="name" placeholder="Enter your name..." />
    <p>Current name: {{ name }}</p>
    <p>Message: {{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const name = ref('')
const message = ref('')
// Theo doi su thay doi cua name
watch(name, (newValue, oldValue) => {
  console.log(`Name Change: ${oldValue} to ${newValue}`)
  if (newValue.trim()) {
message.value = `Hello, ${newValue}!`
  } else {
    message.value = ''
  }
})
</script>


<style scoped>
.watch-example {
  text-align: center;
  margin-top: 30px;
}
input {
  padding: 6px 12px;
  margin: 4px;
}
</style>
