const express = require('express');
const multer = require('multer');
var path = require('path');
var fs = require('fs');

const functionalitiesRoutes = express.Router();
const Functionalities = require('../models/functionalities');
const verifyModules = require("../middleware/verify.js");
var dir = path.join('../', 'images');

// const fileFilter = (req, file, cb) => {
//   var status = verifyClothes(req);

//   if(status != true) {
//     req.fileValidationError = status;
//     return cb(null, false, new Error(status));
//   } else 
//     cb(null, true);
// };

// const upload = multer({
//   dest: path.join('../', 'images'),
//   fileFilter: fileFilter
// });

functionalitiesRoutes.route('/googleImg')
.get(async function(req, res) {
	try{
        let results = await Functionalities.googleImgRetrieve(req.query.search, req.query.limit);
        
        res.status(200);
        res.json({message: results});
		
	}catch(error){
		console.log(error);
		res.status(500);
		res.json({message: 'ERROR 500: Local server error!'});
	}
});

// clothesRoutes.route('/image')
// .get(verify, verifyImage, async function(req, res) {
//   var image = req.query.image;
  
//   var file = path.join(dir, image.replace(/\/$/, '/index.html'));
//   if (file.indexOf(dir + path.sep) !== 0) {
//       return res.status(700).end('Forbidden');
//   }
//   var s = fs.createReadStream(file);

//   s.on('open', function () {
//       res.set('Content-Type', 'image/jpeg');
//       s.pipe(res);
//   });
//   s.on('error', function () {
//       res.set('Content-Type', 'text/plain');
//       res.status(404).end('Image not found');
//   });
// });



module.exports = functionalitiesRoutes;