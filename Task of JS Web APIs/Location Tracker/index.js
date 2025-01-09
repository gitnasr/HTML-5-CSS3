var StatusLabel = document.getElementById("status");
var map = document.getElementById("map");

var LocationID = null;
function showError(error) {
	switch (error.code) {
		case error.PERMISSION_DENIED:
			StatusLabel.innerHTML = "User denied the request for Geolocation.";
			break;
		case error.POSITION_UNAVAILABLE:
			StatusLabel.innerHTML = "Location information is unavailable.";
			break;
		case error.TIMEOUT:
			StatusLabel.innerHTML = "The request to get user location timed out.";
			break;
		case error.UNKNOWN_ERROR:
			StatusLabel.innerHTML = "An unknown error occurred.";
			break;
	}
}

function updateLocation(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var accuracy = position.coords.accuracy;

	map.innerHTML = `<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                src="https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=14&amp;output=embed">
            </iframe>`;

	StatusLabel.innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude} <br> Accuracy: ${accuracy} <br> Last Refresh: ${new Date(
		position.timestamp
	).toLocaleString()}`;
}

function startLocation() {
	if (LocationID) {
		return;
	}
	LocationID = navigator.geolocation.watchPosition(updateLocation, showError, {
		enableHighAccuracy: true,
	});
}

function stopLocation() {
	if (LocationID) {
		navigator.geolocation.clearWatch(LocationID);
		LocationID = null;
		map.innerHTML = "";
		StatusLabel.innerHTML = "Location tracking stopped";
	} else {
		StatusLabel.innerHTML = "No location tracking started";
	}
}

document.getElementById("stop").addEventListener("click", stopLocation);

document.getElementById("start").addEventListener("click", startLocation);
