// var request = require('request');
// var OAuth   = require('oauth-1.0a');
// var crypto  = require('crypto');

  //&ll=40.7,-74 ---Lat and Longitude
const authorize={
  client_id:'2VDO3R100FWTZUV24MTZEXD5VZMYRMCRMERUNUYCOG0STC4Z',
  client_secret:'3N3Z0AM0COVEAOLZHDPSZBUE30V2AH0TRKZBND21SGREVFE',
  v:'20180101',
  m:'foursquare'
}
https://api.flickr.com/services/rest/?&method=flickr.photos.geo.getLocation&api_key=c9a915838f46c00d25dbdbf28614f240&photo_id=
rootURL = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&tag=nyc&format=json&has_geo=1&accuracy=14&api_key=c9a915838f46c00d25dbdbf28614f240"


function queryTwitterAPI(){
  let response = ""
  let term = $("#userInput").val()
  $.ajax({
    url: rootURL,
    method: "GET",
    success: function(data){
      let parser = JSON.parse(data.slice(14,-1)).photos.photo
      parser.forEach(function(element){
        new createPhoto(element.id, element.owner, element.secret, element.server, element.farm)
      })
      return parser
      console.log("SUCCESS")
    },
    error: function(data){
      console.log(data, "ERROR")
    }
  })
}
// .done(function(data){
//   debugger
//   let parser = JSON.parse(data.slice(14,-1)).photos.photo
//   console.log(parser)
//   parser.forEach(function(element){
//     new createPhoto(element.id, element.owner, element.secret, element.server, element.farm)
//   })
//   return parser
// })
// var oauth = OAuth({
//     consumer: {
//         key: "2Q858yg1xnvUIWjPPTqDB3Ldc",
//         secret: 'AW51lNLM62xR7Gotl8UwDpApqCkR3D5lxyqROGGyK9RiWyM2Oi'
//     },
//     signature_method: 'HMAC-SHA1',
//     hash_function: function(base_string, key) {
//         return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
//     }
// });
// var token = {
//     key: '797438164193472516-aQ5yiVeki8LJBbxXEwiZAcz3gICEsWO',
//     secret: 'abkosoNRF2UaOFQHtpUSGnW91c2w51yhvSCIX64tNc0vH'
// };
// var request_data = {
//     url: "https://api.twitter.com/1.1/search/tweets.json?q=",
//     method: "GET"
// };
// function callBack(json){
//   console.log(json)
// }
// $.ajax({
//     url: request_data.url,
//     type: request_data.method,
//     data: oauth.authorize(request_data, token),
//     headers: oauth.toHeader(oauth.authorize(request_data, token))
// }).done(function(data) {
//     console.log(data)
// });


// THIS IS THE ONE FOR NODE REQUESTS, ABOVE IS FOR BROWSER
// var oauth = OAuth({
//     consumer: {
//         key: "2Q858yg1xnvUIWjPPTqDB3Ldc",
//         secret: 'AW51lNLM62xR7Gotl8UwDpApqCkR3D5lxyqROGGyK9RiWyM2Oi'
//     },
//     signature_method: 'HMAC-SHA1',
//     hash_function: function(base_string, key) {
//        return crypto.createHmac('sha1', key).update(base_string).digest('base64');
//     }
// });
// request({
//     url: request_data.url,
//     method: request_data.method,
//     form: request_data.data,
//     oauth.toHeader(oauth.authorize(request_data, token)),
//     headers: oauth.toHeader(oauth.authorize(request_data, token))
// }, function(error, response, body) {
//     console.log(response)
// });
//        ,
// xhrFields: {
//   withCredentials: true
// }
// error: function(xhr, status, error){
//   console.log(xhr),
//   console.log(status),
//   console.log(error)
// }
// function fourSquareAdapter(searchTerm, stopLat, stopLong, stopId){
//   var searchUrl = `https://api.foursquare.com/v2/venues/search?query=${searchTerm}&radius=400&ll=${stopLat},${stopLong}`
//   return $.ajax({
//     url: searchUrl,
//     method: "GET",
//     data: authParams,
//     dataType: 'JSON',
//     crossDomain: true,
//   }).done(function(returnObject) {
//     let venues = returnObject.response.venues.slice(0,5)
//     buildRestaurant(venues, stopId)
//   })
// }
