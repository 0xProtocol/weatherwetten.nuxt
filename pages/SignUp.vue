<template>

<!--<v-app>-->
  <v-content>
    <v-card  width="550" id="signUp">
      <v-card-title>Start betting on the weather today!</v-card-title>
      <v-card-text>
        <v-text-field label="E-Mail" clearable/>
        <v-text-field id="pw1" type="password" label="Password"/>
        <v-text-field id="pw2" type="password" label="Repeat your password"></v-text-field>
      </v-card-text>


      <v-card-actions>
        <v-btn color="blue">Create my account</v-btn>
      </v-card-actions>
    </v-card>
  </v-content>

<!--</v-app>-->






</template>

<script>
export default {
  name: "SignUp"

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
