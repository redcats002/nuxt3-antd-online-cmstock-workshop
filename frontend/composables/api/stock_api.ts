import { useFetcher } from '~/composables/useFetcher'
import { server } from '~/utils/constants'

const { fetch } = useFetcher()
export const getProducts = () => {
    return fetch(server.PRODUCT_URL, {
        method: 'GET',
    });
};


export const getProductByKeyword = (keyword: any) => {
    return fetch(server.PRODUCT_URL + `/name/${keyword}`, {
        method: 'GET',
    });
};

export const getProductById = (id: any) => {
    return fetch(server.PRODUCT_URL + `/id/${id}`, {
        method: 'GET',
    })
}

export const addProduct = (data: FormData) => {
    return fetch(server.PRODUCT_URL, {
        method: 'POST',
        body: data,
    })
}

// in data have id
export const updateProduct = (data: any) => {
    return fetch(server.PRODUCT_URL, {
        method: 'PUT',
        body: data,
    })
}
export const deleteProduct = (id: string) => {
    return fetch(`${server.PRODUCT_URL}/id/${id}`, {
        method: 'DELETE',
    })
}


