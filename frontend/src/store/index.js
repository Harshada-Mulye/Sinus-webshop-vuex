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
  },
  actions: {
    async getProducts(context) {
      const response = await API.getProducts()
      context.commit('getProducts', response)
    },
    async deleteProduct(context, payload) {
      await API.deleteProduct(payload)
      await context.dispatch("getProducts")
    },
    async addProduct(context, payload) {
      await API.addProduct(payload)
      await context.dispatch("getProducts")
    },
    async getSingleProduct(context, payload) {
      const response = await API.getSingleProduct(payload)
      return response
    },
    async editProduct(context, payload) {
      await API.editProduct(payload)
      await context.dispatch("getProducts")
    }
  },
  modules: {
    user: user
  }
})
