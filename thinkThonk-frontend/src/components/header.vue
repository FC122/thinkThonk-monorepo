<template>
    <el-header class="header">
        <div @click="homepage()" class="title" style="color:white"> Think Thonk</div>
        <div class="button-group">
            <el-button v-if="isUserLoggedIn" @click="quizes()" :dark="true" color="white" plain>Quizzes</el-button>
            <el-button v-if="isUserLoggedIn" @click="addQuiz()" :dark="true" color="white" plain>Add Quizz</el-button>
            <!--el-button @click="github()" :dark="true" color="white" plain>GitHub</el-button-->
            <el-button v-if="!isUserLoggedIn" @click="login()" :dark="true" color="white" plain>Login</el-button>
            <el-button v-if="!isUserLoggedIn" @click="register()" :dark="true" color="white" plain>Register</el-button>
            <el-button v-if="isUserLoggedIn" @click="logout()" :dark="true" color="white" plain>Logout</el-button>
        </div>
    </el-header>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { quizStore } from '../stores/quiz';
import { computed } from 'vue';
const store = quizStore()
const router = useRouter()

const isUserLoggedIn = computed(() => {
    return Object.keys(store.getUser()).length !== 0
})
function homepage() {
    router.push('/homepage')
}

function quizes() {
    router.push('/quiz-list')
}

function addQuiz() {
    router.push('/add-quiz')
}

function github() {
    window.location.href = 'https://github.com/FC122';
}

function login() {
    router.push('/login')

}
function register() {
    router.push('/register')

}

function logout() {
    localStorage.setItem('user', JSON.stringify({}))
    store.setUser({})
    router.push('/homepage')
}
</script>

<style>
.header {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    font-family: Arial, sans-serif;
    position: fixed;
    width: 100%;
    z-index: 10;
}

@media (max-width: 450px) {
    .header {
        display: grid;
        grid-template-columns: auto;
        height: 100px;
    }
}

.title {
    font-size: 30px;
}

.button-group {
    color: gray;
}
</style>