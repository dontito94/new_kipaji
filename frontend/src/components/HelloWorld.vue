<template>
  <div class="hello">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import user from '../api/user'
import store from '../store/index'

export default {
  name: 'HelloWorld',

  computed: {
    message () {
      return store.getters.getMessage
    }
  },
  created () {
    user.getMessage(message => {
      store.commit('setMessage', message)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
