const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NatureGallerySchema = new Schema({
    imageURL: { type: String, required: true },
    imagePrice: { type: String, required: true },
    imagePurchase: { type: String, required: true },
    

});


const NatureGallery = mongoose.model('NatureGallery', NatureGallerySchema);

module.exports = NatureGallery;