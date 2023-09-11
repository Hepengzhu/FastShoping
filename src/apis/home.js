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


// 获取人气推荐
  export const getHotAPI = ()=>{
    return httpInstance({
      url:'/home/hot'
    })
  }