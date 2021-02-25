import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '../api/index.js';
import user from "./user.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    GET_PTODUCTS(state, payload) {
      state.products = payload
    },
  },
  actions: {
    async getProducts(context) {
      const response = await API.getProducts()
      console.log(response);
     
      context.commit('GET_PTODUCTS',response)
    },
    async getOrder(context) {
      const response = await API.getOrder()
      console.log(response);
     
      context.commit('GET_ORDERS',response)
    },
    async postOrders(context,payload)
    {
      const response = await API.postOrder(payload);
      console.log(response);

      console.log(context);
    }
  },
  modules: {
    user: user
  }
})
