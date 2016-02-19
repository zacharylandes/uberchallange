var request = require ('net/https')
var uri = URI('https://data.sfgov.org/resource/rqzj-sfat?$select=longitude,latitude,applicant')

var http = HTTP.new(uri.host, uri.port)

var request = HTTP.Get.new(uri.request_uri)
request.add_field('X-App-Token', ARGV[0])

var response = http.request(request)
console.log(response.code)
console.log(response.body)