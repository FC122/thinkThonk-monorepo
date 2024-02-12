import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const quizStore = defineStore('quiz', {

  state:()=>{
    return{
      quiz:{},
      results:[],
      user:{}
    }
  },
  actions:{
    setQuiz(obj) {
      this.quiz=obj
    },
    resetResult(){
      this.results.pop()
    },
    addResult(obj){
      this.results.push(obj)
    },
    removeLastResult(){
      this.results.pop()
    },
    setUser(user){
      this.user=user
    },
    getUser(){
      return this.user
    }
  }
})
