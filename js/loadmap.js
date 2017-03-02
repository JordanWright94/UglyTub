/*This functions loads a google map image into the webpage on page load.
A tutorial on how to do this was sourced from: https://developers.google.com/maps/tutorials/fundamentals/adding-a-google-map */
function initialize() {
	//specify where the map is drawn on page
	var mapCanvas = document.getElementById('map-canvas');
	//define map parameters. Eg where is is pointing at or what type of map it is
    var mapOptions = {
		center: new google.maps.LatLng(40.6575374,-86.2042234),
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
	//draw map in the the element with the ID "map-canvas"
	var map = new google.maps.Map(mapCanvas, mapOptions)
	
	//draw marker at Detroit
	var detroit = new google.maps.Marker({
	  position: new google.maps.LatLng(42.3314,-83.0458),
	  map: map,
	  title:"Detroit"
	});
	
	//draw marker at Cincinnati
	var cincinnati = new google.maps.Marker({
	  position: new google.maps.LatLng(39.1000,-84.5167),
	  map: map,
	  title:"Cincinnati"
	});	
	
	//draw marker at Madison
	var madison = new google.maps.Marker({
	  position: new google.maps.LatLng(43.0667,-89.4000),
	  map: map,
	  title:"Madison"
	});
	
	//draw marker at Indianapolis 
	var indianapolis = new google.maps.Marker({
	  position: new google.maps.LatLng(39.7910,-86.1480),
	  map: map,
	  title:"Indianapolis"
	});
	
	//draw marker at Rockford
	var rockford = new google.maps.Marker({
	  position: new google.maps.LatLng(42.2594,-89.0644),
	  map: map,
	  title:"Rockford"
	});
	
	//draw marker at Dayton
	var dayton = new google.maps.Marker({
	  position: new google.maps.LatLng(39.7594,-84.1917),
	  map: map,
	  title:"Dayton"
	});
	
	//draw marker at Columbus
	var columbus = new google.maps.Marker({
	  position: new google.maps.LatLng(39.9833,-82.9833),
	  map: map,
	  title:"Columbus"
	});
	
	//draw marker at Toledo
	var toledo = new google.maps.Marker({
	  position: new google.maps.LatLng(41.6656,-83.5753),
	  map: map,
	  title:"Toledo"
	});
	
	//draw marker at Louisville
	var louisville = new google.maps.Marker({
	  position: new google.maps.LatLng(38.2500,-85.7667),
	  map: map,
	  title:"Louisville"
	});
	
}
//display Google map on page on page load
google.maps.event.addDomListener(window, 'load', initialize);