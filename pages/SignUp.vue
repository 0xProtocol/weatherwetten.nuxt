<template>

  <v-app>
    <nav-bar/>
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
          <button @click="signUp">
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
              </div>
            </div>
            <span>Sign up!</span>
          </button>
        </v-card-actions>
        <v-card-actions class="justify-center">
          <button id="login" @click="routeToLogin">Already have an account?</button>
        </v-card-actions>
      </v-card>


      <v-snackbar timeout="10000" id="snackbar" v-model="showSnackbar" color="red darken-2">
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
        this.$noty.error("Passwords do not match!");
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
    width: 25%;
  }
}


/* From uiverse.io by @adamgiebl */
button {
  font-family: inherit;
  font-size: 18px;
  background: #383636;
  color: #dfdfe8;
  padding: 0.1em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s;

}

button span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}

button svg {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
  animation: fly-1 0.6s ease-in-out infinite alternate;

}


button:hover svg {
  transform: translateX(1.9em) rotate(45deg) scale(1.1);
}

#login:hover {
  color: #42b983;

}


button:hover span {
  transform: translateX(8em);

}

button:active {
  transform: scale(0.95);
}

@keyframes fly-1 {
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.1em);
  }
}




</style>
