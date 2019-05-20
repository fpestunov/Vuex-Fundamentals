import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

new Vuex.Store({
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
    }
  },

  mutations: {
    setProducts () {
      // update products
    }
  }
})
