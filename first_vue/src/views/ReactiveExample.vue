<!-- <template>
    <div class="reactive">
        <h1>My profile</h1>
        <p>Name: {{user.name}}</p>
        <p>Age: {{user.age}}</p>
        <p>Location: {{user.location}}</p>
        <button @click="changeName">Update Name</button>
        <button @click="changeAge">Update Age</button>
        <button @click="changeLocation">Update Location</button>
    </div>
</template>
<script setup lang="ts">
import {reactive} from 'vue'

const user = reactive({
    name: 'Phuong',
    age: 13,
    location: 'Viet Nam'
})

function changeName() {
    user.name = 'Phuong Hi'
}

function changeAge() {
    user.age = 23
}

function changeLocation() {
    user.location = 'Paris'
}

</script>
<style scoped>
.reactive {
    text-align: center;
    margin-top: 30px;
    font-family: Arial, sans-serif;
}
h1{
    color: #42b983;
    font-size: 2rem;
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
    <h3>Reactive lesson</h3>

    <div>
      <label>Tên:
        <input v-model="user.name" />
        <p>Tên tôi là: {{ user.name }}</p>
      </label>
    </div>

    <div style="margin-top:8px">
      <p>Tuổi: {{ user.age }}</p>
      <button @click="increaseAge">Tăng tuổi</button>
      <button style="margin-left: 8px;" @click="decreaseAge">Giảm tuổi</button>
    </div>

    <div style="margin-top:8px">
      <p>Hobbies:</p>
      <ul>
        <!-- Dùng v-for để render -->
        <li v-for="(h, i) in user.hobbies" :key="i">{{ i + 1 }}. {{ h }}</li>
      </ul>
      <button @click="addHobby">Thêm hobby</button>
      <button style="margin-left: 8px;" @click="deleteHobby">Xóa hobby</button>

    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

// tạo object reaktif
// tạo reactive có kiểu User 
const user = reactive({
  name: 'Phương',
  age: 13,
  hobbies: ['reading', 'traveling', 'coding']
})

// thay đổi thuộc tính trực tiếp
function increaseAge() {
  user.age++
}

function decreaseAge() {
  user.age--
}

function addHobby() {
  user.hobbies.push(`hobby ${user.hobbies.length + 1}`)
}
function deleteHobby() {
//   user.hobbies.pop()
    user.hobbies.length=0
}
</script>

<style scoped>
section { padding:12px; border:1px solid #ddd; border-radius:6px; }
</style>