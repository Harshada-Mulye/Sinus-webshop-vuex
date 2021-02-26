import * as API from '../api/index.js';

export default {
    state: () => ({
        loggedIn: false,
        currentUser: null,
        orders: null,
        cart: []

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
        },
        updateOrders(state, payload) {
            state.orders = payload
        },
        ADD_TO_CART(state, { product, quantity }) {
            let productInCart = state.cart.find(item => {
                return item.product.title === product.title
            })
            if (productInCart) {
                productInCart.quantity += quantity


            }
            else {
                state.cart.push({
                    product,
                    quantity
                })
            }
        },
        REMOVE_FROM_CART(state, product) {
            state.cart = state.cart.filter(item => {
                return item.product.title !== product.title
            })
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
            return response
        },
        async getOrders(context) {
            const response = await API.getOrders()
            context.commit("updateOrders", response.data)
        },
        async postOrders(context, payload) {
            await API.postOrders(payload);
        },
        addToCart(context, { product, quantity }) {
            context.commit('ADD_TO_CART', { product, quantity })

        },
        removeProductFromCart({ commit }, product) {

            commit('REMOVE_FROM_CART', product)

        }
    },
    getters: {
        cartTotalPrice(state) {
            let total = 0;
            state.cart.forEach(item => {
                total += item.product.price * item.quantity

            });
            return total
        },
        cartItemCount(state){
            return state.cart.length   
           }
    }
}