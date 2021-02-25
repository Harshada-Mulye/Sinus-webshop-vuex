export default {
    state: () => ({
        loggedIn: false
    }),
    mutations: {
        openLogin(state) {
            state.loggedIn = true
        },
        closeLogin(state) {
            state.loggedIn = false
        }
    },
    actions: {
        openLogin(context) {
            context.commit("openLogin")
        },
        closeLogin(context) {
            context.commit("closeLogin")
        }
    }
}