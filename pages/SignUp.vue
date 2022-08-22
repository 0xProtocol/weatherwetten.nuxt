<template>

  <v-app>
    <NavBar2/>
    <v-main>
      <v-card outlined id="signUpCard">
        <v-card-text>
          <v-text-field :rules="validateEmail" label="E-Mail" outlined color="grey" clearable v-model="auth.email"/>
          <v-text-field label="Username" outlined color="grey" v-model="username"
                        :rules="validateUserName"></v-text-field>
          <v-text-field :rules="validatePassword" :type="showPassword ? 'text' : 'password'"
                        color="grey" outlined label="Password" v-model="auth.password"/>
          <v-text-field
            :rules="validateRepeatPassword"
            @keyup.enter="signUp"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword" color="grey" outlined label="Repeat your password"
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

    <Footer></Footer>

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
    username: "",
    auth: {
      email: "",
      password: "",
      passwordRepeat: "",
    },
    validatePassword: [
      (v) => !!v || "Password is required",
      (v) => v.length >= 6 || "Password must have at least 6 characters"
    ],
    validateRepeatPassword: [
      (v) => !!v || "Required",
    ],
    validateEmail: [
      (v) => !!v || "Required",
      (v) => /.+@.+\..+/.test(v) || "Please enter a valid email", // https://stackoverflow.com/questions/50039793/email-validation-n-vuetify-js
    ],
    validateUserName: [
      (v) => !!v || "Required"
    ]


  }),


  methods: {
    signUp() {

      let that = this;
      if (this.auth.password !== this.auth.passwordRepeat) {
        alert("Passwords do not match")
      } else {
        this.$fire.auth.createUserWithEmailAndPassword(this.auth.email, this.auth.password)
          .then((user) => this.initializeUserData()).then((user) => this.$router.push('Profile'))
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
            }
          )
      }


    },
    routeToLogin() {
      this.$router.push('Login')
    },
    async initializeUserData() {
      const ref = this.$fire.firestore.collection('users').doc(this.$fire.auth.currentUser.uid);

      const document = {
        username: this.username,
        weatherCoin: 0
      }
      try {
        await ref.set(document)
      } catch (error) {
        console.log(error.message)
      }
    }
  }
}


</script>

<style scoped>

#signUpCard {
  position: fixed;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;

}

@media screen and (max-width: 690px) {
  #signUpCard {
    width: 96%;
  }
}

@media screen and (min-width: 1160px) {
  #signUpCard {
    width: 30%;
  }
}

#signInButton {
  color: #de962f;
  border-radius: 10px;
}

#createButton {
  color: forestgreen;
  border-radius: 10px;

}


</style>
