<template>
  <v-app>
    <v-main color="white">

      <!-- <span class="hero"></span> -->
      <video class="herovid" playsinline autoplay muted loop>
        <source :src='require("../assets/img/video.mp4")' type='video/mp4'>
      </video>
      <!-- Overlay over img-->
      <v-card flat color="transparent">
        <v-card-text
          class="white--text font-weight-black text-center d-flex flex-column align-center justify-center headingClass">
          BET WITH WEATHERCOIN
        </v-card-text>
        <v-card-subtitle class="white--text text-center d-flex flex-column align-center justify-center"
                         :class="subtitleClass">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem
          blanditiis, commodi cum dignissimos dolor dolore enim eum id illum in iusto, nemo omnis placeat, quis quisquam<br>
          sed sequi veritatis. Minima, quibusdam, quos! Consectetur ducimus eaque et, fuga iure labore maiores modi <br>possimus
          praesentium quas quisquam quod quos ratione, reiciendis!
        </v-card-subtitle>
        <v-container class="fill-height align-center justify-center">
          <v-btn class="white--text font-weight-black text-center d-flex flex-column align-center justify-center">
            <nuxt-link to="/SignUp" class="nuxt-link-active">SIGN UP</nuxt-link>
          </v-btn>
        </v-container>
      </v-card>

      <!-- <iframe
        width="560"
        height="315"
        :src="require('../assets/img/video.mp4')"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> -->
    </v-main>

  </v-app>
</template>
<script>
import Widget from "@/components/Widget";

export default {
  name: 'bet',
  components: {
    Widget
  }
}
</script>


<style>
.hero {
  background: url('../assets/img/video.mp4');
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1.03); /*to scale img right to main element (not really a good way but working)*/
}

.herovid {
  position: absolute;
  top: -28%; /* from browser to browser different  */

}

.nuxt-link-active {
  font-weight: bold;
  color: green;
  text-decoration: none;
  justify-content: center;
  text-align: center;
  align-content: center;
}

.nuxt-link-active:hover {
  font-weight: bold;
  color: green;
  text-decoration: none;
}

.headingClass {
  font-size: 25px;
  margin-top: 250px;
  color: blue;
}
</style>

