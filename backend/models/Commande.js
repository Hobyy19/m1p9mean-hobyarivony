const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Commande = new Schema({
    id_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    date_livraison: {
        type: String
    },
    lieu: {
        type: String
    },
    statut: {
        type: Number
    },
   contact: {
       type: String
   }
},  { timestamps: true },
{
    collection: 'commande'
})
module.exports = mongoose.model('Commande', Commande)