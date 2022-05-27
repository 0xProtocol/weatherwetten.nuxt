<template>

  <v-app-bar app color="black">
    <v-toolbar color="black" height="60">
        <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <div class="pb-2">
          <v-img
            max-height="60"
            max-width="60"
            :src="require('../assets/img/icon.png')"></v-img>
        </div>
        <v-toolbar-title>WEATHER WETTEN</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn color="black">
            <nuxt-link to="/profile" tag="a">PROFILE</nuxt-link>
          </v-btn>
          <v-btn color="black">
            <nuxt-link to="/bet" tag="a">BET</nuxt-link>
          </v-btn>
          <v-btn color="black">
            <nuxt-link to="/leaderboards" tag="a">LEADERBOARDS</nuxt-link>
          </v-btn>
          <v-btn color="black">
            <nuxt-link to="/weathercoin" tag="a">WEATHERCOIN</nuxt-link>
          </v-btn>
          <v-btn color="black">
            <nuxt-link to="/aboutus" tag="a">ABOUT US</nuxt-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

    </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        {title: 'PROFILE', icon: 'mdi-view-dashboard', link: 'profile'},
        {title: 'BET', icon: 'mdi-view-dashboard', link: 'bet'},
        {title: 'LEADERBOARD', icon: 'mdi-view-dashboard', link: 'leaderboards'},
        {title: 'WEATHERCOIN', icon: 'mdi-view-dashboard', link: 'weathercoin'},
        {title: 'ABOUT US', icon: 'mdi-view-dashboard', link: 'aboutus'},
      ],
    }
  }
}

</script>

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
.overlay{
  justify-content: center;
  align-items: center;
  transform: scale(1.03);
}
</style>
