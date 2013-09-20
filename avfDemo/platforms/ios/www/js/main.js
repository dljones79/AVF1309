// David Jones
// AVF 1309
// Demo App

var pictureSource;   // picture source
var destinationType; // sets the format of returned value

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
		$("#insta").on("pageinit", displayInstaPics);
		$("#weather").on("pageinit", displayWeather);
		pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
        $("#geolocate").on("pageinit", displayLocation);
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
			);
			
			$("#currentWeather").append(currentWeather);
			
			//alert("Current temperature in " + location + " is: " + temp_f);
		}
	});	
};

/////////////////////////////////Camera Test

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64-encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI
      // console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    //
    function onFail(message) {
      alert('Failed because: ' + message);
    }
//////////////////////////////////////////////////////////////////////////////////////////////Geolocate Test
var displayLocation = function(){

navigator.geolocation.getCurrentPosition(onSuccess, onError);
};
function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + position.timestamp                    + '<br />';
    }

alert('Latitude: ' + position.coords.latitude + '\n');

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

///////////////////////////Notifications

function showAlert() {
        navigator.notification.alert(
            "You are the winner!",  // message
            gameOver,            // title
            "David Jones",                  // buttonName
            "Dismiss"
        );
    };
    
    var gameOver = function(){
	    alert("I am the winner!");
    };

    // Beep three times
    //
    function playBeep() {
        navigator.notification.beep(3);
    };

    // Vibrate for 2 seconds
    //
    function vibrate() {
        navigator.notification.vibrate(2000);
    };

