<script setup>
import { onMounted, ref } from "vue";
import { getCategoryAPI } from "../../apis/category";
import { useRoute } from "vue-router";
import { getBannerApi } from "@/apis/home.js";
import GoodsItem from '../Home/components/GoodsItem.vue'
// 获取路由实例
const route = useRoute();
const getCategoryData = ref({});
const getCategory = async () => {
  // 路由传参
  const res = await getCategoryAPI(route.params.id);
  getCategoryData.value = res.result;
};
onMounted(() => {
  getCategory();
});

// 获取 banner 数据 (商品 参数为2)
const bannerList = ref([]);
const getBanner = async () => {
  const res = await getBannerApi({ distributionSite: 2 });
  bannerList.value = res.result;
};
onMounted(() => {
  getBanner();
});
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ getCategoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 轮播图 -->
      <div class="home-banner">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <!-- 商品展示 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="i in getCategoryData.children" :key="i.id">
            <RouterLink to="/">
              <img v-img-lazy="i.picture" />
              <p>{{ i.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="ref-goods" v-for="item in getCategoryData.children" :key="item.id">
        <div class="head">
          <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body">
          <GoodsItem v-for="goods in item.goods" :goods="goods" :key="goods.id"/>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}

.home-banner {
  width: 1240px;
  height: 500px;
  z-index: 98;
  margin: 0 auto;
  img {
    width: 100%;
    height: 500px;
  }
}
</style>