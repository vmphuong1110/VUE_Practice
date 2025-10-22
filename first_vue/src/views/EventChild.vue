<template>
  <button @click="handleClick">Nhấn(child)</button>
</template>

<script setup>
const emit = defineEmits(['increment'])
function handleClick() {
  // phát event kèm payload = 2
  emit('increment', 2)
}
</script>

<style scoped>
button { 
    padding:6px 10px; 
    }
</style>