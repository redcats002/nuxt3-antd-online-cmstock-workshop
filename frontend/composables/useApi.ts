import * as authApi from '~/composables/api/auth_api';
import * as stockApi from '~/composables/api/stock_api'
export const useApi = () => {
    return {
        ...authApi, ...stockApi
    }
}
