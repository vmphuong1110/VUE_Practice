<template>
 <section>
     <div>
    <!-- <label><input type="checkbox" v-model="visible" /> Hiện đoạn greeting (v-show)</label> -->
    <button @click="toggle()">{{ visible ? 'Ẩn' : 'Hiện' }}</button>
    <p v-show="visible" style="margin-top:8px">Xin chào đây là <strong>v-show</strong>.</p>
    <p style="font-size:12px; color:#666">v-show ẩn bằng CSS, DOM vẫn tồn tại.</p>
  </div>
 </section>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
function toggle() {
  visible.value = !visible.value
}
</script>

<style scoped>
p { 
    transition: opacity .2s;
     }
section { 
  padding:12px; 
  border:1px solid #ddd;
   border-radius:6px;
    }
</style>