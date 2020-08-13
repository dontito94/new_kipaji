import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import userApi from '../api/user'

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
  actions: { // = methods, lets make all api calls with actions
    fetchMessage ({commit}) {
      return new Promise((resolve, reject) => {
        // make api call
        userApi.getMessage(message => {
          commit('setMessage', message)
        })
        resolve()
      })
    }
  },
  mutations: {
    setMessage (state, message) {
      state.message = message
    }
  }
})
