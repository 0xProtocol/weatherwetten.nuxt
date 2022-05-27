<template>
  <v-content color="black">

    <v-toolbar color="black" >
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

    <!-- NAVBAR DRAWER -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color="black"
    >
      <v-overlay>
        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <nuxt-link :to="{ path: item.link, query: { plan: 'private' }}">{{ item.title }}</nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-overlay>
    </v-navigation-drawer>
  </v-content>
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

</style>
