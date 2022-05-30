class Weather_widget {


  getWeatherWidget(city) {
    let widget = document.createElement("img");
    widget.src = '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'

    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
    window.myWidgetParam.push({id: 11,cityid: '2761369',appid: '67c4e15fa55514beb2e8755151915130',units: 'metric',containerid: 'openweathermap-widget-11',  });
    (function() {var script = document.createElement('script');script.async = true;
      script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
      var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();


  }




}
