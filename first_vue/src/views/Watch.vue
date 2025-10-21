<!-- DUng khi muon lam side effect, goi API, ghi log, update data, show message when data update
<template>
  <div class="container">
    <h2>Watch Example</h2>
    <input type="text" v-model="name" placeholder="Enter your name" />
    <p>Your name is: {{ name }}</p>
    <p>Message: {{ message }}</p>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
const name = ref('')
const message = ref('')

watch(name, (newName) => {
  message.value = `Hello, ${newName}!`
})
</script>   
<style scoped>
.container {
  text-align: center;
  margin-top: 40px;
}
</style> -->

<!-- <template>
  <div class="watch-example">
    <h2>Watch Example</h2>
    <input type="text" v-model="name" placeholder="Enter your name..." />
    <p>Current name: {{ name }}</p>
    <p>Message: {{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const name = ref('')
const message = ref('')
// Theo doi su thay doi cua name
watch(name, (newValue, oldValue) => {
  console.log(`Name Change: ${oldValue} to ${newValue}`)
  if (newValue.trim()) {
message.value = `Hello, ${newValue}!`
  } else {
    message.value = ''
  }
})
</script>


<style scoped>
.watch-example {
  text-align: center;
  margin-top: 30px;
}
input {
  padding: 6px 12px;
  margin: 4px;
}
</style> -->
<template>
  <section>
    <h3>Watch examples</h3>

    <div>
      <p>Count: {{ count }}</p>
      <button @click="count++">Tăng</button>
      <button style="margin-left:8px" @click="count = 0">Reset</button>
    </div>

    <div style="margin-top:12px">
      <label>Người: <input type="text" v-model="user.name" placeholder="Nhập tên của bạn" /></label>
      <p>Tên: {{ user.name }}</p>
      <p>Hobbies: {{ user.hobbies.join(', ') }}</p>
      <button @click="addHobby">Thêm hobby</button>
    </div>

    <div style="margin-top:12px">
      <p>Status: {{ status }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'

const count = ref(0)
const status = ref('idle')
const user = reactive({ 
  name: 'Mai', hobbies: ['reading'] 
})
function addHobby(){
  user.hobbies.push (`hobby ${user.hobbies.length + 1}`)
}
// 1) Watch một ref đơn giản
watch(count, (newVal, oldVal) => {
  console.log('count changed', oldVal, 'to', newVal)
  status.value = `count = ${newVal}`
}, { 
  immediate: true
 })

// 2) Watch một thuộc tính trong object bằng getter
watch(() => user.name, (newName, oldName) => {
  console.log(`Name changed: ${oldName} 'to' ${newName}`)
})

// 3) Deep watch (theo dõi mọi thay đổi trong object)
watch(user, (newUser) => {
  console.log('User changed', JSON.stringify(newUser))
}, { 
  deep: true 
})

// 4) Watch với side-effect bất đồng bộ + onInvalidate để hủy
let currentReq = 0
watch(count, (newVal, _oldVal, onInvalidate) => {
  const reqId = ++currentReq
  status.value = 'loading...'

  // mô phỏng request bằng setTimeout
  const timer = setTimeout(() => {
    if (reqId === currentReq) status.value = `processed ${newVal}`
  }, 800)

  // nếu watcher chạy lại trước khi timer hoàn thành -> hủy timer
  onInvalidate(() => clearTimeout(timer))
})

</script>

<style scoped>
section { 
  padding:12px; 
  border:1px solid #ddd;
   border-radius:6px;
    }
</style>