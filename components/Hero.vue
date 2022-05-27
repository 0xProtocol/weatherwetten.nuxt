<template>
<v-app>
<v-main color="white">

<span class="hero"></span>
<!-- Overlay over img-->
<v-overlay absolute>
  <v-card flat color="transparent" >
    <v-card-text class="white--text font-weight-black text-center d-flex flex-column align-center justify-center"
                 :class="headingClass">BET WITH WEATHERCOIN</v-card-text>
    <v-card-subtitle class="white--text text-center d-flex flex-column align-center justify-center" :class="subtitleClass">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem blanditiis, commodi cum dignissimos dolor dolore enim eum id illum in iusto, nemo omnis placeat, quis quisquam<br> sed sequi veritatis. Minima, quibusdam, quos! Consectetur ducimus eaque et, fuga iure labore maiores modi <br>possimus praesentium quas quisquam quod quos ratione, reiciendis!</v-card-subtitle>
  </v-card>
</v-overlay>

<!-- <iframe
  width="560"
  height="315"
  :src="require('../assets/img/video.mp4')"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe> -->
</v-main>

<v-footer app>
<!-- -->
</v-footer>
</v-app>
</template>

<style>
.hero {
  background: url('../assets/img/hero.jpg');
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1.03); /*to scale img right to main element (not really a good way but working)*/
}
</style>

