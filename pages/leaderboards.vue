<template>

  <v-app>
    <nav-bar2></nav-bar2>
    <div class="content">
    <h1>LEADERBOARDS</h1>
    <score-table id="table"></score-table>

    </div>
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

h1 {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;

  display: inline-block;
  padding: 15px 20px;
  position: relative;
  font-size: 1.5rem;
}

h1:after {
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

h1:hover:after {
  width: 100%;
  left: 0;
}
.content{
  margin-top: 100px;
  text-align: center;
}
</style>
