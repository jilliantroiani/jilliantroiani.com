// Polymaps
var po = org.polymaps;

var map = po.map();
var container = document.getElementById("map").appendChild(po.svg("svg"));

map.container(container);
map.add(po.interact());
map.center({ lat: 41.9229, lon: -87.7072 });
map.zoom(15);

// Add the custom tiles as a map layer
var tilesURL = po.url("/maps/{Z}/{X}/{Y}.png");
var tiles = po.image().url(tilesURL);
map.add(tiles);
