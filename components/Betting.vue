<template>
  <!-- decide if widget pic should be warm or cold dependending on temperature-->
  <div class="headline"> <!-- weathercoin div -->
    <h1>BETTING</h1>
    <div :class="typeof weather.main != 'undefined'">

      <div class="searchBox">
        <input
          type="text"
          class="searchBar"
          placeholder="Search..."
          v-model="query"
          @keypress="fetchWeather"/>  <!-- if pressed then call fetchWeather-->
      </div>
    </div>

    <div class="weatherData" v-if="typeof weather.main != 'undefined'">
      <v-simple-table style="background-color: #1e1e1e; border-radius: 10px" class="table" v-if="showData===true">
        <thead>
        <tr>
          <th style="text-align: center; font-size: 15px; color: white">City</th>
          <th style="text-align: center; font-size: 15px; color: white">Degrees</th>
          <th style="text-align: center; font-size: 15px; color: green">1,5x Odds Bottom</th>
          <th style="text-align: center; font-size: 15px; color: green">1,5x Odds Top</th>
          <th style="text-align: center; font-size: 15px; color: orange">2x Odds Bottom</th>
          <th style="text-align: center; font-size: 15px; color: orange">2x Odds Top</th>
          <th style="text-align: center; font-size: 15px; color: red">3x Odds Bottom</th>
          <th style="text-align: center; font-size: 15px; color: red">3x Odds Top</th>
          <th style="text-align: center; font-size: 15px; color: white">Deadline</th> <!-- date where it calculates -->
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="td">{{ weather.name }}</td>  <!-- fixed data from API-->
          <td class="td">{{ weather.main.temp }}° C</td>  <!-- fixed data from API-->

          <td class="td">{{ parseFloat(weather.main.temp - 1.5).toFixed(2) }}° C</td>
          <!-- predicted data -° (round to two decimals)-->
          <td class="td">{{ parseFloat(weather.main.temp + 1.5).toFixed(2) }}° C</td>
          <!-- predicted data +° (round to two decimals)-->

          <td class="td">{{ parseFloat(weather.main.temp - 1).toFixed(2) }}° C</td>
          <!-- predicted data -° (round to two decimals)-->
          <td class="td">{{ parseFloat(weather.main.temp + 1).toFixed(2) }}° C</td>
          <!-- predicted data +° (round to two decimals)-->

          <td class="td">{{ parseFloat(weather.main.temp - 0.5).toFixed(2) }}° C</td>
          <!-- predicted data -° (round to two decimals)-->
          <td class="td">{{ parseFloat(weather.main.temp + 0.5).toFixed(2) }}° C</td>
          <!-- predicted data +° (round to two decimals)-->

          <td class="td">{{ dateBuilderModified() }}</td> <!-- deadline where we evaluate -->
        </tr>
        </tbody>
      </v-simple-table>

      <v-card class="mx-auto" max-width="600" loading outlined shaped>
        <v-card-title primary-title class="justify-center">PLACE YOUR BET</v-card-title>
        <v-card-actions class="justify-center">
          <v-btn class="bettingButtons" dark text color="success" @click="setBet(1.5)">1,5x</v-btn>
          <v-btn class="bettingButtons" dark text color="warning" @click="setBet(2)">2x</v-btn>
          <v-btn class="bettingButtons" dark text color="error" @click="setBet(3)">3x</v-btn>
        </v-card-actions>
        <v-text-field id="txtFieldTemperature" class="txtField" v-model="predictedTemp"
                      label="temperature"></v-text-field> <!-- make , to . -->
        <v-text-field id="txtFieldAmount" class="txtField" v-model="bettedCoins" label="weathercoins"></v-text-field>
      </v-card>


    </div>
  </div>
</template>

<script>


import Bet from "@/js/BetClass";
import {deleteField} from "firebase/firestore";


