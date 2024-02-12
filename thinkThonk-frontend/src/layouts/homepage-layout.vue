<template>
    <el-header style="padding: 0px;">
        <Header></Header>
    </el-header>
        <el-main class="main-container" style="padding: 0px;">

            <section class="top-section">

                <div class="intro">
                    <p style="font-size:50px;font-weight: bold;">Revolutionary interactive application </p>
                    <el-button @click="openLogin()" style=" margin-top: 20px; margin-bottom: 20px; background-color: transparent;font-size: large; border-color: black; width: 300px; height: 50px;" color="black" plain>Create your first quiz</el-button>
                    <p style="color:aquamarine;">You can create personalized quizzes on the subjects of their choosing with the help of artificial intelligence</p>
                </div>
                
                <div class="visual">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.schemecolor.com%2Fwallpaper%3Fi%3D24156%26og&f=1&nofb=1&ipt=e295e4f21d4075f3b15323f7fdee99b49cdafacc7d4d0633fde6d462961aaefb&ipo=images" alt="image">
                </div>
                
            </section>

            <section class="mid-section">

                <p class="title">About</p>
                <p style="color: aquamarine;">Think Thonk</p>
                <p style="margin-top: 20px;" class="text"> 
                    Think Tonk is a revolutionary interactive application designed for Android mobile devices, empowering users to create personalized quizzes on topics of their choice. Utilizing an advanced artificial intelligence model, the app generates quiz questions, making each quiz unique and challenging. With its user-friendly and intuitive interface, Think Tonk allows users to define various aspects of their quizzes, including the quiz name, number of questions, and desired themes. Based on this input, Think Tonk leverages AI algorithms to create relevant questions, enabling users to test and expand their knowledge across different domains.
                    <br>
                    <br>
                    One of the key features of Think Tonk is the ability to save quizzes directly on the device. This functionality enables users to play quizzes offline, providing entertainment and learning wherever they are. In essence, Think Tonk is a fun, interactive, and educational tool that infuses elements of gaming into the learning process. Whether users are passionate enthusiasts looking to broaden their knowledge or individuals seeking a delightful way to spend their time, Think Tonk offers an opportunity to learn in a fun and innovative manner.
                </p>

            </section>

            <section class="bot-section">


                <div class="how-it-works">
                    <p class="title">How</p>
                    <p style="color: aquamarine;">Think Thonk Works</p>
                    <p style="margin-top: 20px;" class="text">Think Tonk is a revolutionary interactive application designed for Android mobile devices, empowering users to create personalized quizzes on topics of their choice. The app combines advanced artificial intelligence with a user-friendly interface to provide a unique and engaging learning experience.

                    When using Think Tonk, users can define various aspects of their quizzes, including the quiz name, number of questions, and desired themes. The app leverages AI algorithms to generate relevant and challenging quiz questions based on the user's input. This ensures that each quiz is tailored to the user's preferences and provides a valuable learning experience.

                    One of the key features of Think Tonk is the ability to save quizzes directly on the device. This allows users to play quizzes offline, making it convenient for learning and entertainment wherever they are, even without an internet connection. Users can enjoy the quizzes at their own pace and review their performance and progress.

                    Think Tonk seamlessly combines elements of gaming and education, making the learning process enjoyable and engaging. By infusing gaming elements into the quizzes, users are motivated to participate actively and expand their knowledge across different domains. The app offers a delightful way to spend time while also enhancing one's understanding and retention of various topics.

                    Think Tonk is designed to cater to a wide range of users, from passionate enthusiasts looking to broaden their knowledge to individuals seeking a fun and innovative way to learn. The interactive nature of the app fosters curiosity, critical thinking, and knowledge retention, making it an ideal tool for both personal and educational purposes.

                    Overall, Think Tonk is a comprehensive and innovative application that provides a personalized and interactive learning experience through its AI-generated quizzes. By combining user-defined preferences with AI algorithms, the app offers a fun and effective way to enhance knowledge and expand horizons.</p>
                    </div>
                
                <div class="quiz-container">
                    <router-view></router-view>
                </div>
                
            </section>

        </el-main>
</template>

<script setup>
import Header from '../components/header.vue'
import {useRouter} from 'vue-router'
const router = useRouter()
function openLogin(){
router.push('/register')
}
</script>

<style>
.top-section{
    display: grid;
    grid-template-columns: 30% 70%;
}
.intro{
    padding: 50px;
}
.visual{
    display: grid;
    grid-template-columns: auto auto;
    padding: 100px;
    justify-content:center;
}

.mid-section{
    padding: 50px;
    margin: 0px;
    background-color: #0f99bb;
}
.title{
    font-size: 40px;
}
.text{
    font-size: 30px;
    text-align:justify;
}

.bot-section{
    display: grid;
    grid-template-columns: 70% 30%;
    padding: 50px;
}

.quiz-container{
    display: grid;
    justify-content: center;
}

@media (max-width: 749px) {
.top-section{
    display:block;
    font-size: 40px;
}
.text{
    font-size: 20px;
    text-align:justify;
}

.bot-section{
    display: block;
    padding: 50px;
}
}

@media (min-width:750px) and (max-width: 1800px) {
.visual{
    display: block;
    padding: 100px;
    justify-content:end;
}
.text{
    font-size: 20px;
    text-align:justify;
}
.bot-section{
    display: block;
    padding: 50px;
}
}
</style>