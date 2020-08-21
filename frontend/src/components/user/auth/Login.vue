<template>
  <div class="py-4">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
              <form action="#">

                <div class="form-group row">
                  <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                  <div class="col-md-6">
                    <input id="email" name="email" type="email" v-model="form.email" class="form-control">
                  </div>
                </div>

                <div class="form-group row">
                  <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                  <div class="col-md-6">
                    <input id="password" name="password" type="password" v-model="form.password"  class="form-control">
                  </div>
                </div>

                <div class="form-group row mb-0">
                  <div class="col-md-8 offset-md-4">
                    <button class="btn btn-primary">
                      Login
                    </button>
                  </div>
                </div>
              </form>
              <router-link to="/register">Register</router-link>
              <router-link to="/">Go Home</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Login",
      data() {
        return {
          form: {
            email: '',
            password: ''
          }
        }
      }
    }
</script>

<style scoped>

</style>
