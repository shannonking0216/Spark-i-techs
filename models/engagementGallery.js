const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EngagementGallerySchema = new Schema({
    imageURL: { type: String, required: true },
    imagePrice: { type: String, required: true },
    imagePurchase: { type: String, required: true },
    

});


const EngagementGallery = mongoose.model('EngagementGallery', EngagementGallerySchema);

module.exports = EngagementGallery;