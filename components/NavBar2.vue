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
        <v-toolbar-title>  <NuxtLink to="/"  class="nuxt-link-active">WEATHER WETTEN</NuxtLink></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn color="black" v-if="$fire.auth.currentUser != null">
            <NuxtLink to="/bet" class="nuxt-link-active">BET</NuxtLink>
          </v-btn>
          <v-btn color="black">
            <nuxt-link to="/leaderboards" class="nuxt-link-active">LEADERBOARDS</nuxt-link>
          </v-btn>
          <v-btn color="black">
            <nuxt-link to="/weathercoin" class="nuxt-link-active">WEATHERCOIN</nuxt-link>
          </v-btn>
          <v-btn color="black">
            <nuxt-link to="/aboutus" class="nuxt-link-active">ABOUT US</nuxt-link>
          </v-btn>
          <v-btn color="black" v-if="$fire.auth.currentUser == null">
            <nuxt-link to="/Login" class="nuxt-link-active">LOG IN</nuxt-link>
          </v-btn>
          <v-btn color="black" v-if="$fire.auth.currentUser != null">
            <nuxt-link to="/Profile" class="nuxt-link-active">PROFILE</nuxt-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    <!-- NAVBAR DRAWER -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color="black"
      height="250"
      width="200"
      class="my-14"
    >

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
              <nuxt-link :to="{ path: item.link, query: { plan: 'private' }}" class="nuxt-link-active" >{{ item.title }} </nuxt-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </v-app-bar>

</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        {title: 'BET', icon: 'mdi-view-dashboard', link: 'bet'},
        {title: 'LEADERBOARD', icon: 'mdi-view-dashboard', link: 'leaderboards'},
        {title: 'WEATHERCOIN', icon: 'mdi-view-dashboard', link: 'weathercoin'},
        {title: 'ABOUT US', icon: 'mdi-view-dashboard', link: 'aboutus'},
        {title: 'LOG IN', icon: 'mdi-view-dashboard', link: 'Login'},
        {title: 'PROFILE', icon: "mdi-view-dashboard", link: 'Profile'}
      ],
    }
  }
}

</script>

<style>
.nuxt-link-active {
  font-weight: bold;
  color: green;
  text-decoration: none;
}
.nuxt-link-active:hover {
  font-weight: bold;
  color: green;
  text-decoration: none;
}
</style>
