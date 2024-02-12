<template class="app">
  <router-view></router-view>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

router.push('/homepage')
</script>

<style> *,
 *::after,
 *::before {
   margin: 0;
   padding: 0;
 }
</style>
