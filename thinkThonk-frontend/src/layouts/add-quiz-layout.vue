<template>
    <el-header style="padding: 0px;">
        <Header></Header>
    </el-header>
    <el-main class="container">
        <router-view>

        </router-view>

    </el-main>
</template>

<script setup>
import Header from '../components/header.vue'
</script>

<style>
.container{
    display: grid;
    place-items: center;
}
</style>