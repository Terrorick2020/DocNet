<template>
    <div class="main__scope">
        <h1 class="scope__title">Преимущества системы:</h1>
        <div class="scope__list">
            <div class="scope__item"></div>
            <div class="scope__item"></div>
            <div class="scope__item"></div>
        </div>
    </div>
</template>

<style lang="scss">
.main__scope {
    margin-bottom: 100px;

    .scope__title {
        @include Title;
    }

    .scope__list {
        margin-top: 50px;
        @include Flex( row, space-between, center );

        .scope__item {
            width: 30%;
            height: 200px;
            background-color: #f0f0f0;
            border-radius: 5px;
            margin-bottom: 20px;
        }
    }
}
</style>