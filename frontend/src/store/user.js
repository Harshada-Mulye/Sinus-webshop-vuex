import * as API from '../api/index.js';

export default {
    state: () => ({
        loggedIn: false,
        currentUser: null,
        cart: [
            {
                category: "clothes",
                imgFile: "hoodie-ocean.png",
                longDesc: "Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ",
                price: 699,
                shortDesc: "Ocean unisex",
                title: "Hoodie",
                _id: "8PEX0YJrpf8DnNKV",
            }
        ]
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