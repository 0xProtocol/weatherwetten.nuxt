<template>
  <div id="app">
    <v-app>
      <nav-bar2/>


      <section>
        <div class="aboutsection">
          <h1>ABOUT US</h1>
          <!----About section start---->
          <section class="about">
            <div class="main">
              <img src="../assets/img/betting.png">
              <div class="about-text">
                <h5>The betting system</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem deleniti eaque et fugit, harum iste iure laboriosam laborum magnam minima numquam officia, quis quisquam quod ratione, reprehenderit suscipit. A consequatur dolor eaque hic ipsa, itaque neque optio placeat quod reprehenderit tenetur unde voluptate voluptatum! Consequuntur eaque eum recusandae sunt!</p>

              </div>
            </div>
          </section>

          <!-- SECTION 2-->
          <section class="about">
            <div class="main">
              <div class="about-text">
                <h5>The concept of weather betting</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis commodi, culpa cupiditate deleniti dicta dolorum eaque earum enim eos est et excepturi explicabo hic illum ipsa ipsam libero magni maiores nemo nostrum, pariatur perferendis perspiciatis placeat provident quia quos reiciendis sequi similique tempora totam ullam velit voluptas! Necessitatibus, repellendus?</p>

              </div>
              <img src="../assets/img/weatherstation2.png">
            </div>
          </section>


          <!-- SECTION 3-->
          <section class="about">
            <div class="main">
              <img src="../assets/img/concept.png">
              <div class="about-text">
                <h5>Our Weatherstations</h5>
                <p>I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the
                  website more & more interactive with web animations.I can provide clean code and pixel perfect design.
                  I also make the website more & more interactive with web animations.A responsive design makes your
                  website accessible to all users, regardless of their device.</p>

              </div>
            </div>
          </section>
        </div>
      </section>

      <!-- SECTION 4  -->
      <section class="about">
        <div class="main">
          <div class="about-text">
            <h5>The Leaderboards</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis commodi, culpa cupiditate deleniti dicta dolorum eaque earum enim eos est et excepturi explicabo hic illum ipsa ipsam libero magni maiores nemo nostrum, pariatur perferendis perspiciatis placeat provident quia quos reiciendis sequi similique tempora totam ullam velit voluptas! Necessitatibus, repellendus?</p>
          </div>
          <img src="../assets/img/leaderboards.png">
        </div>
      </section>


      <FooterBlack/>
    </v-app>
  </div>
</template>


<script>
import HelloWorld from "@/pages/profile";
import NavBar2 from "@/components/NavBar2";
import Hero from "@/components/Hero";
import Footer from "@/components/FooterBlack";

export default {
  name: "HelloWorld",
  components: {
    HelloWorld,
    NavBar2,
    Hero,
    Footer
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#app {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url('../assets/img/aboutme.jpg');
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

.aboutsection {
  margin-top: 100px;
  text-align: center;
}

/*XXXXXXXX NEW */
.btn {
  background-color: #f9004d;
  color: white;
  text-decoration: none;
  border: 2px solid transparent;
  font-weight: bold;
  padding: 10px 25px;
  border-radius: 30px;
  transition: transform .4s;
}

.btn:hover {
  transform: scale(1.2);
}

h3 {
  color: white;
  font-size: 25px;
  margin-bottom: 50px;
}

h4 {
  color: #fcfc;
  letter-spacing: 2px;
  font-size: 20px;
}

.about {
  width: 100%;
  padding: 100px 0px;
}

.about img {
  height: auto;
  width: 430px;
  margin-right: 20px;
  margin-left: 20px;
}

.about-text {
  width: 550px;
}

.main {
  width: 1130px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.about-text h2 {
  color: white;
  font-size: 75px;
  text-transform: capitalize;
  margin-bottom: 20px;
}

.about-text h5 {
  color: white;
  letter-spacing: 2px;
  font-size: 22px;
  margin-bottom: 25px;
  text-transform: capitalize;
}

.about-text p {
  color: #fcfc;
  letter-spacing: 1px;
  line-height: 28px;
  font-size: 18px;
  margin-bottom: 45px;
}

button {
  background-color: #f9004d;
  color: white;
  text-decoration: none;
  border: 2px solid transparent;
  font-weight: bold;
  padding: 13px 30px;
  border-radius: 30px;
  transition: .4s;
}

button:hover {
  background-color: transparent;
  border: 2px solid #f9004d;
  cursor: pointer;
}

.service {
  background: #101010;
  width: 100%;
  padding: 100px 0px;
}

.title h2 {
  color: white;
  font-size: 75px;
  width: 1130px;
  margin: 30px auto;
  text-align: center;
}

h5 {
  color: white;
  font-size: 23px;
  margin-bottom: 15px;
}

</style>
