import { Router } from 'express';
import mongojs from 'mongojs';
import { INSPECT_MAX_BYTES } from 'buffer';
const router = Router();

const db = mongojs('almundo', ['hotels']);

/* GET hotels listing. */
router.get('/', (req, res) => {
    db.hotels.find((err, hotels) =>{
       if (err)return err;
       res.json(hotels);
     });
});

/* GET filter hotels. */
router.get('/search', (req, res) => { 
   
  db.hotels.find((err, hotels) =>{
       if (err)return err;
       var hotelsFinds = hotels
       if( typeof req.query.name != 'undefined' ){
        hotelsFinds = hotels.filter(function(hotel){
          if(hotel.name.toLowerCase().includes(req.query.name.toLowerCase())) {
            return hotel;
          }
        });
      }
    
      if(req.query.star1 || req.query.star2 || req.query.star3 || req.query.star4 || req.query.star5){
    
        hotelsFinds = hotelsFinds.filter(function(hotel){
          if(req.query.star1 && hotel.stars == 1) {
            return hotel;
          }
          if(req.query.star2 && hotel.stars == 2) {
            return hotel;
          }
          if(req.query.star3 && hotel.stars == 3) {
            return hotel;
          }
          if(req.query.star4 && hotel.stars == 4) {
            return hotel;
          }
          if(req.query.star5 && hotel.stars == 5) {
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
  console.log(newHotel);
  if(!newHotel.name || !newHotel.stars || !newHotel.price){
    res.status(400).json({
      error: 'Bad data'
    });
  }else{
    db.hotels.save(newHotel, (err, hotel) => {
      if (err) return err;
      res.json(hotel);
    });
  }
});

/* DELETE a hotel. */
router.delete('/hotels/:id', (req, res, next) => {
    db.hotels.remove({_id: mongojs.ObjectId(req.params.id)}, (err, result) => {
      if (err) return err;
      res.json(result);
    });
});

/* PUT a hotel. */
router.put('/hotels/:id', (req, res, next) => {
  const hotel = req.body;
  console.log(req);
  const updateHotel = {};
  if(!updateHotel.name || !updateHotel.stars || !updateHotel.price){
      res.status(400).json({
      error: 'Bad data'
    });
  }else{

    db.hotels.update({_id: mongojs.ObjectId(req.params.id)}, (err, result) => {
      if (err) return err;
      res.json(result);
    });
  }
});

export default router;