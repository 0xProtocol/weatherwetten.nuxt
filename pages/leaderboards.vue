<template>

  <v-app>
    <nav-bar2></nav-bar2>
    <score-table id="table"></score-table>

    <Footer/>
  </v-app>

</template>

<script>
import NavBar2 from "../components/NavBar2";
import HelloWorld from "@/components/HelloWorld";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default {
  name: "leaderboards",
  props: {
    msg: String,
  },  components: {
    HelloWorld,
    NavBar2,
    Hero,
    Footer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#app {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('../assets/img/leaderboards3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#table {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  width: 30%;
}

@media screen and (max-width: 800px) {
  #table {
    width: 70%;
  }
}





</style>
