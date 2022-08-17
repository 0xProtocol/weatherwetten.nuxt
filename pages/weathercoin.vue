<template>
  <div id="app">
    <v-app>
      <nav-bar2/>
      <section>
        <div class="about">
          <h1>WEATHERCOIN</h1>
          <div class="wrapper">
            <div class="content">
              <v-container fill-height grid-list-md text-xs-center>
              <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4"> BENEFIT 1</div>
                    <v-list-item-title class="text-h5 mb-2">EDUCATION</v-list-item-title>
                    <v-list-item-subtitle>We want to educate in risk analysis</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="grey"><img src="../assets/img/weathercoin2.gif" alt="John">
                  </v-list-item-avatar>
                </v-list-item>
                <v-card-actions>
                </v-card-actions>
              </v-card>

              <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4"> BENEFIT 2</div>
                    <v-list-item-title class="text-h5 mb-2">HEALTH</v-list-item-title>
                    <v-list-item-subtitle>We want to improve mental health</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="grey"><img src="../assets/img/weathercoin2.gif" alt="John">
                  </v-list-item-avatar>
                </v-list-item>
                <v-card-actions>
                </v-card-actions></v-card>

              <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4"> BENEFIT 3</div>
                    <v-list-item-title class="text-h5 mb-2">CURE</v-list-item-title>
                    <v-list-item-subtitle>We want to cure gambling addiction</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="grey"><img src="../assets/img/weathercoin2.gif" alt="John">
                  </v-list-item-avatar>
                </v-list-item>
                <v-card-actions>
                </v-card-actions></v-card>
                </v-container>
              <h2>WEAHTERCOINS MINTED -> {{ this.userArray[0]}} </h2>
            </div>
          </div>
        </div>
      </section>

      <FooterBlack/>
    </v-app>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import NavBar2 from "@/components/NavBar2";
import Footer from "@/components/FooterBlack";
import Hero from "@/components/Hero";

export default {
  name: "HelloWorld",
  components: {
    HelloWorld,
    NavBar2,
    Footer,
    Hero
  },
  props: {
    msg: String,
  },
  data() {
    let minedWeatherCoins;
    return {
      userArray: [],
      int: minedWeatherCoins

    }
  },

  async created() {
    const docRef = this.$fire.firestore.collection('users');
    const snapshot = await docRef.get();
    this.minedWeatherCoins=0;
    let i = 0;
    snapshot.forEach(doc => {
      this.userArray[i] = doc.data();
      this.minedWeatherCoins =  this.minedWeatherCoins + this.userArray[i].weatherCoin;
      i++;
    });

    this.userArray.sort(this.compareScores); //first sort then calculating
    console.log(this.minedWeatherCoins);
    this.userArray[0] =  this.minedWeatherCoins;
    console.log(this.userArray);

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#app {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('../assets/img/weathercoin.gif');
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

}

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

h1 {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;

  display: inline-block;
  padding: 15px 20px;
  position: relative;
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

h2 {
  padding: 450px;
  color: white;
  font-size: 2rem;
  font-weight: 500;
  position: relative;
  letter-spacing: .025em;
  text-transform: uppercase;

  text-shadow: .05em 0 0 rgba(255, 0, 0, .75),
  -.05em -.025em 0 rgba(0, 255, 0, .75),
  .025em .05em 0 rgba(0, 0, 255, .75);

  animation: glitch 525ms infinite;
}

h2::before,
h2::after {
  content: attr(data-text);
  position: absolute;
  letter-spacing: .025em;
  top: 0;
  left: 0;
  opacity: .7;
}
h2:before {
  animation: glitch 675ms infinite;
  transform: translate(-.035em, -.025em);
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
}
h2::after {
  animation: glitch 333ms infinite;
  transform: translate(.035em, .025em);
  clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
}

@keyframes glitch {
  0% {
    text-shadow: .05em 0 0 rgba(255, 0, 0, .75),
    -.05em -.025em 0 rgba(0, 255, 0, .75),
    .025em .05em 0 rgba(0, 0, 255, .75);
  }
  14% {
    text-shadow: .05em 0 0 rgba(255, 0, 0, .75),
    -.05em -.025em 0 rgba(0, 255, 0, .75),
    .025em .05em 0 rgba(0, 0, 255, .75);
  }
  15% {
    text-shadow: -.05em -.025em 0 rgba(255, 0, 0, .75),
    .025em .025em 0 rgba(0, 255, 0, .75),
    -.05em -.05em 0 rgba(0, 0, 255, .75);
  }
  49% {
    text-shadow: -.05em -.025em 0 rgba(255, 0, 0, .75),
    .025em .025em 0 rgba(0, 255, 0, .75),
    -.05em -.05em 0 rgba(0, 0, 255, .75);
  }
  50% {
    text-shadow: .025em .05em 0 rgba(255, 0, 0, .75),
    .05em 0 0 rgba(0, 255, 0, .75),
    0 -.05em 0 rgba(0, 0, 255, .75);
  }
  99% {
    text-shadow: .025em .05em 0 rgba(255, 0, 0, .75),
    .05em 0 0 rgba(0, 255, 0, .75),
    0 -.05em 0 rgba(0, 0, 255, .75);
  }
  100% {
    text-shadow: -.025em 0 0 rgba(255, 0, 0, .75),
    -.025em -.025em 0 rgba(0, 255, 0, .75),
    -.025em -.05em 0 rgba(0, 0, 255, .75);
  }
}


.about {
  margin-top: 100px;
  text-align: center;
}


</style>
