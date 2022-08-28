<template>
  <v-app>
    <div id="app">
      <nav-bar/>
      <v-main>

        <v-card id="card" class="mx-auto" outlined shaped loading max-width="600">
          <v-card-title id="greetUser" class="justify-center">Hello {{ username }}!</v-card-title>
          <v-card-text><h3 id="weatherCoin">Current weatherCoin balance: {{ weathercoin }}</h3></v-card-text>
          <br>
          <br>
          <v-card-actions class="justify-center">
            <v-btn class="buttons" @click="logoutUser" id="logoutButton">
              Logout
            </v-btn>
            <v-btn v-if="!showTextField" class="buttons" @click="changeName">
              Change username
            </v-btn>
          </v-card-actions>

          <br>
          <v-text-field style="margin: 10px" dense outlined v-model="newUsername" v-if="showTextField" label="Enter new username"
                        append-icon="mdi-checkbox-marked-circle" @click:append="saveToDatabase"></v-text-field>
        </v-card>


        <v-snackbar timeout="10000" id="snackbar" v-model="showSnackBar">
          {{ msg }}
          <template v-slot:action="{ attrs }">
            <v-btn dark text v-bind="attrs" @click="showSnackBar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-main>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "profile",

  data() {
    return {
      username: "",
      weathercoin: null,
      showTextField: false,
      newUsername: "",
      showSnackBar: false,
      msg: "",
    }
  },

  methods: {

    async logoutUser() {
      await this.$fire.auth.signOut()
      this.$router.push("/")
    },

    changeName() {
      this.showTextField = true;
    },

    async saveToDatabase() {
      if (this.newUsername.length < 5) {
        this.msg = "Enter a valid username!"
        this.showSnackBar = true;
        return;
      }

      const ref = this.$fire.firestore.collection('users').doc(this.$fire.auth.currentUser.uid);
      const res = await ref.update({username: this.newUsername})

      this.msg = "Username changed successfully"
      this.showSnackBar = true;
      location.reload();
    }


  },

  async created() {

    // get user data from document

    console.log(this.$fire.auth.currentUser.uid);
    const ref = this.$fire.firestore.collection('users').doc(this.$fire.auth.currentUser.uid);
    let document = ref.get();
    this.username = (await document).get("username");
    this.weathercoin = (await document).get("weatherCoin");
    console.log(this.weathercoin);
    console.log(this.username);
    // console.log(ref);
  }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


#profileCard {
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #3c4242;

}

#weatherCoin {
  text-align: center;
  font-size: 18px;
  color: white;
}

#greetUser {
  font-size: 25px;

}

.buttons {
  border-radius: 10px;
  color: white;


}

#app {
  background-image: url('../assets/img/warm.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.mx-auto {
  margin-top: 100px;
}

#card{
  background-color: #2d2d2d;
}

@media screen and (max-width: 600px) {
  #card{
    width: 90%;
  }
}



</style>
