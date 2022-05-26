<template>
<!--<v-app>-->
  <v-content>
    <v-card  width="550" id="login">
      <v-card-title>Login to WeatherWetten!</v-card-title>
      <v-card-text>
        <v-text-field label="E-Mail" />
        <v-text-field
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"/>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue">Login</v-btn>
        <v-btn color="green" @click="routeToSignUp">New here?</v-btn>
      </v-card-actions>
    </v-card>
  </v-content>
<!--</v-app>-->




</template>


<script>
import NavBar from "@/components/NavBar";
import SignUp from "@/pages/SignUp";
export default {
  data(){
    return{
      showPassword:false
    }
  },

  name: "Login",

  components: {
    NavBar

  },

  methods:{
    routeToSignUp(){
      this.$router.push(SignUp)
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
