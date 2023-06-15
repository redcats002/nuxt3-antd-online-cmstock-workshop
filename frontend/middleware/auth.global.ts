import { useAuth } from "~/stores/useAuth"

export default defineNuxtRouteMiddleware(async (to, from) => {


    const router = useRouter();
    const authStore = useAuth();

    const checkAuthByRoute = () => {
        const secureRoute = ref(['/stock', '/report', '/'])
        const unsecureRoute = ref(['/login', '/register'])
        if (secureRoute.value.includes(to.path)) {
            // secure route
            if (authStore.session.isLoggedIn) {
                return
            } else {
                console.log('not logged in')
                return router.push('/login')
            }
        } else {
            // unsecure route
            if (authStore.session.isLoggedIn && unsecureRoute.value.includes(to.path)) {
                return router.push('/stock')
            } else if (authStore.session.isLoggedIn) {
                return
            }
            else {
                console.log('not logged in')
                return
            }

        }
    }
    const checkAuthByLayout = () => {
        if (to.meta.layout === 'default') {
            // secure
            if (authStore.session.isLoggedIn) {
                return
            } else {
                console.log('not logged in')
                return router.push('/login')
            }
        } else {
            // unsecure
            if (authStore.session.isLoggedIn) {
                return router.push('/stock')
            }
            else {
                console.log('not logged in')
                return
            }
        }
    }


    if (process.client) {

        authStore.restoreSession();
        if (to.meta.layout === 'default') {
            // secure
            if (authStore.session.isLoggedIn) {
                return
            } else {
                return router.push('/login')
            }
        } else {
            // unsecure
            if (authStore.session.isLoggedIn) {
                return router.push('/stock')
            }
            else {
                return
            }
        }


    }









})



