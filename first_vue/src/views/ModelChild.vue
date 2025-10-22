<template>
  <input :value="modelValue" @input="onInput" />
</template>

<script setup>
const props = defineProps({ modelValue: String })
const emit = defineEmits(['update:modelValue'])
function onInput(e) {
  // emit giá trị viết hoa (theo bài tập)
  emit('update:modelValue', e.target.value.toUpperCase())
}
</script>

<style scoped>
input { 
    padding:6px; 
    }
</style>