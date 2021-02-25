import * as API from '../api/index.js';

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
        },
        async createUser(context, payload) {
            await API.createUser(payload);
        },
        async login(context, payload) {
            await API.login(payload)
        },
        async getUser() {
            const response = await API.getUser()
            /* Console log kan tas bort sen */
            console.log(response.data)

        }
    }
}