<script setup>
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue';
import LayoutFixed from './components/LayoutFixed.vue';
</script>
<template>
    <div>
        <!-- Nav -->
        <LayoutNav></LayoutNav>
        <!-- Header -->
        <LayoutHeader></LayoutHeader>
        <!-- 吸顶组件 -->
        <LayoutFixed></LayoutFixed>
        <!-- 二级路由出口 -->
        <router-view></router-view>
        <!-- Footer -->
        <LayoutFooter></LayoutFooter>
    </div>
</template>