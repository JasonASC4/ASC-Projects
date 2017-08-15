//Set database object
var database = firebase.database().ref();
//button executes this function
function updateDB() {
    var name = $("#name").text();
    var PokemonName = $("#pokename").text();
    var message = $("#message").val();
    var image = $("#YourPokemon").attr("src");
    $("#pokeAppend").append("<p>" + PokemonName + "<p>")
    console.log(name + " : " + message);
    //Update database here
    // var value = {
    //     NAME: this.text,
    //     MESSAGE: this.message,
    //     IMAGE: this.image,
    //     POKENAME: this.PokemonName
    // }

    var value = {
        NAME: name,
        MESSAGE: message,
        IMAGE: image,
        POKENAME: PokemonName
    }

    console.log(value);
    //database.push(value);
}

database.on("child_added", function (rowData) {
    var row = rowData.val();
    var name = row.NAME;
    var image = row.IMAGE;
    var message = row.MESSAGE;
    var PokemonName = row.POKENAME;
    var fullText = " <p>" + name + ": " + message + ":" + image + ":" + PokemonName + "</p>";
    $(".allMessages").append(fullText);
})
var mainURL = "http://pokeapi.co/api/v2/type/";
var giphyKey = "d052bee2015b488cbdaae34f0c2b0dbd";
var giphyAPI = "https://api.giphy.com/v1/" + giphyKey;
function searchPokemon(userChoice) {
    $.get(mainURL, function (data) {
        for (var i = 0; i < data.results.length; i++) {
            if (userChoice == data.results[i].name) {
                var dataURL = data.results[i].url;
                $.get(dataURL, function (data2) {
                    var rand = Math.floor(Math.random() * data2.pokemon.length);
                    var pokeName = data2.pokemon[rand].pokemon.name;
                    var pokeURL = data2.pokemon[rand].pokemon.url;
                    var pokeGif = $.get("http://api.giphy.com/v1/gifs/search?q=" + pokeName + "&api_key=" + giphyKey + "&limit=5");
                    pokeGif.done(function (data4) {
                        console.log("success got data", data4);
                        $("#giphy").attr("src", data4.data[0].images.fixed_width_still.url)
                    });
                    $.get(pokeURL, function (data3) {
                        var pokeSprite = data3.sprites.front_default;
                        $("#pokename").text(pokeName);
                        $("#YourPokemon").attr("src", pokeSprite);
                    })
                });
            }
        }
    });
}
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
