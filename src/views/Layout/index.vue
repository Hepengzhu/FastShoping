<script setup>
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue';
</script>
<template>
    <div>
        <!-- Nav -->
        <LayoutNav></LayoutNav>
        <!-- Header -->
        <LayoutHeader></LayoutHeader>
        <!-- 二级路由出口 -->
        <router-view></router-view>
        <!-- Footer -->
        <LayoutFooter></LayoutFooter>
    </div>
</template>