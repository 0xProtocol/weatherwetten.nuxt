<template>
  <!--<table class="GeneratedTable" v-if="userArray.length">
      <thead>
      <tr>
        <th>Username</th>
        <th>WeatherCoin</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="td">{{this.userArray[0].username}}</td>
        <td class="td">{{this.userArray[0].weatherCoin}}</td>
      </tr>
      <tr>
        <td class="td">{{this.userArray[1].username}}</td>
        <td class="td">{{this.userArray[1].weatherCoin}}</td>
      </tr>
      <tr>
        <td class="td">{{this.userArray[2].username}}</td>
        <td class="td">{{this.userArray[2].weatherCoin}}</td>
      </tr>
      <tr>
        <td class="td">{{this.userArray[3].username}}</td>
        <td class="td">{{this.userArray[3].weatherCoin}}</td>
      </tr>
      <tr>
        <td class="td">{{this.userArray[4].username}}</td>
        <td class="td">{{this.userArray[4].weatherCoin}}</td>
      </tr>

      </tbody>
    </table>-->

  <v-simple-table style="background-color: #1e1e1e; border-radius: 10px" class="table" v-if="userArray.length">
    <thead>
    <tr>
      <th style="text-align: center; font-size: 15px; color: white">Username</th>
      <th style="text-align: center; font-size: 15px; color: white">WeatherCoin</th>
    </tr>
    </thead>
    <tbody>
    <tr>
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
    compareScores(a, b) {
      let scoreA = a.weatherCoin;
      let scoreB = b.weatherCoin;

      if (scoreA < scoreB) {
        return 1;
      }
      if (scoreA > scoreB) {
        return -1;
      }

      return 0;
    }
  }
}


</script>

<style scoped>
table.GeneratedTable {
  width: 40%;
  background-color: #484646;
  border-collapse: collapse;
  border-width: 2px;
  border-color: #e0d5d5;
  border-style: solid;
  color: #d6e2e7;
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;

}
.table:hover {
  box-shadow: 0 0 15px #ffffff; /*shadow around table*/
}
tr:hover {
  background-color: #262626 !important; /* hover over table entry color */
}

table.GeneratedTable td, table.GeneratedTable th {
  border-width: 2px;
  border-color: white;
  border-style: solid;
  padding: 3px;
}

table.GeneratedTable thead {
  background-color: #000000;
}

@media screen and (max-width: 525px) {
  table.GeneratedTable {
    width: 60%;
  }
}

.td {
  text-align: center;
}

table {
  padding-top: 20px;

}


</style>


