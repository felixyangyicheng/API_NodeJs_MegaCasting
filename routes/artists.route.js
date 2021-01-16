module.exports = app => {
  const artists = require("../controllers/artists.controller.js");

  var router = require("express").Router();


  // Retrieve all artists
  router.get("/", artists.findAll);


  app.use('/api/artists', router);
};