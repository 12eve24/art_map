// JavaScript
//console.log('Hello world!');

const map = L.map('map').setView([33.57308068476331, 130.39100006883007], 18);

// Open Street Map hot
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);

//アイコン
const Icon = L.icon({
  iconUrl: 'images/pin.png',
  shadowUrl: 'images/ico_shadow.png',

iconSize:     [40, 40], // size of the icon
shadowSize:   [40, 40], // size of the shadow
iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
shadowAnchor: [20, 40],  // the same for the shadow
popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
});

L.marker([33.57308068476331, 130.39100006883007], { icon: Icon }).addTo(map).bindPopup('来なサイ！待ってるゾウ！').openPopup();
