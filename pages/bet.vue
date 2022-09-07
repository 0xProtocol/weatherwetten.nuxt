<template>
  <div id="app">
    <v-app> <!-- The Vuetify v-app component is an essential component and required in all applications made with the framework -->
    <nav-bar/> <!-- NavBar component -->
    <betting/> <!-- Betting component -->
    <footer/> <!-- Footer component -->
    </v-app>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#app {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../assets/img/betting2.jpg'); /*background img*/
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>
