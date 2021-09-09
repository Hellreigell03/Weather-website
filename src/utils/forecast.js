const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=74c630cbdd6195139f02787e257418fb&query=' + latitude + ',' + longitude + '&units=m'
    request({ url, json:true }, (error, {body}) => {
        if (error) {
            callback('Unable to fetch weather services!', undefined)
        } else if (body.error){
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] +('. It is currently ') + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast