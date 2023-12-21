const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=c652a109bfce45869f2160102232112&q=${latitude},${longitude}&aqi=yes&days=7&alerts=no`
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, body)
    }
  })
}

module.exports = forecast
