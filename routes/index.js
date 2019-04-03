var express = require('express');
var router = express.Router();
var SseChannel = require('sse-channel');
var os = require('os');
var getMethod = require('../src/getMethod.ts')

var sysInfoChannel = new SseChannel({
  retryTimeout: 250,
  historySize: 300,
  pingInterval: 15000,
  jsonEncode: true,
  cors: {
    origins: ['*'] // Defaults to []
  }
});

/* GET method */
router.get('*', function (req, resp, next) {
  getMethod(req, resp, next)
});

/* POST method */
router.post('*', function(req, resp, next) {
  console.log('post method executed')
});

/* POST method */
router.put('*', function(req, resp, next) {
  console.log('post method executed')
});

/* DELETE method */
router.put('*', function(req, resp, next) {
  console.log('post method executed')
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
