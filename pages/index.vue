<template>
    <v-app>
    <!-- <nav-bar/> -->
    <nav-bar2/>
    <hero/>
    <HelloWorld/>
    <HelloWorld/>
    <HelloWorld/>
    <HelloWorld/>
    <HelloWorld/>
      <Footer/>
    </v-app>
</template>


<script>
import NavBar2 from "../components/NavBar2";
import HelloWorld from "@/components/HelloWorld";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
alert("TEST");
export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar2,
    Hero,
    Footer
  },
  mounted() {
    const weatherapijs = document.createElement("script");
    weatherapijs.setAttribute(
      "src",
      "js/weatherapi.js"
    );
    document.head.appendChild(weatherapijs);
  }
}
</script>
