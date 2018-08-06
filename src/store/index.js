import Vue from 'vue'
import Vuex from 'vuex'

//API Modules
import cart from './modules/cart'

Vue.use(Vuex)

const state = {}

export default new Vuex.Store({
	state,
  modules: {
    cart,
  }
})