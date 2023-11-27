var map;

function createCenterControl(map) {
  const controlButton = document.createElement("button");

  // Set CSS for the control.
  controlButton.style.backgroundColor = "#fff";
  controlButton.style.border = "2px solid #fff";
  controlButton.style.borderRadius = "3px";
  controlButton.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlButton.style.color = "rgb(25,25,25)";
  controlButton.style.cursor = "pointer";
  controlButton.style.fontFamily = "Roboto,Arial,sans-serif";
  controlButton.style.fontSize = "16px";
  controlButton.style.lineHeight = "38px";
  controlButton.style.margin = "8px 0 22px";
  controlButton.style.padding = "0 5px";
  controlButton.style.textAlign = "center";
  controlButton.textContent = "View IIT tower";
  controlButton.title = "Click to center the map to IIT tower";
  controlButton.type = "button";
  // Setup the click event listeners: simply set the map to IIT Tower.
  controlButton.addEventListener("click", () => {
    map.setCenter( { lat: 41.83146616124022, lng: -87.62672571218678 });
    map.setZoom(19);
    map.setMapTypeId("satellite")
  });
  return controlButton;
}
function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 41.85, lng: -87.65 },
      zoom: 8,
      mapTypeId:"terrain",
      styles:[
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "saturation": 30
            },
            {
              "lightness": -5
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "stylers": [
            {
              "saturation": 25
            },
            {
              "lightness": -15
            }
          ]
        },
        {
          "featureType": "road.highway",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "stylers": [
            {
              "color": "#4a54d9"
            }
          ]
        }
      ]
    });
  // Create the DIV to hold the control.
  const centerControlDiv = document.createElement("div");
  // Create the control.
  const centerControl = createCenterControl(map);

  // Append the control to the DIV.
  centerControlDiv.appendChild(centerControl);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

	var marker =  new google.maps.Marker({
    position: {lat: 41.79500800987636, lng: -87.58632747826601},
    map,
	});

	var contentString = '<h1>Museum of Science and Industry</h1><p>One of the first museums I ever went to.</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'click', function() {
    map.setZoom(19);
    infowindow.open(map, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initMap);