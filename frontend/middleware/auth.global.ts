
export default defineNuxtRouteMiddleware(async (to, from) => {
    const { fetch, isLoading } = useFetcher()
    setAuthorizationHeader('YOUR_TOKEN_HERE')
    const loggedIn = true

    if (to.path === '/login' && !loggedIn) {
        abortNavigation("You MUST be logged in")

    }
})



