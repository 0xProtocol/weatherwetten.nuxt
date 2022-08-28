<template>
  <v-app>

    <nav-bar/>
    <v-main>
      <v-card id="cardArea" height="280">
        <v-card-title class="justify-center">
          Reset your password here!
        </v-card-title>
        <div style=" padding: 10px">
          <v-text-field
            label="E-Mail"
            required
            v-model="userEmailAddress"
            id="emailField" outlined
          ></v-text-field>
        </div>

        <v-card-actions class="justify-center">
          <button id="reset" @click="sendEmailToUser">
            Reset Password
          </button>
        </v-card-actions>
        <v-card-actions class="justify-center">
          <button @click="routeToLogin" id="return">Return to Login</button>
        </v-card-actions>
      </v-card>

      <v-snackbar timeout="10000" id="errorSnackBar" v-model="snackbarVisible" color="red darken-2">
        {{ msgToUser }}
        <template v-slot:action="{ attrs }">
          <v-btn dark text v-bind="attrs" @click="snackbarVisible = false"> <!-- v-bind ??? -->
            Close
          </v-btn>
        </template>
      </v-snackbar>

      <v-snackbar timeout="10000" id="okSnackBar" v-model="OkSnackbarVisible" color="green">
        {{ msgToUser }}
        <template v-slot:action="{ attrs }">
          <v-btn dark text v-bind="attrs" @click="OkSnackbarVisible = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-main>

  </v-app>

</template>

<script>
export default {
  name: "forgotPassword",

  data: () =>{
    let userEmailAddress = "";
    return{
      userEmailAddress,
      snackbarVisible: false,
      OkSnackbarVisible: false,
      msgToUser: ""
    }
  },

  methods:{

    //return to login action
    routeToLogin(){
      this.$router.push('Login') //pushes a new entry into the history stack, when the user clicks the browser back button they will be taken to the specific URL
    },

    //reset password action
    sendEmailToUser: function () {
      console.log("reset password");

      this.$fire.auth.sendPasswordResetEmail(this.userEmailAddress).then(
        () => {
          this.OkSnackbarVisible = true;
          this.msgToUser = "Reset link sent to: " + this.userEmailAddress;
        }
      )
        .catch((error) => {
          switch (error.code){
            case "auth/user-not-found":
              this.snackbarVisible = true;
              this.msgToUser = "No account with that email found!";
              break;
            case "auth/invalid-email":
              this.snackbarVisible = true;
              this.msgToUser = "Please enter a valid email!";
              break;
            case "auth/missing-email":
              this.snackbarVisible = true;
              this.msgToUser = "Please enter your email!";
              break;
            default:
              this.snackbarVisible = true;
              this.msgToUser = error.message;
          }
        })

    }
  }
}
</script>


<style scoped>
#cardArea {
  position: fixed; /*positioned relative to the viewport, it always stays in the same place even if the page is scrolled */
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  width: 30%;
}

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

/* responsiveness*/
@media (max-width: 900px) {
  #cardArea {
    width: 90%;
  }
}
</style>


