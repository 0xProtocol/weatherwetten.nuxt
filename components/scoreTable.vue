<template>

  <v-simple-table style="background-color: #1e1e1e; border-radius: 10px" class="table" v-if="userArray.length"> <!-- display if data is in userArray -->
    <thead> <!-- group header content in an HTML table -->
    <tr> <!-- row -->
      <th style="text-align: center; font-size: 15px; color: white">Username</th> <!-- cell -->
      <th style="text-align: center; font-size: 15px; color: white">WeatherCoin</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user in userArray">
      <!-- get's username and according weathercoins from array -->
      <td class="td">{{ user.username }}</td>
      <td class="td">{{ user.weatherCoin }}</td>
    </tr>
    </tbody>
  </v-simple-table>

</template>

<script>
export default {
  name: "scoreTable",
  data() {//Data is the private memory of each component where you can store any variables you need
    return {
      userArray: [],
    }
  },
  /* get's instantly called*/
  async created() {
    fetch("/api/leaderboard", {
      method: 'GET',
      cache: 'default'
    }).then(res => {
      if (!res.ok) {
        console.log("HTTP request unsuccessful")
      }
      return res;
    })
      .then(response => response.json()) //get response in .json and deserialize to set data as a userarray
      .then(data => this.userArray = data)
  }
}
</script>

<style scoped> /* scoped = apply to elements of the current component only */
.table:hover {
  box-shadow: 0 0 15px #ffffff; /*shadow around table*/
}
tr:hover {
  background-color: #262626 !important; /* hover over table entry color */
}
</style>
