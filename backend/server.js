const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

mongoose
  // .connect('mongodb+srv://e-kaly:e-kaly@cluster0.f3m1a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
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
const commande_platRoute = require('./routes/livraison.route')


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

// ANOTHER EXAMPLE

// const express = require('express')
// const bodyParser = require('body-parser')
// const MongoClient = require('mongodb').MongoClient
// const app = express()



// // const connectionString = process.env.DB_URL
// const connectionString = 'mongodb://127.0.0.1:27017/e-kaly'

// MongoClient.connect(connectionString, { useUnifiedTopology: true })
//   .then(client => {
//     console.log('Connected to Database')
//     const db = client.db('e-kaly')
//     const userCollection = db.collection('user')

//     // ========================
//     // Middlewares
//     // ========================
//     app.use(bodyParser.urlencoded({ extended: true }))
//     app.use(bodyParser.json())

//     // ========================
//     // Routes
//     // ========================
//     app.get('/api/user/', (req, res) => {
//       db.collection('user').find().toArray()
//         .then(users => {
//           console.log(users)
//           res.json(users)
//         })
//         .catch(/* ... */)
//     })

//     // app.post('/quotes', (req, res) => {
//     //   quotesCollection.insertOne(req.body)
//     //     .then(result => {
//     //       res.redirect('/')
//     //     })
//     //     .catch(error => console.error(error))
//     // })

//     // app.put('/quotes', (req, res) => {
//     //   quotesCollection.findOneAndUpdate(
//     //     { name: 'Yoda' },
//     //     {
//     //       $set: {
//     //         name: req.body.name,
//     //         quote: req.body.quote
//     //       }
//     //     },
//     //     {
//     //       upsert: true
//     //     }
//     //   )
//     //     .then(result => res.json('Success'))
//     //     .catch(error => console.error(error))
//     // })

//     // app.delete('/quotes', (req, res) => {
//     //   quotesCollection.deleteOne(
//     //     { name: req.body.name }
//     //   )
//     //     .then(result => {
//     //       if (result.deletedCount === 0) {
//     //         return res.json('No quote to delete')
//     //       }
//     //       res.json('Deleted Darth Vadar\'s quote')
//     //     })
//     //     .catch(error => console.error(error))
//     // })

//     // ========================
//     // Listen
//     // ========================
//     const isProduction = process.env.NODE_ENV === 'production'
//     const port = isProduction ? 7500 : 3000
//     app.listen(port, function () {
//       console.log(`listening on ${port}`)
//     })
//   })
//   .catch(console.error)
