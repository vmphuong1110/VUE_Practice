<template>
  <div>
    <button @click="highlight = !highlight">{{ highlight ? 'Bỏ highlight' : 'Highlight' }}</button>
    <p :class="{ highlighted: highlight, large: highlight }" style="margin-top:8px">
      Đoạn văn với class động.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const highlight = ref(false)
</script>

<style scoped>
.large { font-size: 1.2em; }
.highlighted { background: rgb(0, 0, 0); padding:6px; border-radius:4px; }
</style>