require('dotenv').config()
const express = require('express');
const app = express();
const cloudinary = require('cloudinary')
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // used to see requests
const db = require('./models');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 3001;



const isAuthenticated = require("./config/isAuthenticated");
const auth = require("./config/auth");
const creds = require("./config/email");

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

//log all requests to the console
app.use(morgan('dev'));

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolioDB', { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));

app.post('/send', (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `name: ${name} \n email: ${email} \n message: ${message}`;

  const mail = {
    from: email,
    to: "sparkitechs@gmail.com",  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
      db.ContactUs
        .create({
          name: name,
          email: email,
          message: message,
        }).then(dbContactUs => res.json(dbContactUs))
        .catch(err => res.json(err));

    }
  })

})


// LOGIN ROUTE
app.post('/api/login', (req, res) => {
  auth
    .logUserIn(req.body.email, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
});

// SIGNUP ROUTE
app.post('/api/signup', (req, res) => {
  db.User.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// Any route with isAuthenticated is protected and you need a valid token
// to access
app.get('/api/user/:id', isAuthenticated, (req, res) => {
  db.User.findById(req.params.id).then(data => {
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({ success: false, message: 'No user found' });
    }
  }).catch(err => res.status(400).send(err));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/', isAuthenticated /* Using the express jwt MW here */, (req, res) => {
  res.send('You are authenticated'); //Sending some response when authenticated
});

// Error handling
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
    res.status(401).send(err);
  }
  else {
    next(err);
  }
});

app.get("/api/contactinfo", (req, res) => {
  db.ContactUs
    .find({})
    .then(dbContactUs => res.json(dbContactUs))
    .catch(err => res.json(err));
});

app.post("/api/newcontact", (req, res) => {
  db.ContactUs
    .create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.comment,
    }).then(dbContactUs => res.json(dbContactUs))
    .catch(err => res.json(err));
})

// **IMAGE GET ROUTES** //

app.get("/api/naturegallery", (req, res) => {
  db.NatureGallery
    .find({})
    .then(dbNatureGallery => res.json(dbNatureGallery))
    .catch(err => res.json(err));
});

app.get("/api/engagementgallery", (req, res) => {
  db.EngagementGallery
    .find({})
    .then(dbEngagementGallery => res.json(dbEngagementGallery))
    .catch(err => res.json(err));
});

app.get("/api/foodgallery", (req, res) => {
  db.FoodGallery
    .find({})
    .then(dbFoodGallery => res.json(dbFoodGallery))
    .catch(err => res.json(err));
});

//**PROFILE CARD GET ROUTE **//

app.get("/api/profileupdate", (req, res) => {
  db.ProfileUpdate
    .find({})
    .then(dbProfileUpdate => res.json(dbProfileUpdate))
    .catch(err => res.json(err));
});

// **IMAGE POST ROUTES** //


app.post("/api/newnaturephoto", (req, res) => {
  db.NatureGallery
    .create({
      fileName: req.body.fileName,
      imageURL: req.body.imageURL,
    }).then(NatureGallery => res.json(NatureGallery))
    .catch(err => res.json(err));
});

app.post("/api/newengagementphoto", (req, res) => {
  db.EngagementGallery
    .create({
      fileName: req.body.fileName,
      imageURL: req.body.imageURL,
    }).then(dbEngagementGallery => res.json(dbEngagementGallery))
    .catch(err => res.json(err));
});

app.post("/api/newfoodphoto", (req, res) => {
  db.FoodGallery
    .create({
      fileName: req.body.fileName,
      imageURL: req.body.imageURL,
    }).then(dbFoodGallery => res.json(dbFoodGallery))
    .catch(err => res.json(err));
});



// **PROFILE CARD POST ROUTE **//

app.post("/api/profileupdate", (req, res) => {
  db.ProfileUpdate
    .create({
      fileName: req.body.fileName,
      imageURL: req.body.imageURL,
      profileText: req.body.profileText,
    }).then(dbProfileUpdate => res.json(dbProfileUpdate))
    .catch(err => res.json(err));
});

// **PROFILE CARD UPDATE ROUTE** //

app.put("/api/profileupdate/:id", (req, res) => {
  db.ProfileUpdate
    .findOneAndUpdate(
      { _id: req.params.id }, 
      { $set: req.body }, 
      { new: true 
      }).then(dbProfileUpdate => res.json(dbProfileUpdate))
    .catch(err => res.json(err));
});


// **IMAGE DELETE ROUTES** //


app.delete("/api/nature/:fileName", (req, res) => {
  db.NatureGallery
    .deleteOne({ fileName: req.params.fileName })
    .then(dbFile => res.json(dbFile))
    .catch(err => res.json(err));
});

app.delete("/api/engagement/:fileName", (req, res) => {
  db.EngagementGallery
    .deleteOne({ fileName: req.params.fileName })
    .then(dbFile => res.json(dbFile))
    .catch(err => res.json(err));
});

app.delete("/api/food/:fileName", (req, res) => {
  db.FoodGallery
    .deleteOne({ fileName: req.params.fileName })
    .then(dbFile => res.json(dbFile))
    .catch(err => res.json(err));
});

// **IMAGE DELETE ROUTES** //



app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// ** SERVER START ** //

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});