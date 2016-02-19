
var require 'net/https'
uri = URI('https://data.sfgov.org/resource/rqzj-sfat?$select=longitude,latitude,applicant')

http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_PEER

request = Net::HTTP::Get.new(uri.request_uri)
request.add_field('X-App-Token', ARGV[0])

response = http.request(request)
puts response.code
puts response.body