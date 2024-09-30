<template>
    <div class="main__form">
        <AuthContent />
    </div>
</template>

<script setup lang="ts">
import AuthContent from './AuthContent.vue';
</script>

<style lang="scss">
.main__form {
    width: 30vw;
    height: 40vw;
    padding: 6% 4%;
    border: 2px solid white;
    border-radius: 20px;
    box-shadow: -5px 5px 5px rgba(255, 255, 255, 0.5);
}
</style>