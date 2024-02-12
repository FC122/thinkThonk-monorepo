<template>
    <el-steps :active="active" class="steps">
      <el-step v-for="question in questions" ></el-step>
    </el-steps>
    <h1>{{ store.quiz.name }}</h1>
    <question :active="active" @previous="goToPrevious()" @next="goToNext()" :question="questions[active]"></question>
  </template>
  
  <script setup>
    import {ref} from 'vue'
    import question from './question.vue';
    import {quizStore} from '../stores/quiz';
    const store = quizStore()
    const questions = store.quiz.questions
    const active = ref(0)
    const emit = defineEmits('show-result')
    function goToPrevious(){
      active.value--
    }
    function goToNext(){
      active.value++
      console.log(active.value, questions.length)
      if(active.value == questions.length){
        emit('show-result')
      }
    }
  </script>
  
<style>
.steps{
  width: 450px;
  padding: 30px;
  background-color: black;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
</style>