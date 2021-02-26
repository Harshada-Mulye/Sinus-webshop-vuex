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
      context.commit('GET_PTODUCTS',response)
    },
    async deleteProduct(id) {
      const response = await API.deleteProduct(id)
      console.log(response)
    }
  },
  modules: {
    user: user
  }
})
