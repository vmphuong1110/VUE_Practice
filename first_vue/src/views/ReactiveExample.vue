<template>
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
</style>