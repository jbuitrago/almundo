'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _mongojs = require('mongojs');

var _mongojs2 = _interopRequireDefault(_mongojs);

var _buffer = require('buffer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();

const db = (0, _mongojs2.default)('almundo', ['hotels']);

var hotels = require('../database-mock/data.json');

/* GET hotels listing. */
router.get('/', (req, res) => {
  db.hotels.find((err, hotels) => {
    if (err) return err;
    res.json(hotels);
  });

  /* Disable this line if use Mongo*/
  //res.send(JSON.stringify(hotels, null, 2));
});

/* GET filter hotels. */
router.get('/search', (req, res) => {

  db.hotels.find((err, hotels) => {
    if (err) return err;
    var hotelsFinds = hotels;
    console.log("ENTRO");
    if (typeof req.query.name != 'undefined') {
      hotelsFinds = hotels.filter(function (hotel) {
        if (hotel.name.toLowerCase().includes(req.query.name.toLowerCase())) {
          return hotel;
        }
      });
    }

    if (req.query.star1 || req.query.star2 || req.query.star3 || req.query.star4 || req.query.star5) {

      hotelsFinds = hotelsFinds.filter(function (hotel) {
        if (req.query.star1 && hotel.stars == 1) {
          return hotel;
        }
        if (req.query.star2 && hotel.stars == 2) {
          return hotel;
        }
        if (req.query.star3 && hotel.stars == 3) {
          return hotel;
        }
        if (req.query.star4 && hotel.stars == 4) {
          return hotel;
        }
        if (req.query.star5 && hotel.stars == 5) {
          return hotel;
        }
      });
    }

    res.send(JSON.stringify(hotelsFinds, null, 2));
  });
});

/* POST new hotel. */
router.post('/hotels', (req, res, next) => {
  const newHotel = req.body;
  if (!newHotel.name || !newHotel.stars || !newHotel.price) {
    res.status(400).json({
      error: 'Bad data'
    });
  } else {
    db.hotels.save(newHotel, (err, hotel) => {
      if (err) return err;
      res.json(hotel);
    });
  }
});

/* DELETE a hotel. */
router.delete('/hotels/:id', (req, res, next) => {
  db.hotels.remove({ _id: _mongojs2.default.ObjectId(req.params.id) }, (err, result) => {
    if (err) return err;
    res.json(result);
  });
});

/* PUT a hotel. */
router.put('/hotels/:id', (req, res, next) => {
  const hotel = req.body;
  const updateHotel = {};
  if (!updateHotel.name || !updateHotel.stars || !updateHotel.price) {
    res.status(400).json({
      error: 'Bad data'
    });
  } else {

    db.hotels.update({ _id: _mongojs2.default.ObjectId(req.params.id) }, (err, result) => {
      if (err) return err;
      res.json(result);
    });
  }
});

exports.default = router;