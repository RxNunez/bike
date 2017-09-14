var ApplicationModule = require('./../js/bike.js').applicationModule;

var displayData = function(response) {
  // results.forEach(function(result) {
let index = 0;
console.log(Array.isArray(response.bikes));
let bikesData = response.bikes;
for(let index in bikesData){
  console.log(response.bikes[index].title)
  $('ul#solutions').append(`<li>Title: ${response.bikes[index].title} <br> Manufacturer: ${response.bikes[index].manufacturer_name}</li>`);
  index++
   }
}



$(document).ready(function(){
  var applicationModule = new ApplicationModule();
  $("#bike").click(function(evt){
    evt.preventDefault();
    evt.stopImmediatePropagation();
    evt.stopPropagation();

    let inputZip = $("#zip").val();
    // console.log(inputZip);
    // $.ajax({
    //   url: `https://bikeindex.org:443/api/v3/search?page=1&per_page=10&location=${inputZip}&distance=10&stolenness=proximity`,
    //   type: 'GET',
    //   data: {
    //     format: 'json'
    //   },
    //   success: function(response) {
    //     let index = 0;
    //     console.log(Array.isArray(response.bikes));
    //     let bikesData = response.bikes;
    //     for(let index in bikesData){
    //       console.log(response.bikes[index].title)
    //       $('ul#solutions').append(`<li>Title: ${response.bikes[index].title} <br> Manufacturer: ${response.bikes[index].manufacturer_name}</li>`);
    //       index++
    //     }
    //   },
    //   error: function() {
    //     console.log("failure");
    //     $('.errors').text("There was an error processing your request. Please try again.");
    //   }
    // });
    applicationModule.getData(inputZip, displayData);
  });
});
