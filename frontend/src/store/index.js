import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '../api/index.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async getProducts() {
      const response = await API.getProducts()
      console.log(response);
    },
    async registerUser(context, payload){

      const response = await API.registerUser(payload);
      console.log(response);

      console.log(context);
    },
  },
  modules: {
  }
})
