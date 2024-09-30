<template>
    <div class="main__auth">
        <AuthForm :authFormContent="authFormContent" />
    </div>
</template>

<script>
import AuthForm from './AuthForm.vue';

const authFormContent = {
    title: 'Регистрация',
    content: [
        {
            type: 'text',
            label: 'name'
        },
        {
            type: 'password',
            label: 'Пароль'
        },
    ]
}
</script>

<style lang="scss">
.main__auth {
    width: 35vw;
    height: 40vw;
    border-radius: 20px;
    padding: 40px 20px;
    border: 2px solid white;
    box-shadow: -10px 10px 5px rgba(255, 255, 255, 0.4)
}
</style>
