<template>
  <v-app>
    <div id="app">
      <nav-bar/>
      <v-main>


          <v-card v-if="dataLoaded" id="card" class="mx-auto" outlined max-height="500" max-width="600">
            <v-card-title id="greetUser" class="justify-center">Hello {{ username }}!</v-card-title>
            <v-card-text>
              <h3 class="text">Your weatherCoin balance: {{ weathercoin }}</h3>
              <h3 class="text">Level: {{userLevel}}</h3>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-img v-if="dataLoaded" max-height="70" max-width="70" :src="imageSrc"></v-img>
            </v-card-actions>
            <v-text-field @keyup.enter="saveToDatabase" style="margin: 10px" dense outlined v-model="newUsername" v-if="showTextField" label="Enter new username"
                          append-icon="mdi-checkbox-marked-circle" @click:append="saveToDatabase"></v-text-field>
            <v-card-actions class="justify-center">
              <v-btn @click="getBetDocument">Evaluate my bets!</v-btn>
            </v-card-actions>
            <v-card-actions class="justify-center">
              <v-btn @click="deleteBets('Successfully deleted your bet from database!')">Delete my bets</v-btn>
            </v-card-actions>
            <v-card-actions class="justify-center">
              <v-btn v-if="!showTextField" class="buttons" @click="changeName">
                Change username
              </v-btn>
              <v-btn class="buttons" @click="logoutUser" id="logoutButton">
                Logout
              </v-btn>
            </v-card-actions>

            <br>

          </v-card>


        <v-snackbar timeout="2500" id="snackbar" v-model="showSnackBar">
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
      dataLoaded: false,
      imageSrc: require("assets/img/normalUser.png"),
      userLevel: "",
      base_url: "https://api.openweathermap.org/geo/1.0/direct?",
      api_key: "67c4e15fa55514beb2e8755151915130",
      base_url_weather: "https://api.openweathermap.org/data/3.0/onecall/timemachine?",
      api_key_weather: "acc4bfe58334c1e0735f355d447f9df6",
      actualTemp: 0,
      time: '',

    }
  },

  methods: {

    async deleteBets(notification){
      await fetch("/api/delete/" + this.$fire.auth.currentUser.uid, {
        method: 'DELETE'
      }).then(res => {
        if (res.ok){
          this.$noty.success(notification)
        }
      })

    },

    getBetDocument() {
      // first, check if bet document exists
      let docRef = this.$fire.firestore.collection("/bets").doc(this.$fire.auth.currentUser.uid);
      docRef.get().then(async (doc) => {
        if (doc.exists) {
          await this.evaluateBet(doc)
        } else {
          console.log("No bets found for this user");
          this.showSnackBar = true;
          this.msg = "No bet found! Start by making a bet!"
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
    }, // working fine

    async evaluateBet(doc) {
      let betObj = (await doc).get('betObj');
      let bettedCoins = betObj.bettedCoins;
      console.log(betObj)
      let location = betObj.location;
      let odds = betObj.odds;
      let predictedTemp = betObj.predictedTemp;
      console.log("Predicted temp: " + predictedTemp)
      let time = betObj.time;
      time = time.seconds;
      if (time > Date.now()/1000){
        console.log("Bet is in the future")
        this.showSnackBar = true;
        this.msg = "Bet date is in the future!"
      } else {
        let coordinates = await this.locationToGeocode(location)
        let url = this.base_url_weather + coordinates + "&dt=" + time + "&units=metric&appid=" + this.api_key_weather;
        console.log(url) // the url to fetch the weather
        let actualTemp;
        await fetch(url)
          .then(res => res.json())
          .then(res => {
            this.actualTemp = res.data[0].temp;
          })
        console.log(this.actualTemp)

        if (odds === 1.5){
          let tmpWeatherCoins = 0;
          if (this.actualTemp - 1.5 <= predictedTemp && this.actualTemp + 1.5 >= predictedTemp){
            tmpWeatherCoins = bettedCoins * 1.5
            let docRef = this.$fire.firestore.collection("/users").doc(this.$fire.auth.currentUser.uid);
            let updatedWeatherCoins = this.weathercoin + tmpWeatherCoins;
            await docRef.update({weatherCoin: updatedWeatherCoins});
            this.$noty.success("You won " + tmpWeatherCoins + " weathercoins");
          } else {
            tmpWeatherCoins = bettedCoins * -1;
            let updatedWeatherCoins = this.weathercoin + tmpWeatherCoins;
            let docRef = this.$fire.firestore.collection("/users").doc(this.$fire.auth.currentUser.uid);
            await docRef.update({weatherCoin: updatedWeatherCoins});
            this.$noty.error("You lost " + tmpWeatherCoins*-1 + " weathercoins");
          }
        } else if (odds === 2){
          let tmpWeatherCoins = 0;
          if (this.actualTemp - 1 <= predictedTemp && this.actualTemp + 1 >= predictedTemp){
            tmpWeatherCoins = bettedCoins * 2
            let docRef = this.$fire.firestore.collection("/users").doc(this.$fire.auth.currentUser.uid);
            let updatedWeatherCoins = this.weathercoin + tmpWeatherCoins;
            await docRef.update({weatherCoin: updatedWeatherCoins});
            this.$noty.success("You won " + tmpWeatherCoins + " weathercoins");
          } else {
            tmpWeatherCoins = bettedCoins * -1;
            let updatedWeatherCoins = this.weathercoin + tmpWeatherCoins;
            let docRef = this.$fire.firestore.collection("/users").doc(this.$fire.auth.currentUser.uid);
            await docRef.update({weatherCoin: updatedWeatherCoins});
            this.$noty.error("You lost " + tmpWeatherCoins*-1 + " weathercoins");
          }
        } else if (odds === 3){
          let tmpWeatherCoins = 0;
          if (this.actualTemp - 0.5 <= predictedTemp && this.actualTemp + 0.5 >= predictedTemp){
            tmpWeatherCoins = bettedCoins * 3
            let docRef = this.$fire.firestore.collection("/users").doc(this.$fire.auth.currentUser.uid);
            let updatedWeatherCoins = this.weathercoin + tmpWeatherCoins;
            await docRef.update({weatherCoin: updatedWeatherCoins});
            this.$noty.success("You won " + tmpWeatherCoins + " weathercoins");
          } else {
            tmpWeatherCoins = bettedCoins * -1;
            let updatedWeatherCoins = this.weathercoin + tmpWeatherCoins;
            let docRef = this.$fire.firestore.collection("/users").doc(this.$fire.auth.currentUser.uid);
            await docRef.update({weatherCoin: updatedWeatherCoins});
            this.$noty.error("You lost " + tmpWeatherCoins*-1 + " weathercoins");
          }
        }
        await this.updateData();
        await this.deleteBets("You may now submit the next bet!")

      }
    },

    async locationToGeocode(location) {
      let url = this.base_url + "q=" + location + "&appid=" + this.api_key;
      console.log(url)
      let lat, lon
      await fetch(url)
        .then(res => res.json())
        .then(res => {
          lat = res[0].lat
          lon = res[0].lon
          console.log(lat)
          console.log(lon)
        })
      return "lat=" + lat + "&lon=" + lon;
    },

    async logoutUser() {
      await this.$fire.auth.signOut()
      await this.$router.push("/") //pushes a new entry into the history stack, when the user clicks the browser back button they will be taken to the specific URL
    },

    changeName() {
      this.showTextField = true;
    },

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
        this.updateData();
      })

    },

    async updateData(){
      let jsonDoc;
      await fetch("/api/userdata/" + this.$fire.auth.currentUser.uid, {
        method: 'GET',
        cache: 'default'
      })
        .then(res => res.json())
        .then(data => jsonDoc = data)
      this.weathercoin = jsonDoc.weathercoin;
      this.username = jsonDoc.username;
      this.setBadge();
    }


  },

  async created() {
    // get the user data from our backend
    let jsonDoc;
    await fetch("/api/userdata/" + this.$fire.auth.currentUser.uid, {
      method: 'GET',
      cache: 'default'
    })
    .then(res => res.json())
    .then(data => jsonDoc = data)
    this.username = jsonDoc.username;
    this.weathercoin = jsonDoc.weathercoin;
    //this.time = jsonDoc.time;
    //this.time = new Date(this.time.seconds * 1000 + this.time.nanoseconds/1000000) get from firebase date to actual date readable
    this.setBadge();
    this.dataLoaded = true;
  },


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
  border-radius: 10px;
}

/* responsiveness*/
@media screen and (max-width: 600px) {
  #card{
    width: 90%;
    margin-top: 60px;
  }
}
</style>
