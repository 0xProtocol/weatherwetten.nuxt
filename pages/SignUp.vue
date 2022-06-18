<template>

  <v-app>
    <NavBar2/>
    <v-main>
      <v-card width="550" id="signUpCard">
        <v-card-title class="justify-center">Start betting on the weather today!</v-card-title>
        <v-card-text>
          <v-text-field label="E-Mail" outlined color="info" clearable v-model="auth.email"/>
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


    </v-main>

  </v-app>


</template>

<script>
import Login from "@/pages/Login";

export default {
  name: "SignUp",

  data() {

    return {
      showPassword: false,
      auth: {
        email: "",
        password: "",
        passwordRepeat: "",
      },
    }
  },


  methods: {
    signUp() {
      if (this.auth.password !== this.auth.passwordRepeat) {
        alert("Passwords do not match")
      } else {
        this.$fire.auth.createUserWithEmailAndPassword(this.auth.email, this.auth.password)
          .catch(function (e) {
            switch (e.code) {
              case "auth/email-already-in-use":
                alert("Email already in use!")
                break;
              case "auth/invalid-email":
                alert("Invalid email")
                break;
              case "auth/weak-password":
                alert("You chose a weak password!")
                break;
              default:
                alert(e.message);
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
