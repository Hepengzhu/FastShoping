<script setup>
import {ref,onMounted} from 'vue';
import {getCategoryFilterAPI,getSubCategoryAPI} from '@/apis/category.js';
import {useRoute} from 'vue-router';
import GoodsItem from '../Home/components/GoodsItem.vue';

// 获取 
const route = useRoute()
const categoryData = ref([])
const getCategoryData = async()=>{
  const res = await getCategoryFilterAPI(route.params.id)
  categoryData.value = res.result
}
onMounted(() => {
  getCategoryData()
})

// 获取基础列表渲染
const goodsList = ref([])
  // 接口参数
const reqData = ref({
  categoryId:route.params.id,
  page: 1,
  pageSize:20,
  sortField:'publishTime'
})

const getGoodsList = async()=>{
  const res = await getSubCategoryAPI(reqData.value)
  goodsList.value = res.result.items
}

onMounted(() => {
  getGoodsList()
})

// tab 切换
const tabChange = ()=>{
  reqData.value.page = 1
  getGoodsList()
}

// 加载更多
const disabled = ref(false) //是否禁用加载
const load = async()=>{
  console.log('加载更多了');
  // 获取下一页数据
  reqData.value.page++
  const res = await getSubCategoryAPI(reqData.value)
  // 如果还有数据  （最后会返回一个空的列表）
  if(res.result.items.length != 0) {
    goodsList.value = [...goodsList.value,...res.result.items]
    return
  }
  // 禁止加载
  disabled.value = true
}
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryData.parentId}` }">{{ categoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- v-infinite-scroll： 监听划到底部触发事件 -->
    <div class="sub-container" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
      <!-- elementui Tabs  -->
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body">
         <!-- 商品列表-->
         <GoodsItem v-for="(goods) in goodsList" :key="goods.id" :goods="goods"></GoodsItem>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>