const express = require("express");
const sequelize = require("./database/sequelize");
const multer = require("multer");
const forms = multer();
const logger = require("morgan");
const useCombineRoutes = require("./routes/index");

const app = express();
const port = 8080;

app.use(logger("dev"));
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(forms.array());

useCombineRoutes(app); // implemented the routing/

process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error.message);
});

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log("Error in Main App Listen", error);
  }
  console.log(
    `Welcome to Express Sequelize! Your Server is running on port number: ${port}`
  );
});
