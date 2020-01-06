var express = require('express');
var router = express.Router();

const os = require('os');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const address = await os.networkInterfaces();
	const mac = address['Wi-Fi'][0].mac;
  // res.render('index', { title: 'Express' });
  res.json({
    mac: mac
  });
});

module.exports = router;