export default {
  data() {
    return {
      weathercoin: null,
      api_key: 'd835f55799cc15a3b1bede5fd8adeb2e',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {},
      actualTemp: null,   // actualTemp fetched by the API
      predictedTemp: null, //predictedTemp by the user input
      bettedCoins: null, // later insert document.getElementById('txtFieldAmount').value
      showData: false,
    }
  },
  methods: {
    fetchWeather(e) {
      if (e.key === "Enter") {
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
          .then(res => {
            if (res.statusText === 'Not Found') {
              this.$noty.error("Please enter a valid city!")
            }
            return res.json();
          }).then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results; // write results into variable
      this.showData = false; // if we fetch new data, data should not be visible
    },
    dateBuilderModified() { /*modified to date we want to predict */
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate(); /* modified here the days */
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    },
    setBet(odds) {
      if (document.getElementById('txtFieldAmount').value >= 1 && document.getElementById('txtFieldAmount').value <= this.weathercoin &&
        document.getElementById('txtFieldAmount').value !== "") {
        console.log(this.weathercoin);
        this.actualTemp = this.weather.main.temp; // get actual temperature and write it into the variable
        console.log(odds);
        console.log("actual temp " + this.actualTemp);
        console.log(this.bettedCoins);
        this.bet(odds); //--> determine which button was pressed (1.5 OR 2 OR 3) with 'odds' var
        //this.$noty.success("Bet placed!");
        this.showData = true;
        // show message
        this.delay(2000).then(() => {
          this.$noty.info("Please be a fair player and select a new city to bet!")
        });
      } else {
        console.log("error");
        this.$noty.error("Bet failed!") //more cases why error is happened -> when we have backend
      }
    },
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },

    async bet(odds) {
      if (odds === 1.5) {
        let tmpWeatherCoins = 0;
        //BOTTOM = actualTemp - 1.5 || TOP = actualTemp + 1.5
        if (this.actualTemp - 1.5 <= this.predictedTemp && this.actualTemp + 1.5 >= this.predictedTemp) {
          //get 1.5 from betting volume
          tmpWeatherCoins = this.bettedCoins * 1.5;
          // FIREBASE CONNECTION ADD WEATHERCOINS!! (+ this.bettedCoins)
          this.$noty.success("You won " + tmpWeatherCoins + " weathercoins");
        } else {
          //lose betted amount volume
          // FIREBASE CONNECTION ADD WEATHERCOINS!! (- this.bettedCoins)
          tmpWeatherCoins = this.bettedCoins;
          this.$noty.error("You lost " + tmpWeatherCoins + " weathercoins");
        }
      } else if (odds === 2) {
        //BOTTOM = actualTemp - 1 || TOP = actualTemp + 1
        let tmpWeatherCoins = 0;
        if (this.actualTemp - 1 <= this.predictedTemp && this.actualTemp + 1 >= this.predictedTemp) {
          //get 2 from betting volume
          tmpWeatherCoins = this.bettedCoins * 2;
          // FIREBASE CONNECTION ADD WEATHERCOINS!! (+ this.bettedCoins)
          this.$noty.success("You won " + tmpWeatherCoins + " weathercoins");
        } else {
          //lose betted amount volume
          // FIREBASE CONNECTION ADD WEATHERCOINS!! (- this.bettedCoins)
          tmpWeatherCoins = this.bettedCoins;
          this.$noty.error("You lost " + tmpWeatherCoins + " weathercoins");
        }
      } else if (odds === 3) {
        let tmpWeatherCoins = 0;
        //BOTTOM = actualTemp - 0.5 || TOP = actualTemp + 0.5
        if (this.actualTemp - 0.5 <= this.predictedTemp && this.actualTemp + 0.5 >= this.predictedTemp) {
          //get 3 from betting volume
          tmpWeatherCoins = this.bettedCoins * 3;
          // FIREBASE CONNECTION ADD WEATHERCOINS!! (+ this.bettedCoins)
          this.$noty.success("You won " + tmpWeatherCoins + " weathercoins");
        } else {
          //lose betted amount volume
          // FIREBASE CONNECTION ADD WEATHERCOINS!! (- this.bettedCoins)
          tmpWeatherCoins = this.bettedCoins;
          this.$noty.error("You lost " + tmpWeatherCoins + " weathercoins");
        }
      }
    },

  }

  //Testing out stuff from Timmy's dbTestFile

  /*
  What has to happen
  1. Data is set -> finished (only variable from Christoph missing)
  2. We save bet object -> finished
  3. Used coins get deducted from account -> finished
  4. Bet gets realized e.g. comperator does it's magic -> finished
  5. Result of bet: Coins get added to account (if not won, amount is 0) -> finished
  6. Profit$$$ -> hopefully soon



   */

  /*docData(){
    return{
      docData: {
        bet: {
          temp: 10,  // <----- Christoph, this is the variable name we talked about
          coins: 5, // later insert document.getElementById('txtFieldAmount').value
        }
      }
    }
  },*/
  /*
      compareBetTemp (bettedValue = this.temp, actualValue = this.weather.main.temp,
                      bettedCoins = document.getElementById('txtFieldAmount').value) {
        //if bettedValue and bettedCoins are functioning as intended has yet to be tested out

        var value = bettedValue - actualValue;
        if (value < 0) {
          value *= -1;
        }

        if (value < 1.0) {
          return bettedCoins * 3;
        } else if (value < 1.5) {
          return bettedCoins * 1.5;
        } else {
          return 0;
        }
      },

      async mergeDataIntoDB(){
        const document = this.$fire.firestore.collection("/users").doc(this.$fire.auth.currentUser.uid)
        await document.set(this.bet, {merge:true})
        console.log("Merge into document")
      },

      async deleteDataFields(){
        const document = this.$fire.firestore.collection("/users").doc(this.$fire.auth.currentUser.uid)
        await document.update(
          {
            betType: deleteField()
          }
        )
      },

      betDoc(){
        const betDoc = this.$fire.firestore.collection("/bets").doc(this.$fire.auth.currentUser.uid)
        betDoc.set(this.bet)
      },

      deleteDoc(){
        const document = this.$fire.firestore.collection("/bets").doc(this.$fire.auth.currentUser.uid)
        document.delete();
      },

      async saveBet(){
        //method is not yet completely finished, right now maybe too many things happen in one method, bit unclean
        const bet = this.$fire.firestore.collection("/bets").doc(this.$fire.auth.currentUser.uid)
        // Programming intermediate step of always only saving current bet as in our demo the bet will get resolved immediately
        //still need to solve problem for continuous numbering of bets
        //await document.set(this.docData, {merge: true});
        await bet.set(this.docData);

        ///deduct coins used for bet
        //get current coin value
        const ref = this.$fire.firestore.collection("/users").doc(this.$fire.auth.currentUser.uid)
        let coin = ref.get();
        this.weathercoin = (await coin).get("weatherCoin");

        // coins get deducted
        await ref.update(
          {
            weatherCoin: this.weatherCoin - this.coins
          })

        ///bet gets realized
        //more elegant way vor these variables, do I have to create them first?
        let bettedValue;
        let actualValue;
        let bettedCoins;

        let prize = compareBetTemp (bettedValue = this.temp, actualValue = this.weather.main.temp,
          bettedCoins = document.getElementById('txtFieldAmount').value)

        //update coins
        //get current coin value
        const refPrize = this.$fire.firestore.collection("/users").doc(this.$fire.auth.currentUser.uid)
        let prizeUpdate = refPrize.get();
        this.weathercoin = (await prizeUpdate).get("weatherCoin");

        // prize gets added
        await refPrize.update(
          {
            weatherCoin: this.weatherCoin + prize
          })
      },

      async deleteObject(){
        console.log("Delete object we just merged")
        const document = this.$fire.firestore.collection("/bets").doc(this.$fire.auth.currentUser.uid)
        await document.update({
          bet: deleteField()
        })
      },


      },

  */,

  async created() {
    // get user data from document
    console.log(this.$fire.auth.currentUser.uid);
    const ref = this.$fire.firestore.collection('users').doc(this.$fire.auth.currentUser.uid);
    let document = ref.get();
    this.weathercoin = (await document).get("weatherCoin");
  }


};

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
}

