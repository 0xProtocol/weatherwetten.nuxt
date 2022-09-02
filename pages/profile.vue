<template>
  <v-app>
    <div id="app">
      <nav-bar/>
      <v-main>


          <v-card v-if="dataLoaded" id="card" class="mx-auto" outlined shaped max-width="600">
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
            <v-text-field @keyup.enter="saveToDatabase" style="margin: 10px" dense outlined v-model="newUsername" v-if="showTextField" label="Enter new username"
                          append-icon="mdi-checkbox-marked-circle" @click:append="saveToDatabase"></v-text-field>
          </v-card>


        <v-snackbar timeout="10000" id="snackbar" v-model="showSnackBar">
          {{ msg }}
          <template v-slot:action="{ attrs }">
            <v-btn dark text v-bind="attrs" @click="showSnackBar = false"> <!-- v-bind ??? -->
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-main>
    </div>
    <FooterCoinPrice/>
  </v-app>
</template>

<script>
export default {
  name: "profile",

  data() {
    return {
      username: "",
      weathercoin: 0,
      showTextField: false,
      newUsername: "",
      showSnackBar: false,
      msg: "",
      dataLoaded: false
    }
  },

  methods: {

    async logoutUser() {
      await this.$fire.auth.signOut()
      await this.$router.push("/") //pushes a new entry into the history stack, when the user clicks the browser back button they will be taken to the specific URL
    },

    changeName() {
      this.showTextField = true;
    },

    //change username
    async saveToDatabase() {
      if (this.newUsername.length < 5) {
        this.msg = "Enter a valid username!"
        this.showSnackBar = true;
        return;
      }

      //change username and save it to database
      const ref = this.$fire.firestore.collection('users').doc(this.$fire.auth.currentUser.uid);
      await ref.update({username: this.newUsername})

      this.msg = "Username changed successfully"
      this.showSnackBar = true;
      location.reload(); // reload the current page
    }
  },

  async created() {
    // get the user data from our backend
    let jsonDoc;
    await fetch("/api/userdata/" + this.$fire.auth.currentUser.uid, {
      method: 'GET',
      cache: 'reload'
    })
    .then(res => res.json())
    .then(data => jsonDoc = data)
    this.username = jsonDoc.username;
    this.weathercoin = jsonDoc.weathercoin;
    this.dataLoaded = true;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#profileCard {
  position: fixed; /*positioned relative to the viewport, it always stays in the same place even if the page is scrolled */
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
  background-image: url('../assets/img/profile.jpg');
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

/* responsiveness*/
@media screen and (max-width: 600px) {
  #card{
    width: 90%;
  }
}
</style>
