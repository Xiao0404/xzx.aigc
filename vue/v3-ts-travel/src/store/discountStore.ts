import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { DiscountInfo } from '../types/discount'


export const useDiscountStore = defineStore('discount', () => {
    const discountInfo = ref<DiscountInfo>([
        {
            id: 1,
            title: '10% off on all products',
            region: 'All',
            cover: 'URL_ADDRESS'

        },
        {
            id: 2,
            title: '20% off on all products',
            region: 'All',
            cover: 'URL_ADDRESS'
        }
    ])

    return {
        discountInfo
    }
})