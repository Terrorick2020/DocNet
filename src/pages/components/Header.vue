<template>
    <header class="wrapper__header">
        <div class="header__conteiner">
            <a href="/" class="conteiner__logo">
                <img class="logo__img"src="../../assets/img/logo.png" alt="logo">
                <div class="logo__text">
                    <h1>Созвездие</h1>
                    <p>Система распределённых реестров</p>
                </div>
            </a>
            <nav class="conteiner__nav" v-if="width_screen > 1024">
                <ul class="nav__list">
                    <li class="list__item" v-for="item in head_content" :key="item.id">
                        <a href="#">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
            </nav>
            <RouterLink class="conteiner__auth" to="/auth" v-if="width_screen > 1024">Регистрация / Вход</RouterLink>
            
        </div>
    </header>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

// Обработка props
const props = defineProps<{
    head_content: any[] // Предполагаю, что это массив
}>()

// Обработка изменения ширины экрана
const width_screen = ref(window.screen.width)
const handleResize = () => {
    width_screen.value = window.screen.width
}
window.addEventListener('resize', handleResize)
</script>

<style lang="scss" scoped>
.wrapper__header {
    width: 100%;
    margin-top: 20px;
    padding-inline: 10%;
    padding-bottom: 20px;
    border-bottom: 3px solid #d00754;

    .header__conteiner {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .conteiner__logo {
            display: flex;
            flex-direction: row;
            justify-content: start;
            gap: 20px;

            .logo__img {
                user-select: none;
                width: 80px;
            }

            .logo__text {
                margin-top: 10px;

                h1 {
                    font-size: 2rem;
                    letter-spacing: -1px;
                }

                p {
                    margin-top: 5px;
                    letter-spacing: -0.5px;
                }
            }
        }

        .conteiner__nav {

            .nav__list {
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 40px;

                .list__item {
                    position: relative;

                    &::after {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: -3px;
                        width: 100%;
                        height: 3px;
                        border-radius: 10px;
                        background: #1db3cd;
                        transform: scaleX(0);
                        transition: transform 0.5s ease;
					}

                    &:hover {
                        color: #1dc7cd;
                        translate: 0 0;

                        &::after {
                            transform: scaleX(1);
                            transform-origin: left;
                        }
                    }
                }
            }
        }

        .conteiner__auth {
            border: 2px solid;
            border-radius: 40px;
            padding: 15px 20px;
            transition: all 0.5s ease;
            // color: #d00754;
            // background: #d00754;

            &:hover {
                translate: 5px -5px;
                color: #d00754;
                box-shadow: -5px 5px 5px #d00754;
                // background: #d00754;
            }
        }
    }
}
</style>