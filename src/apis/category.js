import httpInstance from '../utils/http'

// 一级分类
export function getCategoryAPI(id){
    return httpInstance({
        url:'/category',
        params:{
            id
        }
    })
}

// 二级分类
/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => {
    return httpInstance({
      url:'/category/sub/filter',
      params:{
        id
      }
    })
  }