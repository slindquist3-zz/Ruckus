let store = []
var holder = ""
const createPhoto = (function(){
  locationURL = `https://api.flickr.com/services/rest/?&method=flickr.photos.geo.getLocation&format=json&api_key=c9a915838f46c00d25dbdbf28614f240&photo_id=`
  store_id = 0
  return class Photo{
    constructor(photo_id, owner, secret, server, farm){
      this.id = ++store_id
      this.photo_id = photo_id
      this.owner = owner
      this.secret = secret
      this.farm = farm
      $.when(this.getLocations()).done(() => {
        store = [...store, this]
      })
    }
    getLocations(){
      var that = this
      return $.ajax({
        url: locationURL + `${this.photo_id}`,
        method: "GET"
      }).done(function(data){
        data = JSON.parse(data.slice(14,-1)).photo.location
        that.locations = [data.latitude, data.longitude]
      })

    }


  }
})()
// success: function(data){
//   data = JSON.parse(data.slice(14,-1))
//   debugger
//   return [data.location.latitude, data.location.longitude]
// },
// error: function(data){
//   console.log(data)
//   console.log("ERROR")
// }
// .done(function(data){
//   debugger
//   console.log(data)
// }).fail(function(data){
//   console.log(data)
//   console.log("FAIL")
// })
