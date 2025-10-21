<!-- <template>
  <div class="point">
    <h2>Score: {{ point }}</h2>
    <button @click="increase">Increase</button>
    <button @click="reset">Reset</button>
    <button @click="decrease">Decrease</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// ref
const point = ref(0)

// event process
function increase() {
  point.value++
}

function reset() {
  point.value = 0
}

function decrease() {
  point.value--
}
</script>

<style scoped>
.point {
  text-align: center;
  margin-top: 60px;
}

button {
  margin: 10px;
  padding: 8px 16px;
  font-size: 1rem;
  border-radius: 6px;
  border: none;
  background-color: #42b983;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #2c8f6e;
}
</style> -->
<template>
  <section>
    <h3>Ref lesson</h3>
    <p>Count: {{ count }}</p>
    <button @click="increment">Tăng</button>
    <button style="margin-left:8px" @click="reset">Đặt lại</button>
    <div style="margin-top:12px">
      <label>Tên:
        <input v-model="name" />
      </label>
      <p>Xin chào, {{ name }}!</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'


const count = ref(0)
function increment() {
  //tăng giá trị count, thay đổi sẽ tự cập nhật template 
  count.value++
}
function reset() {
  count.value = 0
}
//tạo reactive string, khi dùng v-model trong template, nên trong template dùng trực tiếp {{name}} thay vì name.value
const name = ref('Khách')
</script>

<style scoped>
section { padding: 12px; border: 1px solid #ddd; border-radius: 6px; }
</style>