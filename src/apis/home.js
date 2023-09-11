import httpInstance from '../utils/http'

// banner 部分

export function getBannerApi(){
    return httpInstance({
        url:'/home/banner'
    })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const getNewAPI = () => {
    return httpInstance({
      url:'/home/new'
    })
  }


/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
  export const getHotAPI = ()=>{
    return httpInstance({
      url:'/home/hot'
    })
  }

/**
 * @description: 获取产品列表
 * @param {*}
 * @return {*}
 */ 
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}

// 热门品牌   后台没有相关接口  该接口无效
export const getBrandAPI = ()=>{
  return httpInstance({
    url:' /home/brand'
  })
}