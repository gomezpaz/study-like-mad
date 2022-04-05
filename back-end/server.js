const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/studylikemad', {
  useNewUrlParser: true
});

// Create a new course for the acdemy: takes a title, a description, a path to an image, and a link to the course
app.post('/api/courses', async (req, res) => {
  const course = new Course({
    title: req.body.title,
    description: req.body.description,
    path: req.body.path,
    link: req.body.link
  });
  try {
    await course.save();
    res.send(course);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});



// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

// Create a scheme for courses in the database
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  path: String,
  link: String
});

// Create a model for courses in the academy.
const Course = mongoose.model('Course', courseSchema);

// Upload a picture. Uses the multer middleware for the upload and then returns
// the path where the picture is stored in the file system.
app.post('/api/pictures', upload.single('picture'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

// Get a list of all of the courses in the academy.
app.get('/api/courses', async (req, res) => {
  try {
    let courses = await Course.find();
    res.send(courses);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Delete a course from the academy.
app.delete('/api/courses/:id', async (req, res) => {
  try {
    await Course.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Edit a course in the academy.
app.put('/api/courses/:id', async (req, res) => {
  try {
    course = await Course.findOne({
      _id: req.params.id
    });
    course.title = req.body.title;
    course.description = req.body.description;
    course.link = req.body.link;
    await course.save();
    res.send(course);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});




app.listen(3000, () => console.log('Server listening on port 3000!'));
