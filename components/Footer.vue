<template>
  <v-footer app color="transparent"> <!-- padless -->
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Weather Wetten</strong>
    </v-col>
  </v-footer>
</template>

<script>

export default {
  name: "Footer",
  props: {
    msg: String,
  },components: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
