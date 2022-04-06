const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Plat = new Schema({
    type: {
        type: String
    },
    img: {
        type: String
    },
    designation: {
        type: String
    },
    id_user: {
        type: String
    },
    statut: {
        type: Boolean
    },
    prix_brut: {
        type: Number
    },
    prix_vente: {
        type: Number
    }
} , {
    collection: 'plat'
})
module.exports = mongoose.model('Plat', Plat)