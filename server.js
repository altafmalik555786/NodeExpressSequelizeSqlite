const express = require('express')
const sequelize = require('./database/sequelize')
const getPlaylist = require('./api/playlist/get')
const postPlayList = require('./api/playlist/post')
const getSinglePlaylist = require('./api/playlist/getSingle')
const multer = require('multer');
const forms = multer();
const playListPath = require('./api/playlist/path')
const deletePlayList = require('./api/playlist/delete')
const updatePlayList = require('./api/playlist/update')

const app = express()

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(forms.array());

const port = 8080

////////////// PlayList API Method ///////////////
app.get(`${playListPath}`, getPlaylist)
app.get(`${playListPath}/:id`, getSinglePlaylist)
app.delete(`${playListPath}/:id`, deletePlayList)
app.post(`${playListPath}`, postPlayList)
app.put(`${playListPath}/:id`, updatePlayList)

process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.message);
});

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log("Error in Main App Listen", error)
  }
  console.log("Welcome to Express Sequelize! Your Server is running on port number: " + port)
})