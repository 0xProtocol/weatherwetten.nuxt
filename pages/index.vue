<template>
    <v-app>
    <!-- <nav-bar/> -->
    <nav-bar2/>
    <hero/>
    <HelloWorld/>
    <HelloWorld/>
    <HelloWorld/>
    <HelloWorld/>
    <HelloWorld/>
      <Footer/>
    </v-app>
</template>


<script>
import NavBar2 from "../components/NavBar2";
import HelloWorld from "@/components/HelloWorld";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar2,
    Hero,
    Footer
  }
}
</script>
// --------------------------------------------------------------------------------------------------------------
<!--
<script>
// Contains the current API Key
class Key {
  static apiKey = "67c4e15fa55514beb2e8755151915130";
}

// Since the WeatherAPI only works with coordinates and not with city names and so on, we have to use
// the GeoAPI (from the same company, with the same key) to convert a given city name to its coordinate,
// which we can then use for the WeatherAPI call
class GeoAPI {
  geoUrl = "https://api.openweathermap.org/geo/1.0/direct?";

  Request (cityname) {
    let tempUrl = this.geoUrl;
    tempUrl += ("q=" + cityname + "&" + "limit=" + 1 + "&" + "appid=" + Key.apiKey);
    //console.log(tempUrl);
    let request = new XMLHttpRequest();
    console.log(tempUrl);
    request.open("GET", tempUrl);
    request.send();
    request.onload = () => {
      var response = JSON.parse(request.response);
      console.log(response);
      console.log(response[0].lat);
      console.log(response[0].lon);
      //response = [new GeoResponse(JSON.parse(request.response))];
    }
  }
}

class GeoResponse {
  name;
  local_names;
  lat;
  lon;
  country;

  constructor(name, local_names, lat, lon, country) {
    this.name = name;
    this.local_names = local_names;
    this.lat = lat;
    this.lon = lon;
    this.country = country;
  }
}

//
class WeatherAPI {
  url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
}

window.onload = function () {
  console.log("WINDOW ON LOAD");
  new GeoAPI().Request("Vienna", "9", "AT");
}
/*
export default {
  mounted() {
    let script = document.createElement("script");
    script.setAttribute("src", "js/weatherapi.js");
    document.head.appendChild(script);
  }
};
 */
</script>
-->
