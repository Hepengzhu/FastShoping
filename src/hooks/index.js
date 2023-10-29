// hooks 封装逻辑，提供响应式数据。
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
// 数据懒加载函数
export const useLazyData = (apiFn) => {
    // 需要
    // 1. 被观察的对象
    // 2. 不同的API函数
    const target = ref(null)
    const result = ref([])
    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }], observerElement) => {
        if (isIntersecting) {
          stop()
          // 调用API获取数据
          apiFn().then(data => {
            result.value = data.result
            console.log('请求了');
          })
        }
      }
    )
    // 返回--->数据（dom,后台数据）
    // 需要在指定模板中使用 ref="target" 绑定元素
    return { target, result }
  }