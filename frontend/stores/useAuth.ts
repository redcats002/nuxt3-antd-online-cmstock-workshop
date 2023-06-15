import { message } from "ant-design-vue";
import { FetchingStatus } from "~/models/FetchingStatus"
import { Session } from "~/models/session.model"
import { User } from "~/models/user.model"

export const useAuth = () => {
    const fetchingStatus = ref<FetchingStatus>(FetchingStatus.init);
    const session = reactive<Session>({ isLoggedIn: false })
    const api = useApi()

    const restoreSession = () => {
        console.log('restoring session')
        const token = localStorage.getItem(server.TOKEN_KEY)
        const username = localStorage.getItem(server.USERNAME)

        if (token && username) {
            session.isLoggedIn = true
            session.username = username
        } else {
            session.isLoggedIn = false
        }
        console.log(session)
    }


    const login = async (user: User) => {
        try {

            fetchingStatus.value = FetchingStatus.fetching
            await new Promise((resolve) => setTimeout(resolve, 1000))
            const result = await api.login(user)

            if (result == true) {
                session.username = user.username
                session.isLoggedIn = true
                fetchingStatus.value = FetchingStatus.success
                message.success('Login successful')
                return await navigateTo('/stock', { redirectCode: 301, },)


            } else {
                session.isLoggedIn = false
                fetchingStatus.value = FetchingStatus.failed
                message.error('Login Failed')
            }
            console.log('login success')
            console.log(session)

        } catch (e) {
            session.isLoggedIn = false
            fetchingStatus.value = FetchingStatus.failed
            message.error('Something went wrong')
        }
    }

    const register = async (user: User) => {
        try {
            fetchingStatus.value = FetchingStatus.fetching
            await new Promise((resolve) => setTimeout(resolve, 1000))
            const result = await api.register(user)
            if (result == true) {
                fetchingStatus.value = FetchingStatus.success
                message.success('Register successful')
                return await navigateTo('/login', { redirectCode: 301, },)

            } else {
                fetchingStatus.value = FetchingStatus.failed
                message.error('Register Failed')
            }
        } catch (e) {
            fetchingStatus.value = FetchingStatus.failed
            message.error('Something went wrong')
        }
    }

    const logout = async () => {
        localStorage.clear()
        session.isLoggedIn = undefined as any
        session.username = undefined
        message.success('Logout successful')
        return await navigateTo('/login', { redirectCode: 301, },)

    }

    const isLoading = () => fetchingStatus.value == FetchingStatus.fetching

    return {
        restoreSession,
        session, logout, login, register, fetchingStatus, isLoading
    }
}