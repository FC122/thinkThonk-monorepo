<template>
    <div class="question-container">
        <start @start-quiz="startQuiz" v-if="showStart" :title="title" :text="text" :btext="btext"></start>
        <questions @show-result="showResult()" v-if="showQuestion"></questions>
        <results :score="score" :name="name" v-if="showResults"></results>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import start from '../components/start.vue'
import results from '../components/results.vue'
import questions from '../components/questions.vue'

const props = defineProps(['showStart', 'showQuestion', 'showResults', 'title', 'text', 'btext'])
const emit = defineEmits(['start-quiz'])

//get quiz from storage plug in the data
function startQuiz(){
 emit('start-quiz')
}

function showResult(){
    emit('show-result')
}


</script>

<style scoped>
.question-container{
    border: 4px solid black;
    height: 750px;
    width: 500px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 50px;
    background-color:#81b6c8;
    justify-content: center;
}
</style>