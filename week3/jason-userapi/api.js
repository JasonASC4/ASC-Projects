var personName = "https://randomuser.me/api/?results=5000";

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    var first = data.results[0].name.first
    var last = data.results[0].name.last
    var phone = data.results[0].cell
    var email = data.results[0].email
    var street = data.results[0].location.street
    var city = data.results[0].location.city
    var state = data.results[0].location.state
    var full = first + " " + last
    var adressPhone = street + ", "+ city + ", "+ state + "<li></li>" + phone

    $("#name").append("<p>"+ full + "</p>"),
    $("#email").append("<p>"+ email + "</p>"),
    $("#adressPhone").append("<p>"+ adressPhone+"</p>"),
    
    console.log(full);
    console.log(adressPhone);
    console.log(email);
  }
});

