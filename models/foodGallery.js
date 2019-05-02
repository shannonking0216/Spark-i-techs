const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodGallerySchema = new Schema({
    fileName: { type: String, required: true },
    imageURL: { type: String, required: true },
});


const FoodGallery = mongoose.model('FoodGallery', FoodGallerySchema);

module.exports = FoodGallery;