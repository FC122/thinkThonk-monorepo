<template>

    <el-header style="padding: 0px;">
        <Header></Header>
    </el-header>

    <el-main class="container">
          <div style="display: block; text-align: center;">
            <h1 style="margin: 20px;">Quiz List</h1>
            <p style="text-align: start; padding-bottom: 5px;">Search:</p>
            <el-input style="padding-bottom: 10px;" v-model="input" placeholder="Search for your quiz" />

            <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto;">
              <li @click="startQuiz(quiz)"  class="infinite-list-item" v-for="quiz in sortedQuizes" :key="quiz.name">{{ quiz.name+"\t"+quiz.questions.length}}</li>
            </ul>

          </div>
      
        <div style="display: grid; padding: 25px;   justify-content: center;">
            <quiz @start-quiz="" 
            @show-result="showResult()" 
            :show-start="showStart" 
            :show-question="showQuestions" 
            :show-results="showResults"
            btext="Choose a quiz from the list"></quiz>  
        </div>
        
    </el-main>

</template>

<script setup>
import Header from '../components/header.vue';
import quiz from '../components/quiz.vue'
import {reactive, ref} from 'vue'
import { quizStore } from '../stores/quiz.js'
import { computed } from 'vue';

const count = ref(0)
const load = () => {
        count.value += 2
    }
const showStart = ref(true);
const showQuestions = ref(false);
const showResults = ref(false);

const input =ref('')

const quizes = JSON.parse(localStorage.getItem('q'))
const sortedQuizes = computed(() => {
  if (!input.value) {
    return quizes;
  }
  return quizes.filter((quiz) => quiz.name.toLowerCase().includes(input.value.toLowerCase()));
});
console.log(quizes)

const store = quizStore()
store
function startQuiz(quiz){
  showStart.value=false
  showQuestions.value=true
  showResults.value=false
  store.setQuiz(quiz)
  store.resetResult()
}

function showResult(){
  showResults.value=true
  showQuestions.value=false
}
</script>

<style>
.container{
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
}
@media (max-width: 1400px) {
  .container{
    display: grid;
    grid-template-columns: auto ;
}
}

.infinite-list {
  height: 1000px;
  margin: 0;
  list-style: none;
  background-color: #81b6c8;
  border: 3px solid black;
  width: 600px;
  display: grid;
  justify-content: center;
}
.infinite-list .infinite-list-item {
  height: 50px;
  padding-left: 0px;
  padding-right: 0px;
  margin: 10px;
  color: black;
  width: 450px;
  border-radius: 15px;
  border: 2px solid;
  height: 200px;
  transition: box-shadow 0.3s ease;

}
.infinite-list-item {
  background-color: #458eae;
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  width: 500px;
}
.infinite-list-item:hover{
  box-shadow: 0 0 10px rgb(230, 230, 230), /* horizontal offset, vertical offset, blur radius, color */
              0 0 20px rgb(230, 230, 230), /* you can layer multiple shadows */
              0 0 30px rgb(230, 230, 230),
              0 0 40px rgb(230, 230, 230);
              background-color:rgb(230, 230, 230);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}


</style>