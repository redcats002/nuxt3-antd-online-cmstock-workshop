import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { FetchingStatus } from '~/models/FetchingStatus'



export const useStockStore = defineStore('stock', () => {
    const fetchingStatus = ref<FetchingStatus>(FetchingStatus.init)
    const setLoading = (status: FetchingStatus) => {
        fetchingStatus.value = status
    }
    const isLoading = () => {
        return fetchingStatus.value === FetchingStatus.fetching
    }
    return {
        setLoading, fetchingStatus,isLoading
    }

})
