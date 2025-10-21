<template>
  <div>
    <input v-model="color" placeholder="Nhập màu (ví dụ: red hoặc #09f)" />
    <p :style="{ color: color, marginTop: '8px' }">Văn bản đổi màu theo binding style.</p>
    <div style="margin-top:8px">
      <label>Size: <input type="range" min="12" max="32" v-model="fontSize" /></label>
    </div>
    <p :style="{ color: color, marginTop: '8px', fontSize: fontSize + 'px' }">
      Văn bản đổi màu và cỡ chữ theo binding style.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const color = ref('#222')
const fontSize = ref(16)
</script>

<style scoped>
input { margin-top:6px; margin-right:8px; }
</style>