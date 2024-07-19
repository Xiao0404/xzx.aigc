// sidebar 模块的共享状态

import { defineStore } from 'pinia'
// 一个文件就是一个状态模块

export const useSidebarStore = defineStore('sidebar',{
        // 有点类似计算属性
        state:() =>{
            return {
                Collapse: false
            }
        },
        actions:{
                // 状态的改变
                handleCollapse(){
                    this.Collapse =!this.Collapse
                }
        }
})
