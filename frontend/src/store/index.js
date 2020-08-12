import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: {
      namespaced: true,
      user
    }
  },
  state: {
    message: ''
  },
  getters: { // = computed properties
    getMessage (state) {
      return state.message
    }
  },
  mutations: {
    setMessage (state, message) {
      state.message = message
    }
  }
})
