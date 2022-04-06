const express = require('express');
const app = express();
const commande_platRoute = express.Router();

let Commande_plat = require('../models/Commande_plat');

commande_platRoute.route('/create').post((req, res, next) => {
    Commande_plat.create(req.body , (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

commande_platRoute.route('/').get((req, res) => {
    Commande_plat.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

commande_platRoute.route('/update/:id').put((req, res, next) => {
    Commande_plat.findByIdAndUpdate(req, params.id , {
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

commande_platRoute.route('/delete/:id').delete((req, res, next) => {
    Commande_plat.findByIdAndRemove(req.params.id , (error , data)=> {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});

module.exports = commande_platRoute