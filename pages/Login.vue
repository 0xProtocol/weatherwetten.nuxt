<template>
<v-app>
  <nav-bar/>

  <v-main>
    <v-card outlined id="loginCard">
      <v-card-title class="justify-center">Login to WeatherWetten!</v-card-title>
      <v-card-text>
        <v-text-field color="grey" v-model="auth.email" label="E-Mail" outlined/>
        <v-text-field outlined
                      @keyup.enter="login"
                      color="grey"
                      v-model="auth.password"
                      label="Password"
                      :rules="validatePassword"
                      :type="showPassword ? 'text' : 'password'"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword = !showPassword"/>
      </v-card-text>


      <v-card-actions class="justify-center">
        <button @click="login">Login</button>
        <button @click="routeToSignUp">New here?</button>
      </v-card-actions>
      <v-card-actions class="justify-center">
        <button @click="routeToForgotPassword">Forgot your password?</button>
      </v-card-actions>
    </v-card>

    <v-snackbar timeout="10000" id="snackbar" v-model="showSnackbar" color="red darken-2">
      {{ userMsg }}
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="showSnackbar = false"> <!-- v-bind ???-->
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-main>

  <footer/>
</v-app>
</template>


<script>
export default {
  data(){
    return {
      showPassword: false,
      showSnackbar: false,
      userMsg: "",

      auth: {
        email: "",
        password: ""
      },

      validatePassword: [
        (v) => !!v || "Password is required",
      ],

    }
  },

  name: "Login",

  methods:{
    routeToSignUp(){
      this.$router.push('SignUp') //pushes a new entry into the history stack, when the user clicks the browser back button they will be taken to the specific URL
    },

    //login with email and password
    login(){
      let that = this
      this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
        .then((user) => this.$router.push('Profile')) //pushes a new entry into the history stack, when the user clicks the browser back button they will be taken to the specific URL
      .catch(function (error) {
        switch (error.code) {
          case "auth/wrong-password":
            that.showSnackbar = true;
            that.userMsg = "You entered a wrong password";
            break;
          case "auth/user-not-found":
            that.showSnackbar = true;
            that.userMsg = "No user with the entered email address found";
            break;
          case "auth/user-disabled":
            that.showSnackbar = true;
            that.userMsg = "Your account has been disabled";
            break;
          case "auth/invalid-email":
            that.showSnackbar = true;
            that.userMsg = "Please enter a valid email address";
            break;
          default:
            that.showSnackbar = true;
            that.userMsg = error.message;
        }
      })
    },

    routeToForgotPassword() {
      this.$router.push('forgotPassword') //pushes a new entry into the history stack, when the user clicks the browser back button they will be taken to the specific URL
    },


  }
}
</script>

<style scoped>
button {
  font-size: 17px;
  background: #383636;
  color: #dfdfe8;
  border-radius: 8px;
  padding: 0.05em 0.9em 0.05em 0.9em;
  margin: 2px 2px 0 3px;
}

button:hover {
  background-color: #494646;
}

#loginCard {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  width: 30%;
}

/* responsiveness*/
@media screen and (max-width: 850px) {
  #loginCard {
    width: 85%;
  }
}
</style>
