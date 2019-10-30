'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _hotels = require('./hotels');

var _hotels2 = _interopRequireDefault(_hotels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index.html');
  // res.send('respond with a resource');
});

router.use('/hotels', _hotels2.default);

exports.default = router;