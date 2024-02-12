<template>
    <el-alert v-show="showSuccess" style="position:fixed; width: 500px; top: 0; right: 0; z-index: 11; margin-top: 60px;"
        title="success alert" type="success" />
    <el-alert v-show="showError" style="position:fixed; width: 500px; top: 0; right: 0; z-index: 11; margin-top: 60px;"
        title="error alert" type="error" />

    <div class="add-quiz-container">
        <div style="display: flex; justify-content: center; margin: 20px">
            <p style="font-size: 30px; font-weight: bold;">Create your own Quiz</p>
        </div>
        <p>Quiz name</p>
        <el-input style="margin-bottom: 20px; margin-top: 5px;" v-model="quizName" placeholder="Please input" clearable />
        <p>Number of Questions</p>
        <el-input-number style="margin-bottom: 20px; margin-top: 5px;" v-model="inputQuestionNumber" :min="1" :max="10"
            @change="handleChange" />
        <p>Theme</p>
        <el-input style="margin-top: 5px;" v-model="inputSubjects" placeholder="Please input" clearable />

        <div style="display: flex; justify-content: center; margin: 100px;">
            <el-button @click="createQuiz()"
                style=" background-color: transparent;font-size: large; border-color: black; width: 300px; height: 50px;"
                color="black" plain>
                Create a Quiz
            </el-button>
        </div>
    </div>
</template>

<route lang="yaml">
    meta:
        layout: add-quiz-layout
</route>

<script setup>
import { ElLoading } from 'element-plus'

import { ref } from 'vue'
import axios from 'axios';
import { toRaw } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const showSuccess = ref(false)
const showError = ref(false)

const inputQuestionNumber = ref(0)
const inputSubjects = ref('')
const quizName = ref('')

function createQuiz() {
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    const data = {
        questionNumber: inputQuestionNumber.value,
        subjects: inputSubjects.value
    };
    axios.post('http://localhost:3000/api/quiz', data)
        .then(response => {
            console.log('Response:', response.data);
            let data = JSON.parse(localStorage.getItem('q'))
            if (data == null) {
                let quizes = []
                quizes.push(toRaw({
                    "name": quizName.value,
                    "questions": response.data.quiz
                }))
                localStorage.setItem('q', JSON.stringify(toRaw(quizes)))
            } else {
                data.push(toRaw({
                    "name": quizName.value,
                    "questions": response.data.quiz
                }))
                localStorage.setItem('q', JSON.stringify(toRaw(data)))
            }
            loading.close()
            showSuccess.value = true
            router.push('/quiz-list')
        })
        .catch(error => {
            showError.value = true
            console.error('Error:', error);
        });
    //handle inputs
    //make api with next call api
    //save to local storage
}
</script>

<style>
.add-quiz-container {
    border: 4px solid black;
    height: 700px;
    width: 500px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 50px;
    background-color: #6a9bab;
    justify-content: center;
    padding: 30px;
}
</style>