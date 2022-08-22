<template>
    <v-app>
    <nav-bar2/>
   <!-- <hero/> -->
      <widget/>

     <!-- <Footer/> -->
    </v-app>
</template>


<script>
import NavBar2 from "../components/NavBar2";
import HelloWorld from "@/components/HelloWorld";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Widget from "@/components/Widget";
export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar2,
    Hero,
    Footer,
    Widget
  }
}
</script>
// --------------------------------------------------------------------------------------------------------------
// ???
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
  geoResponse;

  Request (cityname) {
    console.log("GeoAPI");
    let tempUrl = this.geoUrl;
    tempUrl += ("q=" + cityname + "&" + "appid=" + Key.apiKey + "&limit=1");
    let request = new XMLHttpRequest();
    request.open("GET", tempUrl);
    request.send();
    var response;
    request.onload = () => {
      response = JSON.parse(request.response);
      console.log(response);
      this.geoResponse = new GeoResponse(response[0].name, response[0].lat, response[0].lon, response[0].country);
      console.log(this.geoResponse.country);
      if(this.geoResponse.country == "AT"){
        console.log("Country is valid.");
        new WeatherAPI().Request(this.geoResponse.lat, this.geoResponse.lon);
      }
      else{
        console.log("Country is invalid!");
      }
    }
  }
}

class GeoResponse {
  name;
  lat;
  lon;
  country;

  constructor(name, lat, lon, country) {
    this.name = name;
    this.lat = lat;
    this.lon = lon;
    this.country = country;
  }
}

class WeatherAPI {
  weatherUrl = "https://api.openweathermap.org/data/2.5/weather?";

  Request (lat, lon) {
    console.log("WeatherAPI");
    let tempUrl = this.weatherUrl;
    tempUrl += ("lat=" + lat + "&" + "lon=" + lon + "&" + "appid=" + Key.apiKey + "&units=metric&lang=en");
    let request = new XMLHttpRequest();
    request.open("GET", tempUrl);
    request.send();
    var response;
    request.onload = () => {
      response = JSON.parse(request.response);
      console.log(response);
      console.log("Weather in " + response.name + " is " + response.main.temp + "° C");
    }
  }
}

window.onload = function () {
  console.log("WINDOW ON LOAD");
  new GeoAPI().Request("Vienna", "AT");
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
// --------------------------------------------------------------------------------------------------------------
