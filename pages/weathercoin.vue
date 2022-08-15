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
                    <div class="text-overline mb-4"> OVERLINE </div>
                    <v-list-item-title class="text-h5 mb-1"> Headline 5 </v-list-item-title>
                    <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar></v-list-item>
                <v-card-actions>
                  <v-btn outlined rounded text>Button</v-btn>
                </v-card-actions>
              </v-card>

              <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4"> OVERLINE </div>
                    <v-list-item-title class="text-h5 mb-1"> Headline 5 </v-list-item-title>
                    <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar></v-list-item>
                <v-card-actions>
                  <v-btn outlined rounded text>Button</v-btn>
                </v-card-actions></v-card>

              <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4"> OVERLINE </div>
                    <v-list-item-title class="text-h5 mb-1"> Headline 5 </v-list-item-title>
                    <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar></v-list-item>
                <v-card-actions>
                  <v-btn outlined rounded text>Button</v-btn>
                </v-card-actions></v-card>

                </v-container>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </v-app>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import NavBar2 from "@/components/NavBar2";
import Footer from "@/components/Footer";
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#app {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('../assets/img/weathercoin3.gif');
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

.about {
  margin-top: 100px;
  text-align: center;
}


</style>
