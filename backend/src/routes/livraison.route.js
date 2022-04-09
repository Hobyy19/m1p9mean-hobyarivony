const express = require('express');
const app = express();
const livraisonRoute = express.Router();

let Livraison = require('../models/Livraison');

livraisonRoute.route('/create').post((req, res, next) => {
    Livraison.create(req.body , (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

livraisonRoute.route('/').get((req, res) => {
    Livraison.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

livraisonRoute.route('/update/:id').put((req, res, next) => {
    Livraison.findByIdAndUpdate(req, params.id , {
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

livraisonRoute.route('/delete/:id').delete((req, res, next) => {
    Livraison.findByIdAndRemove(req.params.id , (error , data)=> {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});

module.exports = livraisonRoute