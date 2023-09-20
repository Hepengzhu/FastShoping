import httpInstance from '@/utils/http.js'

export function getDetail(id) {
    return httpInstance({
        url:'/goods',
        params:{
            id
        }
    })
}