<template>
  <v-app> <!-- The Vuetify v-app component is an essential component and required in all applications made with the framework -->
    <div id="app">
      <nav-bar/>
      <v-main> <!-- Sizes your content based upon application components (dynamically sized based on the structure of layout elements)-->


          <v-card v-if="dataLoaded" id="card" class="mx-auto" outlined shaped max-width="600"> <!-- show if the dataloaded=true -->
            <v-card-title id="greetUser" class="justify-center">Hello {{ username }}!</v-card-title>
            <v-card-text>
              <h3 class="text">Your weatherCoin balance: {{ weathercoin }}</h3>
              <h3 class="text">Level: {{userLevel}}</h3>
            </v-card-text>

            <v-card-actions class="justify-center">
              <v-img max-height="70" max-width="70" :src="imageSrc"></v-img>
            </v-card-actions>

            <v-card-actions class="justify-center">
              <v-btn class="buttons" @click="logoutUser" id="logoutButton">
                Logout
              </v-btn>
              <v-btn v-if="!showTextField" class="buttons" @click="changeName"> <!-- show if textfield is not displayed -->
                Change username
              </v-btn>
            </v-card-actions>
            <v-card-actions class="justify-center">
              <v-btn @click="deleteBets">Delete my bets</v-btn>
            </v-card-actions>

            <br>
            <v-text-field @keyup.enter="saveToDatabase" style="margin: 10px" dense outlined v-model="newUsername" v-if="showTextField" label="Enter new username"
                          append-icon="mdi-checkbox-marked-circle" @click:append="saveToDatabase"></v-text-field>
          </v-card>


        <v-snackbar timeout="10000" id="snackbar" v-model="showSnackBar">
          {{ msg }}
          <template v-slot:action="{ attrs }"> <!-- so that the button is at the same line as error message -->
            <v-btn dark text v-bind="attrs" @click="showSnackBar = false">
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

  data() { //Data is the private memory of each component where you can store any variables you need
    return {
      username: "",
      weathercoin: 0,
      showTextField: false,
      newUsername: "",
      showSnackBar: false,
      msg: "",
      dataLoaded: false,
      imageSrc: require("assets/img/normalUser.png"),
      userLevel: ""

    }
  },

  methods: {

    /* delete all the bets from the user*/
    async deleteBets(){
      await fetch("/api/delete/" + this.$fire.auth.currentUser.uid, {
        method: 'DELETE'
      }).then(res => { //starts a request and returns a promise
        if (res.ok){
          this.$noty.success("Successfully deleted your bets!")
        }
      })
    },

    /*logout the user*/
    async logoutUser() {
      await this.$fire.auth.signOut() //wait till user is logged out
      await this.$router.push("/") //pushes a new entry into the history stack, when the user clicks the browser back button they will be taken to the specific URL
    },

    changeName() {
      this.showTextField = true;
    },

    //set badge according to your coins
    setBadge(){
      let coins = this.weathercoin;
      if (coins < 40){
        this.imageSrc = require("assets/img/newbie.png")
        this.userLevel = "Beginner"
      } else if (coins >= 40 && coins < 100){
        this.imageSrc = require("assets/img/third.png")
        this.userLevel = "Bronze"
      } else if (coins >=100  && coins < 300){
        this.imageSrc = require("assets/img/second.png")
        this.userLevel = "Silver"
      } else if (coins >= 300 && coins < 1000){
        this.imageSrc = require("assets/img/best.png")
        this.userLevel = "Gold";
      } else if (coins >= 1000){
        this.imageSrc = require("assets/img/expert.png")
        this.userLevel = "Expert";
      }
    },



    //change username
    async saveToDatabase() {
      if (this.newUsername.length < 5) {
        this.msg = "Enter a valid username!"
        this.showSnackBar = true;
        return;
      }

      //change username and save it to database
      await fetch("/api/edit/"+this.$fire.auth.currentUser.uid, {
        method: 'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          newUsername: this.newUsername
        })
      })
      .then(() => {
        this.msg = "Username changed successfully"
        this.showSnackBar = true;
        location.reload(); // reload the current page
      })

    }
  },

  /* get's instantly called*/
  async created() {
    // get the user data from our backend
    let jsonDoc;
    await fetch("/api/userdata/" + this.$fire.auth.currentUser.uid, { //get data from our database collection 'users'
      method: 'GET',
      cache: 'reload'
    })
    .then(res => res.json())
    .then(data => jsonDoc = data)
    this.username = jsonDoc.username; //get back the username
    this.weathercoin = jsonDoc.weathercoin; //get back the weathercoins
    this.setBadge(); //method call setBadge to user according weathercoins
    this.dataLoaded = true; //set var to true
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

.text {
  text-align: center;
  font-size: 18px;
  color: white;
  margin-top: 2px;
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
