<template>
  <input v-model="textarea" class="input" placeholder="Enter Austrian city name here"></input>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input {
  margin-left: calc(50vw - 200px);
  margin-top: 50px;
  width: 400px;
  height: 40px;
  border-radius: 5px;
  border-color: white;
  border-style: solid;
  text-align: center;
  font-size: 20px;
  color:white;
}
</style>
