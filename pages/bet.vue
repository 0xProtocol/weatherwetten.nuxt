<template>
  <div id="app">
    <v-app>
    <nav-bar2/>
    <bet/>
      <BettingTable/>
    <Footer/>
    </v-app>
  </div>
</template>

<script>
import Bet from "@/components/Bet";
export default {
  components: {Bet}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#app {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/img/betting2.jpg'); /*background gif*/
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

}

</style>
