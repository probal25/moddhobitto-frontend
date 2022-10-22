<template>
  <form>
    <h3>Login</h3>
    <div class="form-group">
      <label for="phone_number">Phone Number</label>
      <input type="email" class="form-control" id="phone_number" placeholder="Enter Phone number">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login'
}
</script>