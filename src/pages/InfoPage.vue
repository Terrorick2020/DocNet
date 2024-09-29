<template>
    <Header :head_content="head_content" />
    <main class="wrapper__main box">
        <Intro />
        <ScopeApplication />
        <Advantages />
    </main>
    <Footer />
</template>

<script setup lang="ts">
import Header from './components/Header/Header.vue';
import Intro from './components/Intro.vue';
import ScopeApplication from './components/ScopeApplication.vue';
import Advantages from './components/Advantages.vue';
import Footer from './components/Footer.vue'


const head_content = [
    {
        id: 0,
        name: 'Вступление'
    },
    {
        id: 1,
        name: 'Обновления'
    },
    {
        id: 2,
        name: 'О нас'
    }
]
</script>