import axios from 'axios';

export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', { username: username, email: email, password: password });
  },

  getAllContacts: function () {
    return axios.get("/api/contactinfo ");

  },

  addNewContactInfo: function (ContactUs) {
    return axios.post("/api/newcontact", ContactUs);

  },

  getAllImagesOne: function (ImagesGalOne) {
    return axios.get("/api/galleryone", ImagesGalOne)
  },



};

// client\src\utils\API.js
// client\src\components\ContactUs\ContactUs.js