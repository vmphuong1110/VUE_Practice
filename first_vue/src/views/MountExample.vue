<!--
- Khoi tao (setup() tao du leu, dinh nghia bien
- Render/Mounted onMounted() ,component da hien thi ra giao dien
- Huy onUnmounted(), component bi xoa khoi DOM 
-->
<!-- <template>
  <div class="mount-example">
    <h2>Mount Example</h2>
    <p>Check the console for mount and unmount messages.</p>
    <button @click="toggleShow">
      {{ show ? 'Unmount Component' : 'Mount Component' }}
    </button>

    <div v-if="show" class="mounted-component">
      <h3>Mounted Component</h3>
      <p>This component is currently mounted.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref(false)

const toggleShow = () => {
  show.value = !show.value
}

onMounted(() => {
  console.log('Component mounted')
})

onUnmounted(() => {
  console.log('Component unmounted')
})
</script>

<style scoped>
.mount-example {
  text-align: center;
  margin-top: 30px;
}
button {
  padding: 6px 12px;
  margin: 4px;
}
</style> -->

<template>
  <div class="lifecycle">
    <h2>Component survivor {{ seconds }} seconds</h2>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const seconds = ref(0)
let timer: number

// Mounted
onMounted(() => {
  console.log('Mounted')
  timer = setInterval(() => {
    seconds.value++
  }, 1000)
})

// Unmounted
onUnmounted(() => {
  console.log(' Unmounted')
  clearInterval(timer)
})
</script>

<style scoped>
.lifecycle {
  text-align: center;
  margin-top: 40px;
  font-size: 18px;
}
</style>

