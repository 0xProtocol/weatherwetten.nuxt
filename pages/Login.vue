<template>
<v-app>
  <NavBar2/>
  <v-main>
    <v-card  width="550" id="loginCard">
      <v-card-title class="justify-center">Login to WeatherWetten!</v-card-title>
      <v-card-text>
        <v-text-field v-model = "auth.email" label="E-Mail" outlined />
        <v-text-field outlined
          v-model="auth.password"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"/>
      </v-card-text>


      <v-card-actions class="justify-center">
        <v-btn id="loginButton" @click="login">Login</v-btn>
        <v-btn id="newHereButton" @click="routeToSignUp">New here?</v-btn>
      </v-card-actions>
      <v-card-actions class="justify-center">
        <v-btn id="forgotButton"  @click="routeToForgotPassword" >Forgot your password?</v-btn>
      </v-card-actions>
    </v-card>
  </v-main>
</v-app>




</template>


<script>
import NavBar from "@/components/NavBar";
import SignUp from "@/pages/SignUp";
import forgotPassword from "@/pages/forgotPassword";

export default {
  data(){
    return{
      showPassword:false,

      auth: {
        email: "",
        password: ""
      }
    }
  },

  name: "Login",

  components: {
    NavBar

  },
  methods:{
    routeToSignUp(){
      this.$router.push('SignUp')
    },

    login(){
      let that = this
      this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
      .catch(function (error){
            alert(error.message)
      }).then((user) => {
        that.$router.push("/")
      })
    },


    routeToForgotPassword(){
      this.$router.push('forgotPassword')
    }


  }
}
</script>

<style scoped>


#loginCard{
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;

}

#loginButton{
  color: forestgreen;
}

#newHereButton{
  color: forestgreen;
}

#forgotButton{
  color: orange;
}







</style>
