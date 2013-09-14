// David Jones
// AVF 1309
// Demo App

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
		$("#insta").on("pageinit", displayInstaPics);
		$("#weather").on("pageinit", displayWeather);
}; // phonegap deviceready

// Function to get pictures from Instagram API
var displayInstaPics = function(){
	var instaUrl = "https://api.instagram.com/v1/tags/landscapes/media/recent?callback=?&amp;client_id=5972228563da4106aa1323119426f70a";
	
	$.getJSON(instaUrl, function(instagramData){
		console.log(instagramData);
		
		$.each(instagramData.data, function(index, picture){	
			var pics = "<li class='imgLi'><img src='" + picture.images.thumbnail.url + "' alt='" +
				picture.user.id + "' />";
			$("#dataOut").append(pics);		
		});
	});
};

// Function to get weather data from API
var displayWeather = function(){	
	$.ajax({
		url : "http://api.wunderground.com/api/ffab5ab328f6d817/geolookup/conditions/q/AR/Beebe.json",
		dataType : "jsonp",
		success : function(parsed_json) {
			var location = parsed_json['location']['city'];
			var temp_f = parsed_json['current_observation']['temp_f'];
			
			$("#currentWeather").empty();
			var currentWeather = $(
			 "<li>Location: " + location + "</li>" +
			 "<li>Temperature: " + temp_f + "</li>"
			)
			
			$("#currentWeather").append(currentWeather);
			
			//alert("Current temperature in " + location + " is: " + temp_f);
		}
	});	
};