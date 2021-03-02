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
        },
        REMOVE_QUANTITY(state,product){
            console.log("hello")
           // state.cart.quantity -=product.quantity
           let productInCart = state.cart.find(item => {
           
            return item.product.title === product.product.title
           //let productInCart = state.cart.find(item => {
            //return item.product.title === product.title
        })
        if (productInCart) {
            console.log("hej")
            console.log(productInCart.product.title)
            var text = productInCart.quantity
           
            var text1 =parseInt(text) 
            console.log(text1) 
            if(text1 > 0) {
            text1 -=1

        console.log(text1) 
        //state.cart.quantity === text1
        productInCart.quantity = text1
        state.cart.quantity =text1
        return
    }

        }
    },
    ADD_QUANTITY(state,product){
        console.log("hello")
       // state.cart.quantity -=product.quantity
       let productInCart = state.cart.find(item => {
       
        return item.product.title === product.product.title
       //let productInCart = state.cart.find(item => {
        //return item.product.title === product.title
    })
    if (productInCart) {
        console.log("hej")
        console.log(productInCart.title)
        var text = productInCart.quantity
        var text1 =parseInt(text) + 1
    console.log(text1) 
    //state.cart.quantity === text1
    productInCart.quantity = text1
    state.cart.quantity =text1

    }
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
            const response =await API.postOrders(payload);
            console.log(response)
            
        },
        addToCart(context, { product, quantity }) {
            context.commit('ADD_TO_CART', { product, quantity })

        },
        removeProductFromCart({ commit }, product) {

            commit('REMOVE_FROM_CART', product)

        },
        decrementQuantity({commit},product){
            commit('REMOVE_QUANTITY',product)
        },
        incrementQuantity({commit},product){
            commit('ADD_QUANTITY',product)
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