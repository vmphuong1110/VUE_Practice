<template>
  <section>
    <h3>Event: Parent / Child</h3>
    <p>Count in parent: {{ count }}</p>
    <EventChild @increment="count += $event" />
    <button @click="count = 0">Reset</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import EventChild from './EventChild.vue'

const count = ref(0)
</script>

<style scoped>
section { 
    padding:12px; 
    border:1px solid #ddd; 
    border-radius:6px; 
    }
</style>