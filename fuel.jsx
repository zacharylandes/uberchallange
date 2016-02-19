 request = require 'request'
 options = uri: 'https://data.cityofchicago.org/resource/alternative-fuel-locations.json?'
request options, (err, response, body) ->  console.log body


