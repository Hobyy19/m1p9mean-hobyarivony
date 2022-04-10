const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Commande = new Schema({
    id_commande: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Commande'
    },
    id_plat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plat'
    },
    qtt: {
        type: Number
    }
}, {
    collection: 'commande_plat'
})
module.exports = mongoose.model('Commande_plat', Commande_plat)