const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Commande = new Schema({
    id_user: {
        type: String
    },
    date_livraison: {
        type: Date
    },
    lieu: {
        type: String
    }
}, {
    collection: 'commande'
})
module.exports = mongoose.model('Commande', Commande)