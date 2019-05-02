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

  getAllNatureImages: function (NatureGallery) {
    return axios.get("/api/naturegallery", NatureGallery)
  },

  getAllEngagementImages: function (EngagementGallery) {
    return axios.get("/api/engagementgallery", EngagementGallery)
  },

  getAllFoodImages: function (FoodGallery) {
    return axios.get("/api/newfoodphoto", FoodGallery)
  },

  
  
  
  
  
  
  uploadImage: (data) => {
      console.log(data)
  
      // your code to interact with an image storage service goes here
      return Promise.resolve('done')
    }
 



};

// client\src\utils\API.js
// client\src\components\ContactUs\ContactUs.js