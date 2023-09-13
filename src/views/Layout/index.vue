<script setup>
import {onMounted} from 'vue'
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue';
import LayoutFixed from './components/LayoutFixed.vue';
// 引入pinia
import { useCategoryStore } from '../../stores/category';
const categoryStory = useCategoryStore()
onMounted(() => {
    // 触发导航栏的请求函数
    categoryStory.getCategory()
})
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
        <!-- 解决路由缓存问题   
            1.添加key 破坏复用机制 强制销毁重建  (key不同新旧虚拟dom对比时会替换)
            2.使用路由钩子函数  路由变换时重新发送请求
        -->
        <!-- <router-view :key="$route.fullPath"></router-view> -->

        <router-view></router-view>
        <!-- Footer -->
        <LayoutFooter></LayoutFooter>
    </div>
</template>