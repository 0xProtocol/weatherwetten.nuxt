import Vue from 'vue'

export default class Bet extends Vue {

  constructor(bettedValue, bettedCoins, time, betType) {
    super();
    this.bettedValue = bettedValue;
    this.bettedCoins = bettedCoins;
    this.time = time;
    this.betType = betType;
  }

  compareBetTemp (bettedValue, actualValue = this.weather.main.temp, bettedCoins = document.getElementById('txtFieldAmount').value) {
    //if bettedValue and bettedCoins are functioning as intended has yet to be tested out

    var value = bettedValue - actualValue;
    if (value < 0) {
      value *= -1;
    }

    if (value < 1.0) {
      return bettedCoins * 1.2;
    } else if (value < 1.5) {
      return bettedCoins * 1.05;
    } else {
      return 0;
    }
  }

  compareBetGen (bettedValue, actualValue, bettedCoins = document.getElementById('txtFieldAmount').value) {
    //use weather.weather[0].main.toLowerCase()

    // var actualValue = this.weather.main.description; maybe a way to get value, have yet to finally test how to get this value now
    // it is yet to be tested out
    if (bettedValue == actualValue) {
      return bettedCoins * 1.1;
    } else {
      return 0;
    }
  }

  makeBet (bettedCoins, time) {

    //still yet open to work out saving bet to user profile
    /* if (user pressed buttonForGeneralBet) {
    betType = 0;
    } else if (user pressed buttonForTempBet) {
    betType = 1;
    }
    */
    var betType = 0;

    var betDate = new Date(time.getTime() + 7 * 24 *60 *60 * 1000);  //set betDate to in 7 seven days
    // when the bet will be realized
    return betDate, betType;
  }

  checkBet (betType, bettedValue, actualValue, bettedCoins  = document.getElementById('txtFieldAmount').value) {
    if (betType == 0) {
      return this.compareBetGen(bettedValue, actualValue, bettedCoins)
    } else if (betType == 1) {
      return this.compareBetTemp(bettedValue, actualValue, bettedCoins)
    } else {
      return;
    }
  }

  checkDate (betDate) {
    //Valid solution? or do we have to use a sleeper function, would have to run for every bet, would be a problem I fear
    var currentTime = new Date();
    if (currentTime - betDate >= 0) {
      return this.checkBet;
    }

  }




}
