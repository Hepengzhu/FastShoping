<script setup>
import HomeBanner from './components/HomeBanner.vue';
import HomeCategory from './components/HomeCategory.vue';
import HomeHot from './components/HomeHot.vue';
import HomeProduct from './components/HomeProduct.vue';
import HomeNew from './components/HomeNew.vue'
import HomePanel from './components/HomePanel.vue';
</script>
<template>
    <div class="container">
      <HomeCategory />
      <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <HomeProduct />
    <!-- 测试 组件 -->
    <HomePanel title="新鲜好物" sub-title="jjjjjjjjj"></HomePanel>
</template>
<style scoped>
 
</style>