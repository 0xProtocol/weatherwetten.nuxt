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
        <v-toolbar-title>  <NuxtLink to="/"  class="nuxt-link-active-underline">WEATHER WETTEN</NuxtLink></v-toolbar-title> <!--  or nuxt-link-active -->
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn color="transparent" v-if="$fire.auth.currentUser != null">
            <NuxtLink to="/bet" class="nuxt-link-active-underline">BET</NuxtLink>
          </v-btn>
          <v-btn color="black">
            <nuxt-link to="/leaderboards" class="nuxt-link-active-underline">LEADERBOARDS</nuxt-link>
          </v-btn>
          <v-btn color="black">
            <nuxt-link to="/weathercoin" class="nuxt-link-active-underline">WEATHERCOIN</nuxt-link>
          </v-btn>
          <v-btn color="black">
            <nuxt-link to="/aboutus" class="nuxt-link-active-underline">ABOUT US</nuxt-link>
          </v-btn>
          <v-btn color="black" v-if="$fire.auth.currentUser == null">
            <nuxt-link to="/Login" class="nuxt-link-active-underline">LOG IN</nuxt-link>
          </v-btn>
          <v-btn color="black" v-if="$fire.auth.currentUser != null">
            <nuxt-link to="/Profile" class="nuxt-link-active-underline">PROFILE</nuxt-link>
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
          <v-list-item-icon >
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
      if (this.$fire.auth.currentUser!=null) {
        console.log("LOGGED IN");
        return {
          drawer: null,
          items: [
            {title: 'BET', icon: 'mdi-view-dashboard', link: 'bet'},
            {title: 'LEADERBOARDS', icon: 'mdi-view-dashboard', link: 'leaderboards'},
            {title: 'WEATHERCOIN', icon: 'mdi-view-dashboard', link: 'weathercoin'},
            {title: 'ABOUT US', icon: 'mdi-view-dashboard', link: 'aboutus'},
            {title: 'PROFILE', icon: "mdi-view-dashboard", link: 'Profile'}
          ],
        }
      } else {
        console.log("NOT LOGGED IN");
        return {

          drawer: null,
          items: [
            {title: 'LEADERBOARDS', icon: 'mdi-view-dashboard', link: 'leaderboards'},
            {title: 'WEATHERCOIN', icon: 'mdi-view-dashboard', link: 'weathercoin'},
            {title: 'ABOUT US', icon: 'mdi-view-dashboard', link: 'aboutus'},
            {title: 'LOG IN', icon: 'mdi-view-dashboard', link: 'Login'},
          ],
        }
      }
    ;
    }
}
</script>

<style>

.nuxt-link-active:hover{
  font-weight: bold;
  color: white;
  text-decoration: none;
}
.nuxt-link-active-underline {
  font-weight: bold;
  text-decoration: none;
}
.nuxt-link-active-underline:hover {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nuxt-link-active-underline:after {
  bottom: -5px;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.nuxt-link-active-underline:hover:after {
  width: 100%;
  left: 0;
}
</style>
