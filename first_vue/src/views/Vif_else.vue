<template>
 <section>
     <div>
    <!-- <button @click="show = !show">{{ show ? 'Ẩn' : 'Hiện' }}</button> -->
    <button @click="toggle()">{{ show ? 'Ẩn' : 'Hiện' }}</button>
    <p>Số lần mở: {{ openCount }}</p>
    <p v-if="show">Đây là nội dung khi <strong>v-if</strong> là true.</p>
    <p v-else>Nội dung thay thế (v-else).</p>
  </div>
 </section>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(true)
const openCount = ref(0)

function toggle() {
  show.value = !show.value
  if (show.value) {
    openCount.value++
  }
}
</script>

<style scoped>
p { 
    margin-top:8px;
     }
section { 
  padding:12px; 
  border:1px solid #ddd;
   border-radius:6px;
    }
</style>