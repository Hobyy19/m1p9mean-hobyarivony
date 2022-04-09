const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

mongoose
  .connect('mongodb://127.0.0.1:27017/e-kaly')
  // .connect("mongodb+srv://e-kaly:e-kaly@cluster0.h7nxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
})

const userRoute = require('../backend/routes/user.route')
const platRoute = require('../backend/routes/plat.route')
const commandeRoute = require('../backend/routes/commande.route')
const livraisonRoute = require('../backend/routes/livraison.route')
const commande_platRoute = require('../backend/routes/livraison.route')


const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)

app.use(cors())
app.use(express.static(path.join(__dirname, 'dist/m1p9mean-hobyarivony')))
app.use('/', express.static(path.join(__dirname, 'dist/m1p9mean-hobyarivony')))

app.use('/api/user', userRoute)
app.use('/api/plat', platRoute)
app.use('/api/commande', commandeRoute)
app.use('/api/livraison', livraisonRoute)
app.use('/api/commande/plat', commande_platRoute)

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

app.use((req, res, next) => {
  next(createError(404))
})

app.use(function (err, req, res, next) {
    console.error(err.message) 
    if (!err.statusCode) err.statusCode = 500 
    res.status(err.statusCode).send(err.message) 
})