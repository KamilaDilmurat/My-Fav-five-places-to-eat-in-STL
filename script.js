


require(["esri/Map", "esri/views/MapView"], (Map, STLfood) => {
        const map = new Map({
          basemap: "topo-vector"
        });

        const view = new MapView({
          container: "STLfood",
          map: map,
          zoom: 6, 
          center: [38.640, -89.870] // longitude, latitude
        });
      });



var marker1 = L.marker([38.649, -90.261]).addTo(STLfood);
var marker2 = L.marker([38.640, -90.260]).addTo(STLfood);
var marker3 = L.marker([38.599, -90.237]).addTo(STLfood);
var marker4 = L.marker([38.646, -90.262]).addTo(STLfood);
var marker5 = L.marker([38.560, -90.252]).addTo(STLfood);

marker1.bindPopup("<b>Resturant 1</b><br>Jeni's Splendid Ice Creams").openPopup();
marker2.bindPopup("<b>Resturant 2</b><br>PokeDoke").openPopup();
marker3.bindPopup("<b>Resturant 1</b><br>Sheesh").openPopup();
marker4.bindPopup("<b>Resturant 2</b><br>Taste Of Lebanon").openPopup();
marker5.bindPopup("<b>Resturant 1</b><br>Pho Grand").openPopup();
