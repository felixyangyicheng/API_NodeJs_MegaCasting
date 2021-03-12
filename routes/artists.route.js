module.exports = app => {
  const artists = require("../controllers/artists.controller.js");
  const { authJwt } = require("../middleware");
  var router = require("express").Router();


  // Retrieve all artists
  router.get("/", [authJwt.verifyToken], artists.findAll);


  app.use('/api/artists', router);
};