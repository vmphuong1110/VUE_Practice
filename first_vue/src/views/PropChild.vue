<template>
  <div>
    <h4>{{ title }}</h4>
    <p v-if="showDesc">{{ desc }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: 'Tiêu đề mặc định' },
  desc: { type: String, default: '' },
  showDesc: { type: Boolean, default: true }
})
</script>

<style scoped>
h4 { 
    margin:0 0 6px 0; 
    }
</style>