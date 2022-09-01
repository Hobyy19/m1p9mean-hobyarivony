const express = require('express');
const app = express();
const platRoute = express.Router();

let Plat = require('../models/Plat');
let multer = require('multer');

const DIR = './public/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, fileName)
    }
});

var upload = multer({
    storage: storage,
    // limits: {
    //   fileSize: 1024 * 1024 * 5
    // },
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    }
  });

platRoute.route('/create').post((req, res, next) => {
    Plat.create(req.body , (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

platRoute.route('/add', upload.array('img', 6)).post((req, res, next) => {
    const reqFiles = []
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/public/' + req.files[i].filename)
    }
    const plat = new Plat({
        img: reqFiles
    })
    plat.save().then(result => {
        console.log(result);
        res.status(201).json({
          message: "Done upload!",
        })
      }).catch(err => {
        console.log(err),
          res.status(500).json({
            error: err
          });
    })
});

platRoute.route('/').get((req, res) => {
    Plat.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

platRoute.route('/:user').get((req , res, next) => {
    Plat.find({id_user: req.params.user}, function(err, data) 
    {
        if (err)
        {
            res.send(err);
        }
        console.log(data);
        res.json(data);

    });
});

platRoute.route('/read/:id').get((req, res) => {
    Plat.findById(req.params.id ,(error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

platRoute.route('/update/:id').put((req, res, next) => {
    Plat.findByIdAndUpdate(req, params.id , {
        $set: req.body
    } , (error, data) => {
        if (error) {
            return next(error)
            console.log(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
});

platRoute.route('/delete/:id').delete((req, res, next) => {
    Plat.findByIdAndRemove(req.params.id , (error , data)=> {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});

platRoute.route('/top/10').get((req , res, next) => {
    console.log("data");
    Plat.find({limit:8}, function(err, data) 
    {
        if (err)
        {
            res.send(err);
        }
        console.log(data);
        res.json(data);

    });
});

module.exports = platRoute