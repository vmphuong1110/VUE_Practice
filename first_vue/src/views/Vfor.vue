<template>
  <div>
    <input v-model="text" placeholder="Thêm mục" @keyup.enter="add" />
    <button @click="add">Thêm</button>
    <button v-if="items.length > 0" @click="deleteItem">Xóa tất cả</button>
    <ul style="margin-top:8px">
      <li v-for="(items, i) in items" :key="items.id">{{ i + 1 }}. {{ items.text }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const items = ref([{id: 1, text: 'Item A'}, {id: 2, text: 'Item B'}])
const text = ref('')
let nextId = 3
function add() {
  const t = text.value && text.value.trim()
  if (!t) return
//   items.value.push(t)
    items.value.push({id: nextId++, text: t})
  text.value = ''
}
function deleteItem(){
    items.value = []
}
</script>

<style scoped>
input { margin-right:6px; }
</style>