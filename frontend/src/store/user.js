import * as API from '../api/index.js';

export default {
    state: () => ({
        loggedIn: false,
        currentUser: null
    }),
    mutations: {
        openLogin(state) {
            state.loggedIn = true
        },
        closeLogin(state) {
            state.loggedIn = false
        },
        updateCurrentUser(state, payload) {
            state.currentUser = payload
            console.log(state.currentUser)
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
            const response = await API.getUser()
            context.commit("updateCurrentUser", response.data)
        },
        async getUser() {
            const response = await API.getUser()
            /* Console log kan tas bort sen */
            console.log(response.data)
        },
        async getOrders() {
            const response = await API.getOrders()
            console.log(response.data)
        },
        async postOrder(context, payload) {
          const response = await API.postOrder(payload);
          console.log(response);
        }
    }
}