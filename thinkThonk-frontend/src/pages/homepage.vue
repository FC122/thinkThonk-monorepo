<template>
  <quiz @start-quiz="startQuiz" 
  @show-result="showResult()" 
  :show-start="showStart" 
  :show-question="showQuestions" 
  :show-results="showResults"
  :title="'Your first Quiz'"
  :text="'Start this generic quiz to see how the quiz system works'"
  :btext="'Start your first Quiz'"
  ></quiz> 
  <h1 v-if="isUserLoggedIn"></h1>
</template>

<route lang="yaml">
meta:
    layout: homepage-layout
</route>

<script setup>
import { ref, computed } from 'vue';
import { quizStore } from '../stores/quiz.js'
import quiz from '../components/quiz.vue'
const store = quizStore()

const isUserLoggedIn = computed(() => {
   let user = JSON.parse(localStorage.getItem('user'))
  store.setUser(user)
})

const showStart = ref(true);
const showQuestions = ref(false);
const showResults = ref(false);
store
function startQuiz(){
  showStart.value=false
  showQuestions.value=true
  store.setQuiz({
    "name":"First Quiz",
    "questions":[{"question":"What is the boiling point of water?","answers":["50°C","75°C","100°C","125°C"],"indexOfTheCorrectAnswer":2},{"question":"What is the chemical symbol for gold?","answers":["Go","Au","Ag","Cu"],"indexOfTheCorrectAnswer":1},{"question":"What is the largest planet in our solar system?","answers":["Mars","Saturn","Jupiter","Earth"],"indexOfTheCorrectAnswer":2},{"question":"What is the study of plants called?","answers":["Zoology","Botany","Biology","Geology"],"indexOfTheCorrectAnswer":1},{"question":"What is the process of converting light energy into chemical energy called?","answers":["Respiration","Photosynthesis","Digestion","Combustion"],"indexOfTheCorrectAnswer":1},{"question":"What is the freezing point of water?","answers":["0°C","-10°C","10°C","20°C"],"indexOfTheCorrectAnswer":0},{"question":"What is the largest species of shark?","answers":["Great White Shark","Hammerhead Shark","Whale Shark","Tiger Shark"],"indexOfTheCorrectAnswer":2},{"question":"What is the process of water turning into vapor called?","answers":["Melting","Evaporation","Condensation","Sublimation"],"indexOfTheCorrectAnswer":1},{"question":"What is the SI unit for measuring electric current?","answers":["Ampere","Volt","Ohm","Watt"],"indexOfTheCorrectAnswer":0},{"question":"What is the smallest planet in our solar system?","answers":["Mercury","Venus","Pluto","Neptune"],"indexOfTheCorrectAnswer":0}]
  })
}

function showResult(){
  showResults.value=true
  showQuestions.value=false
}
</script>

<style>

</style>