<template>
  <el-alert v-show="showError" :title="message" type="error" @close="showError = false" />

  <el-form :model="form" :ref="loginForm" label-width="80px">
    <h1 style="margin-bottom: 20px;">Login:</h1>
    <el-form-item>
      Username:
      <el-input v-model="form.username" placeholder="Enter your username"></el-input>
    </el-form-item>
    <el-form-item>
      Password:
      <el-input v-model="form.password" type="password" placeholder="Enter your password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">Login</el-button>
    </el-form-item>
  </el-form>
</template>
  
<route lang="yaml">
    meta:
        layout: add-quiz-layout
</route>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { quizStore } from '../stores/quiz.js'

const store = quizStore()
const showSuccess = ref(false);
const showError = ref(false);
const loginForm = ref(null);
const message = ref('')
const form = ref({
  username: '',
  password: ''
});
const router = useRouter();

const login = async () => {

  const data = {
    username: form.value.username,
    password: form.value.password
  };
  try {
    const response = await axios.post('http://localhost:3000/api/login', data);
    if (response.data.message === 'Login successful') {
      router.push('/add-quiz');
      localStorage.setItem('user', JSON.stringify(data));
      store.setUser(data);
    } else {
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    message.value = 'Invalid credentials';
    showError.value = true;
  }
};
</script>
  
<style>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f5f7fa;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.login-button {
  width: 100%;
}
</style>
  