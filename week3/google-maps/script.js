var location = "NewYork";

document.getElementById("map").src="https://maps.googleapis.com/maps/api/staticmap?center="+location"&size=640x400&style=element:labels|visibility:off&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyAzBIkfvL0fiblOsQ2z6gKrSXS5GeuSiy4"

function changeArea(){
    area = document.getElementById("newArea").value;
}