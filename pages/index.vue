<template>
    <v-app>
    <nav-bar2/>
    <hero/>

      <Footer/>
    </v-app>
</template>


<script>
import NavBar2 from "../components/NavBar2";
import HelloWorld from "@/components/HelloWorld";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar2,
    Hero,
    Footer
  }
}
</script>
