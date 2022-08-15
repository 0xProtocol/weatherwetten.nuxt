<template>
  <div id="app">
  <v-app>
    <nav-bar2/>
    <section>
      <div class="about">
        <h1>WEATHERCOIN</h1>
        <div class="wrapper">
          <div class="content">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet distinctio dolore doloremque dolores ea error et expedita laboriosam modi mollitia nisi nobis porro quaerat, quia quisquam quo ratione repellat sed sint velit vero voluptatum! Cumque dolorem expedita harum maxime molestias necessitatibus recusandae sapiente? Commodi explicabo itaque labore quod.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusantium dolor dolorum eligendi hic necessitatibus neque quia quibusdam recusandae repudiandae! Ad aspernatur debitis dignissimos ducimus eum fugit illo illum laboriosam non pariatur praesentium quaerat tenetur, voluptatum. Ad at blanditiis cupiditate, dignissimos dolorem ducimus, eaque eius est eum eveniet fuga harum impedit iusto libero maiores maxime molestias mollitia natus neque non nostrum obcaecati officiis recusandae, repudiandae sit suscipit vitae voluptatem? A accusamus alias aspernatur deleniti distinctio eius eveniet ex facilis fuga illum incidunt ipsa, ipsam odit perspiciatis quaerat quis rem repellendus sapiente, vero, vitae! Doloremque earum facilis, magnam modi sunt vero.</p>
          </div>
        </div>
      </div>
    </section>

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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('../assets/img/weathercoin3.gif'); //change
  background-size: contain;
  background-repeat:   no-repeat;
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
h1 {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;

  display: inline-block;
  padding: 15px 20px;
  position: relative;
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

.about
{
  margin-top: 100px;
  text-align: center;
}


</style>
