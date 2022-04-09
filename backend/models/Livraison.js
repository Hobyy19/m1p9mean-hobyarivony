const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Livraison = new Schema({
    id_user: {
        type: String
    },
    id_commande: {
        type: String
    }
} , {
    collection: 'livraison'
})
module.exports = mongoose.model('Livraison', Livraison)