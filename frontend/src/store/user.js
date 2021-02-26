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
            console.log(state.currentUser)
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
<<<<<<< HEAD
      REMOVE_FROM_CART(state,product){
        state.cart=state.cart.filter(item=>{
            return   item.product.title!==product.title
         
        })
        }
},
=======
>>>>>>> b75cbdbc3299cb363a2e79ecb624a8a98b02b53d
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
            console.log(response.data)
            context.commit("updateOrders", response.data)
        },
        async postOrders(context, payload) {
            const response = await API.postOrders(payload);
            console.log(response);
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