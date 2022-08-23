<template>
  <div id="app">
    <v-app>
    <nav-bar2/>
    <bet/>
    <Footer/>
    </v-app>
  </div>
</template>

<script>
import Bet from "@/components/Bet";
export default {
  name: "bet",
  components: {Bet}
}
</script>

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
