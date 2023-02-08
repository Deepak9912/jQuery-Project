$(document).ready(function(){
    $('#form-submit').submit('click', function(e){
        performSearch(e);
    })
})

function performSearch(e){
    var request;
    e.preventDefault();

    request = $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        type: "GET",
        data: {
            q: $('#city').val(),
            appid: '5192abbc047ff7b1faaf66409ebeb16e',
            units: 'metric'
        }
    });
    request.done(function(response){
        formatSearch(response);
    })

    function formatSearch(jsonObject){
        var city_name = jsonObject.name;
        var city_weather = jsonObject.weather[0].main;
        var feels_like = jsonObject.main.feels_like;
        var city_temp = jsonObject.main.temp;
        var city_description = jsonObject.weather[0].description;
        var city_humidity = jsonObject.humidity;
        var city_visibility = jsonObject.visibility;
        var city_country = jsonObject.sys.country;
        var city_timezone = jsonObject.timezone;

        $('#city-name').text(city_name);
        $('#city_weather').text(city_weather);
        $('#city_description').text(city_description);
        $('#feels_like').text(feels_like+ " C feels like");
        $('#city-temp').text(city_temp+ " Celsius");
        $('#city_humidity').text(city_humidity+ " humidity");
        $('#city_visibility').text(city_visibility+ " Visibility");
        $('#city_country').text(city_country);
        $('#city_timezone').text(city_timezone);
    }
}