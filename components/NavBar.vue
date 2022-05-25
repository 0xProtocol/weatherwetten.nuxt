<template>
  <v-app>
    <v-navigation-drawer app>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app color="black">
      <v-toolbar color="black">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>WEATHER WETTEN</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn color="black" flat><nuxt-link to="/profile" tag="a">PROFILE</nuxt-link></v-btn>
          <v-btn color="black" flat>BET</v-btn>
          <v-btn color="black"  flat>LEADERBOARDS</v-btn>
          <v-btn color="black" flat>WEATHERCOIN</v-btn>
          <v-btn  color="black" flat>ABOUT US</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
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
