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
    </v-app>
</template>


<script>
import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";
import HelloWorld from "@/pages/profile";
import Hero from "@/components/Hero";

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar,
    Hero
  }
}
</script>
