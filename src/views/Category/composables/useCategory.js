// 封装分类数据业务相关代码
import { onMounted, ref } from "vue";
import { getCategoryAPI } from "../../../apis/category";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export function useCategory() {
    const route = useRoute();
    const getCategoryData = ref({});
    const getCategory = async (id = route.params.id) => {
    // 路由传参
    const res = await getCategoryAPI(id);
    getCategoryData.value = res.result;
    };
    onMounted(() => {
    getCategory();
    });
    // 解决路由缓存问题
    // 当路由参数变化时重新发送 分类接口数据
    onBeforeRouteUpdate((to,from,next)=>{
        // console.log('路由变化了');
        // banner数据是共用的不需要重新发送
        // 获取最新的路由参数 发送请求
        getCategory(to.params.id);
        next()
    })

    return {
        getCategoryData
    }
}
