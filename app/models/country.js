// 1.
	// make our country classt
// 2. store
	// Each instance created, it should populate the store.
//  3. Use the adapter pattern
	// to take data from our .json file, and instead populate my store with the instances of a country.


let store = [];
const countryFactory = (function() {
  let id = 0
  return class Country {
    constructor(name, latlng) {
      this.id = ++id;
      this.name = name;
      this.latlng = latlng;
      store = [...store, this]
    }
  }
})()

countries.map(function(country) {
  return new countryFactory(country.name.common, country.latlng)
})


// select store.latlng where store.name == "" value or title
