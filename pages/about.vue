<template>
        <div class="container">
            <h1>เกี่ยวกับเรา</h1>
            <img src="/image/about.svg" alt="shopping">
        </div>
</template>

<script setup>
useHead({
    title: 'เกี่ยวกับเรา',
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
