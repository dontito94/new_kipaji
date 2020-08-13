import userApi from '../../api/user'

export default {
  namespaced: true,
  state: {
    message: 'Welcome to Client Main Page'
  },
  actions: {
    fetchMessage ({commit}) {
      return new Promise((resolve, reject) => {
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
}
