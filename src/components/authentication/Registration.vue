<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <h3>Register</h3>
      <div class="form-group">
        <label for="phone_number">Phone Number</label>
        <input type="text" class="form-control" id="phone_number" v-model="phone_number" placeholder="Enter Phone">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
      </div>
      <div class="form-group">
        <label for="password_check">Confirm Password</label>
        <input type="password" class="form-control" id="password_check" v-model="confirm_password"
               placeholder="Confirm Password">
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Registration',

  // data-model
  data() {
    return {
      phone_number: '',
      password: '',
      confirm_password: ''
    }
  },

  methods: {
    handleSubmit() {

      const data = {
        phone: this.phone_number,
        password: this.password
      };
      AuthenticationService.signupApi(data);
    }
  }
}

</script>
