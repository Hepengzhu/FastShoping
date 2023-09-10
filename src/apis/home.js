import httpInstance from '../utils/http'

// banner 部分

export function getBannerApi(){
    return httpInstance({
        url:'/home/banner'
    })
}