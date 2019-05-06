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

  // **IMAGE GET ROUTE REDIRECTS** //

  getAllNatureImages: function (NatureGallery) {
    return axios.get("/api/naturegallery", NatureGallery)
  },

  getAllEngagementImages: function (EngagementGallery) {
    return axios.get("/api/engagementgallery", EngagementGallery)
  },

  getAllFoodImages: function (FoodGallery) {
    return axios.get("/api/foodgallery", FoodGallery)
  },

// **IMAGE POST ROUTES REDIRECTS** //

  uploadNatureImage: (data) => {
    return axios.post('/api/newnaturephoto', data);
  },

  uploadEngagementImage: (data) => {
    return axios.post('/api/newengagementphoto', data);
  },

  uploadFoodImage: (data) => {
    return axios.post('/api/newfoodphoto', data);
  },

  // **IMAGE DELETE ROUTES REDIRECTS** //

  deleteNatureImage: (fileName) => {
    return axios.delete(`/api/nature/${fileName}`);
  },

  deleteEngagementImage: (fileName) => {
    return axios.delete(`/api/engagement/${fileName}`);
  },

  deleteFoodImage: (fileName) => {
    return axios.delete(`/api/food/${fileName}`);
  },


 // ** PROFILE UPDATE ROUTE ** //

 getProfileImage: (profileObject) =>{
  return axios.get('/api/profileupdate', profileObject)
 },

 updateProfileCard: (profileObject) => {
   return axios.put(`/api/profilepicture/${profileObject}`); 
 }





};

// client\src\utils\API.js
// client\src\components\ContactUs\ContactUs.js