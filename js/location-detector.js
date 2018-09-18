window.addEventListener("load", function () {

    console.log("In Detect Location JS");

    document.getElementById('detectLocation-button').addEventListener("click", getLocation);

    function getLocation() {
        console.log("Location Search################");
        if (!navigator.geolocation) {
            console.log("Geolocation is not supported by your browser");
            return;
        }

        var geo_options = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000
        };

        function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log("Latitude is ", latitude);
            console.log("Longitude is ", longitude);
            getCurrentAddress(latitude, longitude);
        }

        function error(err) {
            console.log("Unable to retrieve your location");
            console.log("Error Code ", err.code);
            console.log("Error Message", err.message);
        }

        navigator.geolocation.getCurrentPosition(success, error, geo_options);
    }

    function getCurrentAddress(lat, lng) {
        var url = 'https://neta-dev.herokuapp.com/api/v1/constituencies/latlng?lat=' + lat + '&lng=' + lng;
        console.log('Inside Address Function');
        fetch(url).then(function (response) {
            return response.json();
        }).then(function (response) {
            console.log(response);
        });
    }

    document.getElementById('select-location-menu').addEventListener("click", getLocationSelectize);

    function getLocationSelectize(){
        console.log("In get location selectize");
    }


});
