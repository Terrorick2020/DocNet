<template>
    <div class="main-documents__body">
        <ul class="document__list">
            <li v-for="elem in data" :key="elem.id" class="list__elem">
                <div>
                    <p>{{ elem.title }}</p>
                </div>
                <button>
                    <p>Перейти</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                    </svg>
                </button>
                
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

const data = [
    {
        id: 0,
        title: 'Приказ ВЛКСМ',
        date: ''
    },
    {
        id: 1,
        title: 'Приказ ВЛКСМ',
        date: ''
    },
    {
        id: 2,
        title: 'Приказ ВЛКСМ',
        date:  ''
    }
]
</script>

<style lang="scss">
.main-documents__body {
    @include Flex( row );
    width: 100%;

    .document__list {
        @include Flex;
        width: 80%;
        padding: 40px 20px;
        gap: 20px;

        .list__elem {
            padding: 5px 10px;
            border-radius: 20px;
            width: 100%;
            height: 80px;
            border: 2px solid white;
            @include FlexRow;

            button {
                padding: 20px 10px;
                @include ItemLink( 5px );
                background: transparent;
                height: 20px;

                p {
                    background: transparent;
                }

                svg {
                    background: transparent;
                }
            }
        }
    }
}
</style>