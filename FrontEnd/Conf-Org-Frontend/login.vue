<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page</title>
  <!-- Vue.js CDN -->
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
  <style>
  body {
    background-color: #fff;
    font-family: Arial, sans-serif;
  }
  h1 {
    color: #3366ff; /* Blue color */
    font-weight: bold; /* Bold font */
  }
  input[type="text"],
  input[type="password"]{
    color: #000000; /* Black color */
  }
</style>
</head>
<body>
  <div id="app">
    <!-- Welcome message -->
    <h1>{{ welcomeMessage }}<h1>
    <!-- Login form -->
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="passowrd" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <!-- Forget Password link -->
    <p>Forgot Password? <a href="#">Reset Password</a></p>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <p>{{ note }}</p> 
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
  <script>
    new Vue({
      el: '#app',
      data: {
          welcomeMessage:"Welcome to RSEAA25!"
          username: '',
          password: '',
          errorMessage: '',
          note: "If you need assistance to log in, please contact our IT support!",   
      },
      methods: {
          login() {
              //Simulate database authentication
              if (this.username === 'validUsername' && this.password === 'validPassword'){
                  this.authenticated = true;
                  alert('Login successful!');
                  //Redirect to another page 
              } else {
                  this.errorMessage = 'Invalid username or password, please try again!';
              }
          } 
        }
      });
  </script>
</body>
</html>