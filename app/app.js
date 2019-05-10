const express = require('express');
var rp = require('request-promise');
const app = express()
.set('views', 'view')
  .use(express.static('app/src'))

const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3800;
const fs = require('fs');
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


io.on('connection', function(socket){

socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  })

});



// const currentWeather = {}
// let feelTemp = 15.9999
// let weatherstat = "sunny"
// let windspeed = 4
// let pickedVids = [];
// let listVids = [];
// const api = {
//   mainUrl: 'https://data.buienradar.nl/2.0/feed/json',
//   request: function(url) {
//     rp(url)
//       .then(function(dada) {
//         const data = JSON.parse(dada);
//         console.log("Timestamp " + data.actual.stationmeasurements[35].timestamp);
//         // console.log("Sunpower " + data.actual.stationmeasurements[35].sunpower);
//         console.log("Windspeed " + data.actual.stationmeasurements[35].windspeed);
//         console.log("Temperature " + data.actual.stationmeasurements[35].temperature);
//         if (feelTemp === data.actual.stationmeasurements[35].feeltemperature) {
//           console.log("Everything's the same so I'm not going to do anything")
//         } else {
//           console.log("There are some changes so I'm going to update stuff")
//           feelTemp = data.actual.stationmeasurements[35].feeltemperature;
//           windspeed = data.actual.stationmeasurements[35].windspeed;
//           checking();
//         }
//
//       })
//       .catch(function(err) {
//         console.log(err);
//       });
//   }
// }
//
// async function doThat(typo) {
//   let value = await getVids(typo);
//
// value.val.forEach(snap=>{
//     pickedVids.forEach(item=>{
//       if (item === snap.id){
//         console.log("This item is already in the thing!!! ", snap.name)
//         listVids.forEach(bop=>{
//           if( bop.id !== snap.id){
//             listVids.push(snap)
//           }else{
// console.log("liked vid double render prevention")
// }
//       })
// value.val.splice(value.val.indexOf(snap), 1);
//         }else{
// console.log("nothing")
// }
//     })
// })
//   io.emit('temp vid', value);
//   io.emit('liked vid', listVids);
// }
//
// setInterval(function() {
//   api.request(api.mainUrl);
//   // console.log('testing')
// }, 1000 * 6)
//
// function checking() {
//   // let typo = ''
//
//   if (windspeed >= 10) {
//     weatherstat = "stormy"
//     doThat(weatherstat);
//   } else if (feelTemp <= 16) {
//     weatherstat = "cloudy";
//     doThat(weatherstat);
//   } else {
//     weatherstat = "sunny"
//     doThat(weatherstat);
//   }
// }
//
//
// io.on('connection', function(socket) {
//   console.log('a user connected');
//   api.request(api.mainUrl);
//   checking();
//   io.emit('temp vid', weatherstat);
//   io.emit('temp change', {
//     temp: feelTemp,
//     wind: windspeed
//   });
//
//
//   socket.on('disconnect', function() {
//     console.log('user disconnected');
//     io.emit('chat message', 'user has disconnected');
//   });
// });
//
//
// io.on('connection', function(socket) {
//
//   socket.on('del vid', function(item) {
//     console.log("testing delete from list " + item)
//     const found = pickedVids.includes(item);
//     if (found) {
//       io.emit('del vids', item)
//       pickedVids.splice(pickedVids.indexOf(item), 1);
// console.log(pickedVids);
//     } else {
//       console.log("This item is NOT in the list")
//       console.log(pickedVids);
//       io.emit('delly vids', item)
//     }
//   })
//
//   socket.on('set vid', function(item) {
//     console.log("Testing add to list " + item)
//     const found = pickedVids.includes(item);
//     if (!found) {
//       pickedVids.push(item);
//       io.emit('set vids', item)
//       console.log(pickedVids);
//     } else {
//       console.log("This item is already in the list!")
//       console.log(pickedVids);
//     }
//   });
//
//
// });
//
// io.on('disconnect', function(socket) {
//   socket.on('chat message', function(msg) {
//     io.emit('chat message', msg);
//   });
// });
//


http.listen(3800, () => console.log(`Example app listening on port ${port}!`))
