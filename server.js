const express = require('express')
const sequelize = require('./database/sequelize')
const getPlaylist = require('./api/playlist/get')
const postPlayList = require('./api/playlist/post')
const multer = require('multer');
const forms = multer();

const app = express()

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(forms.array());

const port = 8080

app.get("/api/playlist", (req, res) => {
  getPlaylist(req, res)
})

app.post('/api/playlist', postPlayList)

process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.message);
});

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log(error)
  }
  console.log("Welcome to Express Sequelize! Your Server is running on port number: " + port)
})