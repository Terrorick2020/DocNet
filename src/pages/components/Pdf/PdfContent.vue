<template>
    <div class="main__pdf">
        <embed  src="../../../assets/pdf/1.pdf" frameborder="4" width="800" height="500" class="pdf__content"></embed >
    </div>
</template>

<style lang="scss">
.main__pdf {
    margin: 100px 0;
    @include Flex;

    .pdf__content {
        width: 70%;
        height: 500px;
    }
}
</style>