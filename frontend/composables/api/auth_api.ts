import type { User } from '~/models/user.model'
import { server } from '~/utils/constants'
import { useFetcher } from '~/composables/useFetcher'

const { fetch } = useFetcher()

const login = async (values: User) => {
    const result = await fetch(server.LOGIN_URL,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }
    )
    if (result.data.result == 'ok') {
        localStorage.setItem(server.USERNAME, values.username)
        localStorage.setItem(server.TOKEN_KEY, result.data.token)
        navigateTo('/stock')
        return true
    }
    // alert('Login Failed')
    return false
}

const register = async (values: User) => {
    const result = await fetch(server.REGISTER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
    if (result.data.result == 'ok') {
        navigateTo('/login')
        return true
    }
    return false
}

export default {
    login,
    register
}
