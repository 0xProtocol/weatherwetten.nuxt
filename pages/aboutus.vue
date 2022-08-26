<template>
  <div id="app">
    <v-app>
      <nav-bar/>

      <div class="about">
        <h1>ABOUT US</h1>

        <!-- CARD 1 -->
        <div class="body">
          <div class="card">
            <div class="content">
              <h2>HOW TO BET</h2><br><br><br><br>
              <p>1. Select the city you want to bet on and press Enter</p>
              <p>2. Look on the table and decide on which odds you want to bet</p>
              <p>3. Place your bet in weathercoins in the textfield beside the buttons</p>
              <p>4. To complete the bet press the button with the right odd you want to bet on!</p>
            </div>
            <img src="../assets/img/aboutus1.png">
          </div>
        </div>


        <!-- CARD 2-->

        <div class="body">
          <div class="card">
            <div class="content">
              <h2>THE BETTING SYSTEM</h2><br><br><br><br>
              <p>Each user has a profile where his weather coins are displayed. The user can bet a maximum of this
                amount of weather coins.
                With these weather coins a user can bet on the weather in a city.</p>
              <p>With these weather coins a user can bet on the weather in a city of his choice.
                All bets and profile data are stored in our Firebase database. To retrieve and analyze the weather data
                we use OpenWeatherAPI.
                Any user can request this accurate data for the bets.
              </p>
            </div>
            <img src="../assets/img/aboutus2.png">
          </div>
        </div>

        <!-- CARD 3-->

        <div class="body">
          <div class="card">
            <div class="content">
              <h2>Our Weatherstations</h2><br><br><br><br>
              <p>With our convolutional neural networks and ML technologies, the OpenWeatherAPI significantly enhance
                fundamental global forecast models with radar-based nowcasts,
                weather satellite data and the vast network of weather stations.</p>
              <br>
              <p>Actually there are over <strong>82,000</strong> weather stations, rain gauges and other weather sensors
                you can use as a user of our website to bet on the weather!</p>
            </div>
            <img src="../assets/img/aboutus3.png">
          </div>
        </div>

        <!-- CARD 4  -->
        <div class="body">
          <div class="card">
            <div class="content">
              <h2>The Leaderboards</h2><br><br><br><br>
              <p>We have a leaderboard on our website that shows the best players with the most weathercoins.
                This is not an indicator of whether you are a good bettor or have good skills, it just shows who has the
                most!</p>
            </div>
            <img src="../assets/img/aboutus4.png">
          </div>
        </div>
      </div>
      <FooterBlack/>
    </v-app>
  </div>
</template>


<script>
import NavBar2 from "@/components/NavBar";
import Footer from "@/components/FooterBlack";

export default {
  name: "aboutus",
  components: {
    NavBar2,
    Footer
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#app {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../assets/img/concept.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  margin-top: 50px;
}

.card {
  position: relative;
  width: 1000px;
  height: 500px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  /*background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url('../assets/img/aboutus2.jpg');*/
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.card:hover {
  box-shadow: 0 0 15px #ffffff; /*shadow around v-card*/
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1) 20%); /* make background black when hovered */
  background-color: black;
}

.card img {
  position: absolute;
  bottom: 0;
  transform: translate(-50%, -70%);
  height: 200px;
  transition: 0.5s;
}

.card:hover img {
  bottom: 78%;
  height: 100px;
}

.card .content {
  margin: 50px;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
  justify-content: center;
}

.card:hover .content {
  opacity: 1;
  visibility: visible;
}

.card .content h2 {
  color: #fff;
  text-transform: uppercase;
  font-size: 1.8em;
  line-height: 1em;
}

.card .content p {
  color: #fff;
  font-size: 1.3em;

}

.about {
  margin-top: 100px;
  text-align: center;
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
  width: 100%;
  left: 0;
}

h2:hover:after {
  width: 0%; /* reset the h2 defintion -> so no effect is visible*/
}


/* responsiveness */
@media (max-width: 1190px) {
  .card {
    width: auto;
    max-width: 800px;
  }
}

@media (max-width: 991px) {
  .card {
    position: relative;
    width: auto;
    max-width: 600px;
    transition: 0.5s;
    height: 580px;
  }
  .card:hover img {
    bottom: 80%;
    height: 100px;
  }
}

@media (max-width: 720px) {
  .card {
    width: auto;
    max-width: 550px;
  }
  .card:hover img {
    bottom: 80%;
    height: 100px;
  }
}

@media (max-width: 620px) {
  .card {
    width: auto;
    max-width: 400px;
    height: 720px;
  }
  .card:hover img {
    bottom: 83%;
    height: 100px;
  }
  .card .content h2 {
    font-size: 1.6em;
    line-height: 1em;
  }
}

@media (max-width: 420px) {
  .card {
    width: auto;
    max-width: 300px;
    height: 600px;
  }
  .card .content h2 {
    font-size: 1em;
    line-height: 1em;
  }
  .card .content p {
    font-size: 1em;
    line-height: 1em;
  }
  .card:hover img {
    bottom: 82%;
    height: 100px;
  }
}

</style>
