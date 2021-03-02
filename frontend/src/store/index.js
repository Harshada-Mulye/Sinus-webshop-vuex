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
    },
    deleteProduct(state, payload) {
      state.products = state.products.filter(product => product._id !== payload);
    }
  },
  actions: {
    async getProducts(context) {
      const response = await API.getProducts()
      context.commit('getProducts', response)
    },
    async deleteProduct(context, payload) {
      await API.deleteProduct(payload)
      context.commit("deleteProduct", payload)
    },
    async addProduct(context, payload) {
      const response = await API.addProduct(payload)
      context.commit("addNewProduct", payload)
      console.log(response)
    },
    async getSingleProduct(context, payload) {
      const response = await API.getSingleProduct(payload)
      return response
    }
  },
  modules: {
    user: user
  }
})
