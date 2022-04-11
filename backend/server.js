const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

mongoose
  // .connect('mongodb+srv://e-kaly:e-kaly@cluster0.f3m1a.mongodb.net/e-kaly?retryWrites=true&w=majority')
  .connect('mongodb://127.0.0.1:27017/e-kaly')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
})

const userRoute = require('./routes/user.route')
const platRoute = require('./routes/plat.route')
const commandeRoute = require('./routes/commande.route')
const livraisonRoute = require('./routes/livraison.route')
const commande_platRoute = require('./routes/commande_plat.route')


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
app.use('/api/commande_plat', commande_platRoute)

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
