<template>
  <div id="app">
  <v-app>
    <nav-bar2/>
    <Hero/>
    <Footer/>
  </v-app>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import NavBar2 from "@/components/NavBar2";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default {
  name: "HelloWorld",
  components: {
    HelloWorld,
    NavBar2,
    Footer,
    Hero
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#app {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url('../assets/img/weathercoin2.jpg');
  background-size: cover;
  width: 100%;
  height: 100%;
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
</style>
