<template>
    <div>
        <header>
            <nav>
                <h1 class ="logo"> Jetturong Shop</h1>
                <NuxtLink to="/">หน้าแรก</NuxtLink> |
                <NuxtLink to="/about">เกี่ยวกับเรา</NuxtLink> |
                <NuxtLink to="/products">สินค้าทั้งหมด</NuxtLink> |
                <!-- <NuxtLink to="/products/detail">รายละเอียดสินค้าทั้งหมด</NuxtLink> | -->
                
            </nav>
        </header>
    </div>
    <div>
        <slot></slot>
    </div>
</template>

<script setup>
</script>

<style scoped>
nav {
    margin: 10px auto;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #333; /* ตรงนี้จะต้องเห็นสี */
}

nav a {
    color: rgb(250, 243, 243);
    text-decoration: none;
    margin-left: 12px;
    font-size: 18px;
    padding: 10px;
}
.logo {
    color: white;
    font-size: 24px;
    margin-right: auto;
}
</style>
