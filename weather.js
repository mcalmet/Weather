$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    var markup = "The current weather in Chicago is" + "  " + data.currently.apparentTemperature + "  " 
    + "And the condition is" + "  " + data.currently.summary + ". " + "Tomorrow's weather will be" + "  " 
    + data.daily.data[1].summary + "  " + "The day after will be" + "  " + data.daily.data[2].summary
    + ".. " + "and the day after that will be" + "  " + data.daily.data[2].summary;

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});