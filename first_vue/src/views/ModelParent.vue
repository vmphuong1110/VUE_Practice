<template>
  <section>
    <h3>v-model custom (child emits update:modelValue)</h3>
    <ModelChild v-model="name" />
    <p>Giá trị bind: {{ name }}</p>
    <button @click="name = ''">Clear</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ModelChild from './ModelChild.vue'

const name = ref('Phuong')
</script>

<style scoped>
section { 
    padding:12px; 
    border:1px solid #ddd; 
    border-radius:6px; 
}
</style>