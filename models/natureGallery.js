const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NatureGallerySchema = new Schema({
    fileName: { type: String, required: true },
    imageURL: { type: String, required: true },
    
});


const NatureGallery = mongoose.model('NatureGallery', NatureGallerySchema);

module.exports = NatureGallery;