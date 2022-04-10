const express = require('express');
const app = express();
const commandeRoute = express.Router();

let Commande = require('../models/Commande');

commandeRoute.route('/create').post((req, res, next) => {
    console.log("Commande test");
    Commande.create(req.body , (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

commandeRoute.route('/').get((req, res) => {
    Commande.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

commandeRoute.route('/:user').get((req, res) => {
    Commande.find({id_user: req.params.user}, function(err, data) 
    {
        if (err)
        {
            res.send(err);
        }
        console.log(data);
        res.json(data);

    });
})

commandeRoute.route('/update/:id').put((req, res, next) => {
    Commande.findByIdAndUpdate(req, params.id , {
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
})

commandeRoute.route('/delete/:id').delete((req, res, next) => {
    Commande.findByIdAndRemove(req.params.id , (error , data)=> {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = commandeRoute