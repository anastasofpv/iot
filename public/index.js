
import { io } from "socket.io-client"
const socket = io("http://localhost:3000")
console.log(socket)



mapboxgl.accessToken = 'pk.eyJ1IjoiYW5hc3Rhc29mcHYiLCJhIjoiY2t3MnE5bmhsMDN2czJvcGFqazZ1N3d2cyJ9.mrt6W2pYpUIww2BEi93awA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [21.745491695194154,38.24949792021122],
  zoom: 16
});

// code from the next step will go here!

