const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
//const bcrypt = require('bcrypt');
const app = express();
const users= require("./models/AspNetUsers")
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.render('index.pug');
});



const db = require("./models");
require("./routes/artists.route")(app);
require("./routes/contracts.route")(app);
require("./routes/contracttypes.route")(app);
require("./routes/diffusionpartners.route")(app);
require("./routes/offers.route")(app);
require("./routes/professions.route")(app);
require("./routes/professionsectors.route")(app);
require("./routes/studios.route")(app);
require("./routes/aspnetusers.route")(app);

db.sequelize.sync();


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});