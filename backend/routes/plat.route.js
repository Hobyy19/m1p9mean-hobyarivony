const express = require('express');
const app = express();
const platRoute = express.Router();

let Plat = require('../models/Plat');

platRoute.route('/create').post((req, res, next) => {
    Plat.create(req.body , (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
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

module.exports = platRoute