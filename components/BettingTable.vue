<template>
  <v-simple-table class="table">
      <thead>
      <tr>
        <th class="text-center">
          Cities
        </th>
        <th class="text-center">
          Degrees
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="item in bets"
        :key="item.name"
      >
        <td class="text-center">{{ item.name }}</td>
        <td class="text-center">{{ item.degrees }}</td>
      </tr>
      </tbody>
  </v-simple-table>
</template>

<script>
export default {
  data() {
    return {
      bets: [
        {
          name: 'Vienna',
          degrees: '20°',
        },
        {
          name: 'Sydney',
          degrees: '25°',
        },
        {
          name: 'Berlin',
          degrees: '23°',
        },
        {
          name: 'Salzburg',
          degrees: '19°',
        },
        {
          name: 'Linz',
          degrees: '17°',
        },
        {
          name: 'Graz',
          degrees: '19°',
        },
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table
{
  margin-top: 20px;

}
</style>
