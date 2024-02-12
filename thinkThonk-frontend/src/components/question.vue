<template>
    <div class="question-container">

            <p class="question">{{ question.question }}</p>
            <el-button @click="addRes(0)" style="padding: 0px;" class="answer" color="black" plain>{{ question.answers[0] }}</el-button>
            <el-button @click="addRes(1)" style="padding: 0px;" class="answer" color="black" plain>{{ question.answers[1] }}</el-button>
            <el-button @click="addRes(2)" style="padding: 0px;" class="answer" color="black" plain>{{ question.answers[2] }}</el-button>
            <el-button @click="addRes(3)" style="padding: 0px;" class="answer" color="black" plain>{{ question.answers[3] }}</el-button>

        <div class="nav-btn-container">
            <el-button v-if="active>0" @click="emit('previous')" class="answer" style="width: 200px;" color="black" plain>Previous</el-button>
            <el-button @click="emit('next')" class="answer" style="width: 200px;" color="black" plain>Next</el-button>
        </div>
        
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import {quizStore} from '../stores/quiz.js'

const props = defineProps(['question', 'active'])

const store = quizStore()
function addRes(index){
    let answeredCorrect=false

    if(index === props.question.indexOfTheCorrectAnswer){
        answeredCorrect=true
    }

    const obj={
        "question":props.question.question,
        "answeredCorrect":answeredCorrect
    }
    store.addResult(obj)
    console.log(obj)
}

const emit = defineEmits('previous', 'next')

</script>

<style>
    .question-container{
        display: grid;
        place-items:center;
        height: 650px;
    }

    .answer{
        font-size: large; 
        border-color: black;
        width: 400px; 
        height: 50px;
        padding: 0px;
    }


    .nav-btn-container{
        padding-bottom: 30px;
    }
</style>