const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EngagementGallerySchema = new Schema({
    fileName: { type: String, required: true },
    imageURL: { type: String, required: true },
});


const EngagementGallery = mongoose.model('EngagementGallery', EngagementGallerySchema);

module.exports = EngagementGallery;