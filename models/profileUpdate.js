const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileUpdateSchema = new Schema({
    imageUpdate: { type: String, required: true },
    textUpdate: { type: String, required: true },
  
});

// ContactUsSchema.path('email').validate(function (email) {
//     var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//     return emailRegex.test(email.text); // Assuming email has a text attribute
//  }, 'The e-mail field cannot be empty.')

const ProfileUpdate = mongoose.model('Profile-Update', ProfileUpdateSchema);

module.exports = ProfileUpdate;