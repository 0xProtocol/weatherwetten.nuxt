<template>
  <div id="app">
    <v-app>
      <nav-bar2/>

      <div class="about">
        <h1>ABOUT US</h1>

        <!-- CARD 1 -->
        <div class="body">
          <div class="card">
            <div class="content">
              <h2>HOW TO BET</h2><br>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi ipsa ipsum iure minus
                reiciendis, vel. Accusantium, dolor doloribus eveniet nobis non nostrum provident quos similique. Ad
                autem consequatur culpa excepturi natus nobis provident sequi vel! Ad cupiditate doloremque,
                exercitationem explicabo illo in labore nulla optio tenetur voluptates. Magnam, rem!</p>
            </div>
            <img src="../assets/img/betting2.png">
          </div>
        </div>


        <!-- CARD 2-->

        <div class="body">
          <div class="card">
            <div class="content">
              <h2>THE BETTING SYSTEM</h2><br>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi ipsa ipsum iure minus
                reiciendis, vel. Accusantium, dolor doloribus eveniet nobis non nostrum provident quos similique. Ad
                autem consequatur culpa excepturi natus nobis provident sequi vel! Ad cupiditate doloremque,
                exercitationem explicabo illo in labore nulla optio tenetur voluptates. Magnam, rem!</p>
            </div>
            <img src="../assets/img/weatherstation2.png">
          </div>
        </div>

        <!-- CARD 3-->

        <div class="body">
          <div class="card">
            <div class="content">
              <h2>Our Weatherstations</h2><br>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi ipsa ipsum iure minus
                reiciendis, vel. Accusantium, dolor doloribus eveniet nobis non nostrum provident quos similique. Ad
                autem consequatur culpa excepturi natus nobis provident sequi vel! Ad cupiditate doloremque,
                exercitationem explicabo illo in labore nulla optio tenetur voluptates. Magnam, rem!</p>
            </div>
            <img src="../assets/img/concept.png">
          </div>
        </div>

        <!-- CARD 4  -->
        <div class="body">
          <div class="card">
            <div class="content">
              <h2>The Leaderboards</h2><br>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi ipsa ipsum iure minus
                reiciendis, vel. Accusantium, dolor doloribus eveniet nobis non nostrum provident quos similique. Ad
                autem consequatur culpa excepturi natus nobis provident sequi vel! Ad cupiditate doloremque,
                exercitationem explicabo illo in labore nulla optio tenetur voluptates. Magnam, rem!</p>
            </div>
            <img src="../assets/img/leaderboards.png">
          </div>
        </div>
      </div>
      <FooterBlack/>
    </v-app>
  </div>
</template>


<script>
import NavBar2 from "@/components/NavBar2";
import Hero from "@/components/Hero";
import Footer from "@/components/FooterBlack";

export default {
  name: "aboutus",
  components: {
    NavBar2,
    Hero,
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url('../assets/img/aboutme.jpg');
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
  background-color: black;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url('../assets/img/cards.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.card:hover {
  box-shadow: 0 0 15px #ffffff; /*shadow around v-card*/
  background-image: linear-gradient(180deg, rgba(0,0,0,0) 80%, rgba(0,0,0,1) 20%); /* make background black when hovered */
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
  position: relative;
  display: block;
  margin: 50px;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
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
}

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
  }
}

@media (max-width: 720px) {
  .card {
    width: auto;
    max-width: 550px;
  }
}

@media (max-width: 620px) {
  .card {
    width: auto;
    max-width: 400px;
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
    height: 650px;
  }
  .card .content h2 {
    font-size: 1.5em;
    line-height: 1em;
  }
  .body {
    min-height: 120vh;
  }
  .card:hover img {
    bottom: 75%;
    height: 100px;
  }
  .card img {
    position: absolute;
    bottom: 0;
    transform: translate(-50%, -120%);
    height: 200px;
    transition: 0.5s;
  }
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
</style>
