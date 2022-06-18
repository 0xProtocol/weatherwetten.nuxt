<template>
  <v-app>

    <NavBar2/>


    <v-main>
      <v-card id="cardArea" width="600px" height="280">
        <v-card-title class="justify-center" id="header">
          Reset your password here!
        </v-card-title>


        <v-form>
        <div style=" padding: 10px">
          <v-text-field
            label="E-Mail"
            required
            v-model="userEmailAddress"
            id="emailField" outlined color="info"
          ></v-text-field>
        </div>

          <v-btn id="reset" @click="sendEmailToUser">
            Reset Password
          </v-btn>
        </v-form>

        <v-btn @click="routeToLogin" id="return" class="buttons">Return to Login</v-btn>
      </v-card>

      <v-snackbar id="errorSnackBar" v-model="snackbarVisible" color="error">
        {{ msgToUser }}
      </v-snackbar>

      <v-snackbar id="okSnackBar" v-model="OkSnackbarVisible" color="green">
        {{ msgToUser }}
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
    routeToLogin(){
      this.$router.push('Login')
    },

    sendEmailToUser: function () {
      console.log("reset password");
      let header = document.getElementById("header");

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

#cardArea{
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 10px;
}


#reset{
  position: fixed;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 10px;
  color: #ef9421;


}

#emailField{

}



#return{
  position: fixed;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 10px;
  color: forestgreen;

}

</style>


