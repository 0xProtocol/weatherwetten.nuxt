<template>

  <v-simple-table style="background-color: #1e1e1e; border-radius: 10px" class="table" v-if="userArray.length"> <!-- display if data is in userArray -->
    <thead> <!-- group header content in an HTML table -->
    <tr> <!-- row -->
      <th style="text-align: center; font-size: 15px; color: white">Username</th> <!-- cell -->
      <th style="text-align: center; font-size: 15px; color: white">WeatherCoin</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <!-- get's username and according weathercoins from array -->
      <td class="td">{{ this.userArray[0].username }}</td>
      <td class="td">{{ this.userArray[0].weatherCoin }}</td>
    </tr>
    <tr>
      <td class="td">{{ this.userArray[1].username }}</td>
      <td class="td">{{ this.userArray[1].weatherCoin }}</td>
    </tr>
    <tr>
      <td class="td">{{ this.userArray[2].username }}</td>
      <td class="td">{{ this.userArray[2].weatherCoin }}</td>
    </tr>
    <tr>
      <td class="td">{{ this.userArray[3].username }}</td>
      <td class="td">{{ this.userArray[3].weatherCoin }}</td>
    </tr>
    <tr>
      <td class="td">{{ this.userArray[4].username }}</td>
      <td class="td">{{ this.userArray[4].weatherCoin }}</td>
    </tr>
    </tbody>
  </v-simple-table>

</template>

<script>
export default {
  name: "scoreTable",
  data() {
    return {
      userArray: [],
    }
  },

  /* ???*/
  async created() {
    const docRef = this.$fire.firestore.collection('users');
    const snapshot = await docRef.get();
    let i = 0;
    snapshot.forEach(doc => {
      this.userArray[i] = doc.data();
      i++;
    });
    this.userArray.sort(this.compareScores);
    // console.log(this.userArray);
  },

  methods: {
    /* compare scores with two parameters */
    compareScores(a, b) {
      let scoreA = a.weatherCoin;
      let scoreB = b.weatherCoin;

      if (scoreA < scoreB) {
        return 1;
      }
      if (scoreA > scoreB) {
        return -1;
      }
      return 0; //same score
    }
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


