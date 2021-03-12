
module.exports = app => {
  const offers = require("../controllers/offers.controller.js");
  const { authJwt } = require("../middleware");
  var router = require("express").Router();


  // Retrieve all offers
  router.get("/", [authJwt.verifyToken], offers.findAll);


  app.use('/api/offers', router);
};