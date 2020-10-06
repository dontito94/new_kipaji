import userApi from '../api/user'

export default { // = methods, lets make all api calls with actions
  fetchMessage ({commit}) {
    return new Promise((resolve, reject) => {
      // make api call
      userApi.getMessage(message => {
        commit('setMessage', message)
      })
      resolve()
    })
  }
}
