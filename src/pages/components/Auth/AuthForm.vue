<template>
    <div>
        fdbdrdrb
    </div>
    <form class="auth__form">
        <h1>Регистрация</h1>
        <div v-for="elem, index in props.authFormContent" :key="index">
            <label for="">{{ elem.label }}</label>
            <input :type="elem.type">
        </div>
    </form>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    authFormContent: {
        title: string,
        content: any[]
    }
}>()
</script>

<style lang="scss">
.auth__form {
    width: 100%;
    height: 100%;
}
</style>