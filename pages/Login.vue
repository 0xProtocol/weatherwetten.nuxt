<template>
<v-app>
  <NavBar2/>
  <v-main>
    <v-card  width="550" id="login">
      <v-card-title>Login to WeatherWetten!</v-card-title>
      <v-card-text>
        <v-text-field v-model = "auth.email" label="E-Mail" />
        <v-text-field
          v-model="auth.password"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"/>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue" @click="login">Login</v-btn>
        <v-btn color="green" @click="routeToSignUp">New here?</v-btn>
        <v-btn @click="changePassword" >Forgot your password?</v-btn>
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
      this.$router.push(SignUp)
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


    /*changePassword(){
      let that = this
      this.$fire.auth.sendPasswordResetEmail(this.auth.email)
      .then(function (){
        alert('Reset link was sent to: ' + that.auth.email)
      })
      .catch(function (error){
        alert(error.message)
      })
    }*/

    changePassword(){
      this.$router.push('forgotPassword')
    }


  }
}
</script>

<style scoped>


#login{
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 10px;

}







</style>
