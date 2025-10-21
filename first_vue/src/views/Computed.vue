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
<!-- <template>
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

// Event process
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
</style> -->
<template>
  <section>
    <h3>Computed lesson</h3>

    <div>
      <p>Count: {{ count }}</p>
      <p>Double (computed): {{ double }}</p>
      <p>Triple KKill(computed): {{ triple }}</p>
      <button @click="increment">Tăng</button>
    </div>

    <hr />

    <div>
      <label>First name: <input v-model="firstName" /></label>
      <label style="margin-left:8px">Last name: <input v-model="lastName" /></label>
      <p>Full name (computed): {{ fullName }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'


const count = ref(0)
function increment() {
   count.value++ 
  }

// read-only computed
const double = computed(() => count.value * 2)
const triple = computed(() => count.value * 3)
// reactive strings cho name
const firstName = ref('')
const lastName = ref('')

// computed
const fullName = computed(() => `${firstName.value} ${lastName.value}`)
</script>

<style scoped>
section {
   padding:12px;
    border:1px solid #ddd;
     border-radius:6px; 
    }
label {
   display:inline-block; 
   margin-top:8px;
    }
</style>