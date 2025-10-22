<template>
  <section>
    <h3>Props: Parent → Child</h3>
    <PropChild title="Hello từ Parent" :desc="desc" :show-desc="showDesc" />
    <div style="margin-top:8px">
      <input v-model="desc" placeholder="Thay đổi desc từ parent" />
      <label style="margin-left:8px"><input type="checkbox" v-model="showDesc" /> Hiện desc</label>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import PropChild from './PropChild.vue'

const desc = ref('Mô tả ban đầu')
const showDesc = ref(true)
</script>

<style scoped>
section { 
    padding:12px;
    border:1px solid #ddd; 
    border-radius:6px; 
}
input { 
    margin-right:8px; 
    }
</style>