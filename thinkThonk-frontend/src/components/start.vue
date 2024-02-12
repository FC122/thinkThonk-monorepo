<template >
    <div class="quiz-start-container">

        <p class="quiz-title">{{ title }}</p>
     
        <p class="quiz-text">
            {{ text }}
        </p>

        <div class="button-container">
            <el-button @click="startQuizEmit" style=" background-color: transparent;font-size: large; border-color: black; width: 300px; height: 50px;" color="black" plain>
                {{ btext }} 
            </el-button>
        </div>
  
    </div>
</template>

<script setup>
import { quizStore } from '../stores/quiz'
const store = quizStore()

const emit = defineEmits('start-quiz')
const props = defineProps(['quizName','title', 'text', 'btext'])

function startQuizEmit(){
    emit('start-quiz')
}
</script>

<style>
.quiz-start-container{
    display: grid;
    justify-content: center;
}

.quiz-start-container p{
    text-align: center;
}

.button-container{
    justify-self: center;
}

.quiz-title{
    font-size: 30px;
    font-weight: bold;

}

.quiz-text{
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
}
</style>