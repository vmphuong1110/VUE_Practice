<!-- tao bien phu thuoc vao du lieu khac
<template>
  <div>
    <h2>Computed Example</h2>
    <p>First Name: {{ firstName }}</p>
    <p>Last Name: {{ lastName }}</p>
    <p>Full Name (computed): {{ fullName }}</p>
    <input v-model="firstName" placeholder="Enter First Name" />
    <input v-model="lastName" placeholder="Enter Last Name" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const firstName = ref('')
const lastName = ref('')

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})
</script>

<style scoped>
h2 {
  color: #42b983;
  font-size: 2rem;
}
</style> -->
<template>
  <div class="point">
    <h2>Status</h2>

    <p>Score: {{ point }}</p>
    <p>Status: <strong>{{ status }}</strong></p>

    <button @click="increase">+10</button>
    <button @click="rest">-10</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const point = ref(50)

// Computed tu dong tinh status dua tren point
const status = computed(() => {
  if (point.value >= 80) return 'Strong'
  if (point.value >= 50) return 'Normal'
  if (point.value > 0) return 'Weak'
  return 'Died'
})

// Hàm xử lý
function increase() {
  point.value += 10
}

function rest() {
  point.value -= 10
}
</script>

<style scoped>
.point {
  text-align: center;
  margin-top: 50px;
}

button {
  margin: 10px;
  padding: 8px 16px;
  border-radius: 6px;
  background-color: #42b983;
  border: none;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #2c8f6e;
}
</style>
