<template>
  <v-footer app color="transparent"> <!-- transparent footer -->
    <v-col className="text-center" cols="12"> <!-- coloum is in the mid -->
      <strong>Sun Token Price: {{ this.sunToken }}$</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "footerCoinPrice",
  data() {
    return {
      sunToken: undefined,
      url_base: 'https://api.coingecko.com/api/v3/simple/price?ids=sun-token&vs_currencies=usd',
    }
  },
  /* get's instantly called*/
  async created() {
    fetch(`${this.url_base}`) //get data from api
      .then((res) => res.json()) //if the request was successful go further with then (deserialize .json)
      .then((data) => {
        this.sunToken = data["sun-token"]["usd"] //filter data and give out the usd of sun-token
        //console.log(data["sun-token"]["usd"]);
      });
  }
};
</script>
