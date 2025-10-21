<template>
 <section>
     <div>
    <button @click="mode = 'view'">View</button>
    <button @click="mode = 'edit'">Edit</button>
    <button @click="mode = 'none'">None</button>

    <div v-if="mode === 'view'">Chế độ VIEW</div>

    <div v-else-if="mode === 'edit'">Chế độ EDIT
    <div><input v-model="editText" /></div>
    <div>Giá trị: {{ editText }}</div>
    </div>
    <div v-else>Chế độ NONE</div>
  </div>
 </section>
</template>

<script setup>
import { ref } from 'vue'
const mode = ref('view')
const editText = ref('Nội dung')
</script>

<style scoped>
div { 
    margin-top:8px; 
    font-weight:600; 
    }
section { 
  padding:12px; 
  border:1px solid #ddd;
   border-radius:6px;
    }
</style>