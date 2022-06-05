<template>
  <v-app>
    <NavBar2/>

    <v-main>
      <v-card width="500" height="200" id="vcard">
        <v-card-text>
          <v-text-field label="Enter your email address: " clearable outlined></v-text-field>

        </v-card-text>





      </v-card>



    </v-main>




  </v-app>

</template>

<script>
export default {
  name: "forgotPassword"
}
</script>

<style scoped>

#vcard{
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}

#instructions{
  text-align: center;
}

#resetPassword{
  position: fixed;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);

}


</style>
