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
    getProducts(state, payload) {
      state.products = payload
    },
    addNewProduct(state, payload) {
      state.products.push(payload)
    }
  },
  actions: {
    async getProducts(context) {
      const response = await API.getProducts()
      context.commit('getProducts', response)
    },
    async deleteProduct(id) {
      const response = await API.deleteProduct(id)
      console.log(response)
    },
    async addProduct(context, payload) {
      await API.addProduct(payload)
      context.commit("addNewProduct", payload)
    }
  },
  modules: {
    user: user
  }
})
