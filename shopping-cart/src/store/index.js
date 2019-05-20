import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // ~ like Vue data
    products: []
  },

  getters: { // ~ like Vue computed properties
    productsCount () {
      // ...
    }
  },

  actions: { // ~ like Vue methods
    fetchProducts () {
      // make the call
      // run setProducts mutation
    }
  },

  mutations: {
    setProducts (state, products) {
      // update products
      state.products = products
    }
  }
})
