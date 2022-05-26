<template>
  <v-app>

    <v-app-bar app color="black">
      <v-toolbar color="black">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <div class="pb-2">
        <v-img
          max-height="60"
          max-width="60"
          :src="require('../assets/img/icon.png')"></v-img>
        </div>
        <v-toolbar-title>WEATHER WETTEN</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn color="black" ><nuxt-link to="/profile" tag="a">PROFILE</nuxt-link></v-btn>
          <v-btn color="black" ><nuxt-link to="/bet" tag="a">BET</nuxt-link></v-btn>
          <v-btn color="black"  ><nuxt-link to="/leaderboards" tag="a">LEADERBOARDS</nuxt-link></v-btn>
          <v-btn color="black" ><nuxt-link to="/weathercoin" tag="a">WEATHERCOIN</nuxt-link></v-btn>
          <v-btn  color="black" ><nuxt-link to="/aboutus" tag="a">ABOUT US</nuxt-link></v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main color="white">

    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
.nuxt-link-active {
  font-weight: bold;
}
.nuxt-link-active {
  color: red;
}
</style>
