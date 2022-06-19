<template>

  <v-app>
    <NavBar2/>
    <v-main>
      <v-card width="550" id="signUpCard">
        <v-card-title class="justify-center">Start betting on the weather today!</v-card-title>
        <v-card-text>
          <v-text-field label="E-Mail" outlined color="info" clearable v-model="auth.email"/>
          <v-text-field label="Username" outlined color="info"></v-text-field>
          <v-text-field :type="showPassword ? 'text' : 'password'"
                        color="info" outlined label="Password" v-model="auth.password"/>
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword" color="info" outlined label="Repeat your password"
            v-model="auth.passwordRepeat"></v-text-field>
        </v-card-text>


        <v-card-actions class="justify-center">
          <v-btn id="createButton" @click="signUp">Create my account</v-btn>
        </v-card-actions>
        <v-card-actions class="justify-center">
          <v-btn id="signInButton" @click="routeToLogin">Already have an account?</v-btn>
        </v-card-actions>
      </v-card>


      <v-snackbar timeout="10000" id="snackbar" v-model="showSnackbar" color="info">
        {{ userMsg }}
        <template v-slot:action="{ attrs }">
          <v-btn dark text v-bind="attrs" @click="showSnackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>


    </v-main>

  </v-app>


</template>

<script>
import Login from "@/pages/Login";

export default {
  name: "SignUp",


  data: () => ({
    showSnackbar: false,
    userMsg: "",
    showPassword: false,
    auth: {
      email: "",
      password: "",
      passwordRepeat: "",
    }


  }),


  methods: {
    signUp() {
      let that = this;
      if (this.auth.password !== this.auth.passwordRepeat) {
        alert("Passwords do not match")
      } else {
        this.$fire.auth.createUserWithEmailAndPassword(this.auth.email, this.auth.password)
          .catch(function (e) {
            switch (e.code) {
              case "auth/email-already-in-use":
                that.showSnackbar = true;
                that.userMsg = "Email already in use!";
                break;
              case "auth/invalid-email":
                that.showSnackbar = true;
                that.userMsg = "Invalid email address!";
                break;
              case "auth/weak-password":
                that.showSnackbar = true;
                that.userMsg = "Please use a stronger password";
                break;
              default:
                that.showSnackbar = true;
                that.userMsg = e.message;
                break;
            }
          })

      }

    },
    routeToLogin() {
      this.$router.push('Login')
    }
  }
}


</script>

<style scoped>

#signUpCard {
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}

#signInButton {
  color: #de962f;

}

#createButton {
  color: forestgreen;

}


</style>
