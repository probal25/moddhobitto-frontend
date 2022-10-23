<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <div class="form-group">
      <label for="phone_number">Phone Number</label>
      <input type="text" class="form-control" v-model="phone_number" id="phone_number" placeholder="Enter Phone number">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" v-model="password" id="password" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',

  data() {
    return {
      phone_number: '',
      password: ''
    }
  },

  methods : {
    handleSubmit() {
      const model_data = {
        phone: this.phone_number,
        password: this.password
      }
      AuthenticationService.signinApi(model_data);
      this.$router.push('/categories');
    }
  }
}
</script>