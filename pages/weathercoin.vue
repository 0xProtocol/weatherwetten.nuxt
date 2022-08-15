<template>
  <div id="app">
    <v-app>
      <nav-bar2/>
      <section>
        <div class="about">
          <h1>WEATHERCOIN</h1>
          <div class="wrapper">
            <div class="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis dolores eligendi eveniet in ipsum laboriosam nobis optio quidem similique. Amet culpa cupiditate debitis ducimus enim eum facere fuga inventore laborum nemo numquam perferendis quibusdam quos recusandae reiciendis, repellat, sint tempora tempore. Assumenda illo molestias non odio odit sapiente ullam?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid debitis fuga praesentium quidem voluptatum. Aliquid animi at aut autem beatae consectetur culpa dolores eum fuga in ipsum labore neque numquam officia quaerat quod, quos repudiandae sequi totam voluptatum? Explicabo facere laborum repudiandae, similique tempore vel? Ab aspernatur at, autem consequatur corporis cum cumque dolorum error et excepturi expedita facilis fugiat laboriosam magni, minus neque nesciunt nulla obcaecati odio porro quam quibusdam quos reprehenderit sint tempora velit veniam voluptatum. Incidunt quam sed sit voluptas! Accusantium alias aliquam, aliquid autem consectetur consequatur delectus dicta doloribus eaque est eum excepturi exercitationem explicabo facere facilis id ipsa ipsum iure labore laborum laudantium libero molestiae nemo neque non optio pariatur quasi quis quo reiciendis repellendus sapiente sit tempora temporibus ut voluptas voluptatibus? Adipisci amet animi atque blanditiis corporis delectus dignissimos dolore, dolorem dolorum earum excepturi, fuga hic ipsa nesciunt nobis omnis optio perspiciatis quaerat quia quibusdam quo recusandae rem repellendus similique temporibus. Dignissimos distinctio doloremque enim! A accusantium aliquid amet architecto assumenda delectus dolore dolorem earum eum eveniet harum impedit libero magni maiores nam, nobis praesentium provident saepe sapiente sunt totam, vero voluptate, voluptatibus. Cum, debitis dolorem facere laborum quas reiciendis veritatis? Ad autem commodi, culpa dolore dolorem doloribus ea earum eligendi eveniet excepturi facere fugiat hic illum inventore ipsa ipsam ipsum laudantium maxime minima minus mollitia nam, nostrum pariatur quae quaerat qui quibusdam repellendus similique ut voluptatem! Consectetur consequuntur dignissimos dolore dolorum enim, est expedita impedit magni obcaecati quos sed sequi sit, suscipit?</p>
              <v-container fill-height grid-list-md text-xs-center>
              <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4"> BENEFIT 1 </div>
                    <v-list-item-title class="text-h5 mb-2">EDUCATION</v-list-item-title>
                    <v-list-item-subtitle>We want to educate in risk analysis</v-list-item-subtitle> </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="grey"><img src="../assets/img/weathercoin3.gif" alt="John"></v-list-item-avatar></v-list-item>
                <v-card-actions>
                </v-card-actions>
              </v-card>

              <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4"> BENEFIT 2 </div>
                    <v-list-item-title class="text-h5 mb-2">HEALTH</v-list-item-title>
                    <v-list-item-subtitle>We want to improve the mental health</v-list-item-subtitle> </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="grey"> <img src="../assets/img/weathercoin3.gif" alt="John"></v-list-item-avatar></v-list-item>
                <v-card-actions>
                </v-card-actions></v-card>

              <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4"> BENEFIT 3 </div>
                    <v-list-item-title class="text-h5 mb-2">CURE</v-list-item-title>
                    <v-list-item-subtitle>We want to cure gambling addiction</v-list-item-subtitle> </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="grey"><img src="../assets/img/weathercoin3.gif" alt="John"></v-list-item-avatar></v-list-item>
                <v-card-actions>
                </v-card-actions></v-card>

                </v-container>
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('../assets/img/weathercoin3.gif');
  background-size: contain;
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

.about {
  margin-top: 100px;
  text-align: center;
}


</style>
