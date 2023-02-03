$(document).ready(function(){
    $('#form-sub').on('submit', function(e){
        let city = $('#city').val();
        getCity(city);
    })
});

function getCity(city){
    var request;
    city.preventDefault();

    request = $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        type: "GET",
        data: {
            q: $("#city").val(),
            appid: '128b2a70fd3d8d83854ae6d95ec1a1eb',
            units: 'metric'
        }
    });

    request.done(function(response){
        formatSearch(response);
    });
}

function formatSearch(JsonObject){
    var city_name = JsonObject.name;
    var city_weather = JsonObject.weather[0].main;
    var city_temp = JsonObject.main.temp;

    $('#city-name').text(city_name);
    $('#city-weather').text(city_weather);
    $('#city-temp').text(city_temp+ "Celsius");
}