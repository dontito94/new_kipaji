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
  /*  Future organization to secure this file to be overloaded
  *   put these with other require on top
  *   import state from './state'
  *   import getters from './getters'
  *   import actions from './actions'
  *   import mutations from './mutations'
  *   import modules from './modules
  *   add these as vuex options
  *   state: state,
  *   getters: getters,
  *   actions: actions,
  *   mutations: mutations,
  *   modules: modules
  */
})
