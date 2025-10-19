<template>
  <div class="point">
    <h2>Score: {{ point }}</h2>
    <button @click="increase">Increase</button>
    <button @click="reset">Reset</button>
    <button @click="decrease">Decrease</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// reactive
const point = ref(0)

// event process
function increase() {
  point.value++
}

function reset() {
  point.value = 0
}

function decrease() {
  point.value--
}
</script>

<style scoped>
.point {
  text-align: center;
  margin-top: 60px;
}

button {
  margin: 10px;
  padding: 8px 16px;
  font-size: 1rem;
  border-radius: 6px;
  border: none;
  background-color: #42b983;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #2c8f6e;
}
</style>
