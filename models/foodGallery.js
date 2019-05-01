const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodGallerySchema = new Schema({
    imageURL: { type: String, required: true },
    imagePrice: { type: String, required: true },
    imagePurchase: { type: String, required: true },
    

});


const FoodGallery = mongoose.model('FoodGallery', FoodGallerySchema);

module.exports = FoodGallery;