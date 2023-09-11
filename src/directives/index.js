// 定义懒加载 插件

// 监听元素是否在可视窗口
import { useIntersectionObserver } from '@vueuse/core'

export  const lazyPlugin = {
            install(app){
                // 懒加载指令逻辑
                // 自定义全局指令  指令名  配置项(指令周期函数)
                app.directive('img-lazy',{
                    mounted(el,binding){
                        // el:指令绑定的元素
                        // binding: binding.value 指令等号后面的表达式的值
                        // console.log(el,binding.value);
                        const fg = true
                        // 监听的元素  ()=>{}
                        const {stop} = useIntersectionObserver(el,([{ isIntersecting }]) => {
                            // isIntersecting : 是否出现在可视窗口
                            //   console.log(isIntersecting);
                            if(isIntersecting && fg){
                                // 进入可视区域  给元素的src 一个有效的地址
                                el.src = binding.value
                                // 第一次赋值后 结束监听 避免重复触发
                                stop()
                            }
                        },)
                    }
                })        
            }
    }