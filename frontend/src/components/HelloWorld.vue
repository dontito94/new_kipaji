<template>
  <div class="hello">
    <img
      v-if="loading"
      src="../assets/preloader.gif"
      alt="preloader">
    <h1 v-else>{{ message }}</h1>
  </div>
</template>

<script>
import store from '../store/index'

export default {
  name: 'HelloWorld',
  data () {
    return {
      loading: false
    }
  },

  computed: {
    message () {
      return store.getters.getMessage
    }
  },
  created () {
    this.loading = true
    store.dispatch('fetchMessage').then(() => {
      this.loading = false
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
