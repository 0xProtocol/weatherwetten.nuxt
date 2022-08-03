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
      <th class="text-center">

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
      <td class="text-center"><button class="btn" id="1"> {{ item.action }}  </button>  <div class="space"></div>
        <button class="btn" id="2"> {{ item.action2 }}  </button> <div class="space"></div>
        <button class="btn" id="3"> {{ item.action3 }}  </button>
      </td>
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
          action: '2x',
          action2: '4x',
          action3: '0,5x'
        },
        {
          name: 'Sydney',
          degrees: '25°',
          action: 'bet',
          action2: 'bet2',
          action3: 'bet3'
        },
        {
          name: 'Berlin',
          degrees: '23°',
          action: 'bet',
          action2: 'bet2',
          action3: 'bet3'
        },
        {
          name: 'Salzburg',
          degrees: '19°',
          action: 'bet',
          action2: 'bet2',
          action3: 'bet3'
        },
        {
          name: 'Linz',
          degrees: '17°',
          action: 'bet',
          action2: 'bet2',
          action3: 'bet3'
        },
        {
          name: 'Graz',
          degrees: '19°',
          action: 'bet',
          action2: 'bet2',
          action3: 'bet3'
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
.space {
  width: 15px;
  height: auto;
  display: inline-block;
}
</style>
