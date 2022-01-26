# My-Fav-five-places-to-eat-in-STL

require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
        const map = new Map({
          basemap: "topo-vector"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 10, 
          center: [38.640291685531224, -89.87012238264651] // longitude, latitude
        });
      });
