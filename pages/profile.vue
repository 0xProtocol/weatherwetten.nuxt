<template>
<v-app>
<NavBar2/>
  <v-main>

    <v-btn @click="logoutUser" id="logoutButton">
      Logout
    </v-btn>

  </v-main>


</v-app>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  methods: {

    async logoutUser() {
      await this.$fire.auth.signOut()
      this.$router.push("/")
    }


  }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

#logoutButton {
  position: fixed;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;

}
</style>
