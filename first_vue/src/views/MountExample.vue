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
<!-- 
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
 -->
<template>
  <section>
    <h3>Mount Example</h3>

    <p>Seconds: {{ seconds }}</p>
    <button @click="toggleTimer">{{ running ? 'Stop' : 'Start' }}</button>

    <p style="margin-top:8px">Window width: {{ width }}</p>
    <p style="margin-top:8px; font-style:italic">Nhấn phím "r" để đặt Seconds = 0</p>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// trạng thái đơn giản
const seconds = ref(0)
const running = ref(true)
const width = ref(window.innerWidth)

let timerId = null

// bắt đầu timer
function startTimer() {
  if (timerId == null) {
    timerId = setInterval(() => { seconds.value++ }, 1000)
    running.value = true
  }
}

// dừng timer
function stopTimer() {
  if (timerId != null) {
    clearInterval(timerId)
    timerId = null
    running.value = false
  }
}
function toggleTimer() {
  if (running.value) stopTimer()
  else startTimer()
}

// cập nhật chiều rộng cửa sổ
function onResize() {
  width.value = window.innerWidth
}

// xử lý phím 'r' để reset
function onKeydown(e) {
  if (e.key === 'r') {
    seconds.value = 0
  }
}

// khi component mount => đăng ký side-effect (timer + listeners)
onMounted(() => {
  startTimer()
  window.addEventListener('resize', onResize)
  window.addEventListener('keydown', onKeydown)
})

// khi unmount => phải gỡ hết để tránh chạy ngầm / leak
onUnmounted(() => {
  stopTimer()
  window.removeEventListener('resize', onResize)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
section { 
  padding:12px; 
  border:1px solid #ddd;
   border-radius:6px;
    }
button { 
  margin-top:6px; 
  }
</style>