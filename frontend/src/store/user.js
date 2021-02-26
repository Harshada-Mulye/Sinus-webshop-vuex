import * as API from '../api/index.js';

export default {
    state: () => ({
        loggedIn: false,
        currentUser: null,
        cart:[]
        
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
        },
        ADD_TO_CART(state,{product,quantity}){
            let productInCart=state.cart.find(item=>{
                return item.product.title===product.title
            })
            if(productInCart){
                productInCart.quantity+=quantity
               
                
            }
            else{
            state.cart.push({
                product,
                quantity
            })
        }
    },
      REMOVE_FROM_CART(state,product){
        state.cart=state.cart.filter(item=>{
            return item.product.title!==product.title
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
        },
       addToCart(context,{product,quantity})
        {
         context.commit('ADD_TO_CART',{product,quantity})
        
    },
   removeProductFromCart({commit},product){
    
        commit('REMOVE_FROM_CART',product)
    
    }
    },
    getters:{
         cartTotalPrice(state){
            let total=0;
            state.cart.forEach(item => {
                total+=item.product.price*item.quantity
                
            });
            return total
        }
    }
}