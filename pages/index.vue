<template>
        <div class="container">
            <h1>หน้าแรกของเว็บไซต์</h1>
            <img src="/image/shopping.svg" alt="shopping">
        </div>
</template>

<script setup>
useHead({
    title: 'หน้าแรกของเว็บไซต์',
    meta: [
        {
            name: 'description',
            content: 'ร้านค้าออนไลน์, สินค้าทุกชนิด, ราคาถูก'
        }
    ]
})
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
img {
    width: 500px;
    height: 500px;
}
</style>
