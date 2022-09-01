const express = require('express');
const app = express();
const plat_userRoute = express.Router();

let Plat_user = require('../models/Plat_user');

plat_userRoute.route('/').get((req, res) => {
    Plat_user.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

plat_userRoute.route('/read/:id').get((req, res) => {
    Plat_user.findById(req.params.id ,(error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

module.exports = plat_userRoute