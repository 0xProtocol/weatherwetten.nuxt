<template>
  <div>
 <nav-bar/>
  <HelloWorld/>
    <HelloWorld/>
    <HelloWorld/>
    <HelloWorld/>
    <HelloWorld/>

  </div>
</template>


<script>
import NavBar from "../components/NavBar";
import HelloWorld from "@/pages/profile";
export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar
  }
}
</script>
