<template>
  <div>
    <v-btn @click="getWeathercoin"></v-btn>
    <v-btn @click="getBetDocument">Get bet document</v-btn>
  </div>

</template>

<script>
export default {
  name: "evaluateBets",


  data() {
    return {
      base_url: "https://api.openweathermap.org/geo/1.0/direct?",
      api_key: "67c4e15fa55514beb2e8755151915130",
      base_url_weather: "https://api.openweathermap.org/data/3.0/onecall/timemachine?",
      api_key_weather: "acc4bfe58334c1e0735f355d447f9df6",
      geoInfo: null,
      weathercoin: 0,
      actualTemp: 0
    }
  },

  methods: {
    getBetDocument() {
      console.log(this.weathercoin)
      // first, check if bet document exists
      let docRef = this.$fire.firestore.collection("/bets").doc(this.$fire.auth.currentUser.uid);
      docRef.get().then(async (doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          await this.evaluateBet(doc)
        } else {
          console.log("No bets found for this user");
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
        await this.deleteBets()
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

    async deleteBets(){
      await fetch("/api/delete/" + this.$fire.auth.currentUser.uid, {
        method: 'DELETE'
      }).then(res => {
        if (res.ok){
          this.$noty.success("Bet deleted from database")
        }
      })

    },

    async getWeathercoin() {
      const ref = this.$fire.firestore.collection("/users").doc(this.$fire.auth.currentUser.uid)
      let coin = ref.get();
      this.weathercoin = (await coin).get("weatherCoin");
    },


  }
}


</script>

<style scoped>

</style>
