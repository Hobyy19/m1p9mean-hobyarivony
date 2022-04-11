const express = require('express');
const app = express();
const userRoute = express.Router();

let User = require('../models/User');

const nodemailer = require('nodemailer');



userRoute.route('/create').post((req, res, next) => {
    User.create(req.body , (error, data) => {
        if (error) {
            return next(error)
        } else {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'arivonyhoby@gmail.com',
                  pass: 'Arivony1234'
                }
            });
            var mailOptions = {
                from: 'arivonyhoby@gmail.com',
                to: req.body.email,
                subject: 'Bienvenu(e) sur E-kaly !',
                text: 'Votre compte a été créer avec succès!'
            };
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              }); 
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

userRoute.route('/login').post((req , res, next) => {
    User.find({email: req.body.email, password:req.body.password}, function(err, user) 
    {
        if (err)
        {
            res.send(err);
        }
        console.log(user);
        res.json(user);

    });
});

userRoute.route('/livreur').get((req, res) => {
    User.find({profil: "Livreur"}, function(err, data) 
    {
        if (err)
        {
            res.send(err);
        }
        console.log(data);
        res.json(data);

    });
});

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

userRoute.route('/restaurant/top/5').get((req , res, next) => {
    User.find({profil: "Restaurant", limit:4}, function(err, data) 
    {
        if (err)
        {
            res.send(err);
        }
        console.log(data);
        res.json(data);

    });
});

module.exports = userRoute