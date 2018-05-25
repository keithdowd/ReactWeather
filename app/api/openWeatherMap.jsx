var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?appid=ca7bba137aee214dde7d3062ae615210&units=imperial';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            // if (res.data.cod && res.data.message) {
            //     throw new Error(res.data.message);
            // } else {
            //     return res.data.main.temp;
            // }
            if (res.data.cod === '200') {
                return res.data.list[0].main.temp;
            } else {
                throw new Error (res.data.message);
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}