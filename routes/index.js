var express = require('express');
var router = express.Router();
var SseChannel = require('sse-channel');
var os = require('os');

var sysInfoChannel = new SseChannel({
  retryTimeout: 250,
  historySize: 300,
  pingInterval: 15000,
  jsonEncode: true,
  cors: {
    origins: ['*'] // Defaults to []
  }
});

/* GET home page. */
router.get('*', function(req, res, next) {
  console.log(req, 'req')
  // console.log(res, 'res')
  // console.log(next, 'next')

  // sysInfoChannel.addClient(req, res);
});

// var sysInfoCounter = 0;
// setInterval(function broadcastSysInfo() {
//   sysInfoChannel.send({
//     event: sysInfoCounter++,
//     data: {
//       freemem: os.freemem(),
//       loadavg: os.loadavg()
//     },
//     retry: 2000
//   });
// }, 250);

module.exports = router;
