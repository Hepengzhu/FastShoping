// 封装banner轮播图相关业务代码
import { ref,onMounted } from "vue";
import { getBannerApi } from "@/apis/home.js";

// 获取 banner 数据 (商品 参数为2)
export function useBanner(){
    const bannerList = ref([]);
    const getBanner = async () => {
    const res = await getBannerApi({ distributionSite: 2 });
    bannerList.value = res.result;
    };
    onMounted(() => {
    getBanner();
    });
    return {
        bannerList
    }
}