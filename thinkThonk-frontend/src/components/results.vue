<template>
    <div class="top-container">
        <p style="font-size: 25px;">{{ store.quiz.name }}</p>
        <p>{{ getCorrectQuestionNumber()+'/'+store.quiz.questions.length }}</p>
    </div>
    <ul v-infinite-scroll="load" class="infinite-list-a" style="overflow: auto;">
        <li  class="infinite-list-item-a" :style="{background: result.answeredCorrect ? '#6febbe' : 'crimson'}" v-for="result in results" :key="result.question">{{ result.question }}</li>
    </ul>
</template>

<script  setup>
    import { reactive, ref, defineProps } from 'vue';
    const count = ref(0)
    const load = () => {
        count.value += 2
    }
    import { quizStore } from '../stores/quiz'
    const store = quizStore()
    const results = store.results
    function getCorrectQuestionNumber(){
        let ctr=0;
        for(let i=0;i<results.length;i++){
            if(results[i].answeredCorrect){
                ctr++;
            }
        }

        return ctr;
    }
</script>

<style>
.infinite-list-a {
  height: 500px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list-a .infinite-list-item-a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding-left: 0px;
  padding-right: 0px;
  margin: 10px;
  color: black;
  width: 450px;
  border-radius: 15px;
  border: 2px solid;
}
.infinite-list-a .infinite-list-item-a + .list-item-a {
  margin-top: 10px;
}
</style>