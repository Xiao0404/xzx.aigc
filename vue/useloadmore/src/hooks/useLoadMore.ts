// 手写 一个加载更多的 hook   基于 IntersectionObserver 

import {ref, watch}  from 'vue';
import type {Ref} from 'vue';

export  const useLoadMore = (
    // Ref 类
    // HTMLElement  DOM节点
    // HTMLElement | null  ts 联合类型
        nodeRef :Ref<HTMLElement | null>,
        loadMore:() => void 
) => {
        let observer :IntersectionObserver | null = null
        const hasMore = ref(true)
        // 监听最后元素的改变 ， observe 新的元素
        watch(nodeRef, (newNodeRef, oldNodeRef) => {
            // 之前就有值  observer 已经被实例化
            if(oldNodeRef && observer){
                observer.unobserve(oldNodeRef)
            }
            // 第一次
            if(newNodeRef) {
                observer = new IntersectionObserver(([entry]) =>{
                    // 只有一个
                    if(entry.isIntersecting) {
                        loadMore();
                    }
                })
                // 观察最后的节点
                observer.observe(newNodeRef)

            }
})

          watch(hasMore, (value) => { 
                if(observer){
                    // 后面又有了 
                    if(value && nodeRef.value){
                        observer.observe(nodeRef.value)
                    }else{
                        // 直接释放observer 对象 
                        observer.disconnect()
                    }
                }
          })

return {
    hasMore,
    setHasMore: (value:boolean) => {
        hasMore.value = value
    }

}

}


