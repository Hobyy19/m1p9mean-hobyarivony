const express = require('express');
const app = express();
const userRoute = express.Router();

let User = require('../models/User');

userRoute.route('/create').post((req, res, next) => {
    User.create(req.body , (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

userRoute.route('/').get((req, res) => {
    User.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

userRoute.route('/update/:id').put((req, res, next) => {
    User.findByIdAndUpdate(req, params.id , {
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

userRoute.route('/delete/:id').delete((req, res, next) => {
    User.findByIdAndRemove(req.params.id , (error , data)=> {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = userRoute