.headline {
  margin-top: 100px; /* distance from top of div*/
  text-align: center;
}

.searchBox {
  padding: 25px;
  width: 50%;
  text-align: center;
  transform: translate(50%, 10%)
}

.searchBox .searchBar {
  display: block;
  width: 100%;
  padding: 15px;

  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.5) none;
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}


.searchBox .searchBar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}


h1 {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;

  display: inline-block;
  padding: 15px 20px;
  position: relative;
  font-size: 1.5rem;
}

h1:after {
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

h1:hover:after {
  width: 100%; /* full text get's the effect*/
  left: 0; /* begin left at text*/
}

.weatherData {
  margin-top: 60px; /* distance from top */
  width: 80%; /*so that it isn't too long*/
  transform: translate(12.5%, 0%); /* make it into the middle*/
}


.txtField {
  margin-right: 100px; /* inner distance around txtField*/
  margin-left: 100px; /* inner distance around txtField*/
}

.bettingButtons {
  margin-bottom: 12px; /*distance bottom from buttons (1x,2x,3x) */
  margin-right: 0; /*distance from right from buttons (1x,2x,3x) */
}

.mx-auto {
  margin-top: 150px; /* overwrites it to 100 from weathercoin css*/
  margin-bottom: 100px; /* overwrites it to 100 from weathercoin css*/
}

.mx-auto:hover {
  box-shadow: 0 0 15px #ffffff; /*shadow around v-card*/
}

.table:hover {
  box-shadow: 0 0 15px #ffffff; /*shadow around table*/
}

tr:hover {
  background-color: transparent !important; /* transparent if you hover over table entry color */
}

</style>
