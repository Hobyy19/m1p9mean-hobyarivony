const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Commande = new Schema({
    id_commande: {
        type: String
    },
    id_plat: {
        type: String
    },
    qtt: {
        type: Number
    },
    prix_unitaire: {
        type: Number
    }
}, {
    collection: 'commande_plat'
})
module.exports = mongoose.model('Commande_plat', Commande_plat)