<template>

<!--<v-app>-->
  <v-content>
    <v-card  width="550" id="signUp">
      <v-card-title>Start betting on the weather today!</v-card-title>
      <v-card-text>
        <v-text-field label="E-Mail" clearable v-model="auth.email"/>
        <v-text-field id="pw1" type="password" label="Password" v-model="auth.password"/>
        <v-text-field id="pw2" type="password" label="Repeat your password" v-model="auth.passwordRepeat"></v-text-field>
      </v-card-text>


      <v-card-actions>
        <v-btn color="blue" @click="signUp">Create my account</v-btn>
      </v-card-actions>
    </v-card>



  </v-content>

<!--</v-app>-->


</template>

<script>
export default {
  name: "SignUp",

  data(){

    return {
      auth: {
        email: "",
        password: "",
        passwordRepeat: "",
      },
    }
  },




  methods:{
    signUp(){
      if (this.auth.password !== this.auth.passwordRepeat){
        alert("Passwords do not match")
      } else if (this.auth.password.length < 6){
        alert("Password must be longer than 6 characters")
      } else {
        this.$fire.auth.createUserWithEmailAndPassword(this.auth.email, this.auth.password)
        .catch(function (e){
          switch (e.code){
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

    }
  }
}





</script>

<style scoped>

#signUp{
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}


</style>
