// David Jones
// AVF 1309
// Demo App

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
		$("#insta").on("pageinit", displayInstaPics);
}; // phonegap deviceready

var displayInstaPics = function(){
	var instaUrl = "https://api.instagram.com/v1/tags/scenery/media/recent?callback=?&amp;client_id=
		5972228563da4106aa1323119426f70a";
	
	$.getJSON(instaUrl, function(instagramData){
		console.log(instagramData);
		
		$.each(instagramData.data, function(index, picture){
			var pics = "<li><img src='" + picture.images.standard_resolution.url + "' alt='" +
				picture.user.id + "' /><h4>" + picture.user.ful_name + ", <em>(" + picture.user.username +
				")</em></h4></li>";
			$("#dataOut").append(pics);
		});
	});
};