import { useAuth } from "~/stores/useAuth"

export default defineNuxtRouteMiddleware(async (to, from) => {
    // const router = useRouter()
    const authStore = useAuth()
    // console.log(authStore.session.isLoggedIn)
    to.matched.some((record) => (record.meta.layout == 'default' ? true : false))

    if (to.meta.layout === 'default') {
        console.log('secure route')
        // secure route
        if (authStore.session.isLoggedIn) {
            abortNavigation()
        } else {
            console.log('not logged in')
            // navigateTo('/login');
        }
    } else {
        // unsecure route
        console.log('unsecure route')
        if (authStore.session.isLoggedIn) {
            // router.push('/stock')
            // navigateTo('/stock');
        } else {
            console.log('not logged in')
            // abortNavigation()
        }
    }


})



