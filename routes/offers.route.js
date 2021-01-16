
module.exports = app => {
  const offers = require("../controllers/offers.controller.js");

  var router = require("express").Router();


  // Retrieve all offers
  router.get("/", offers.findAll);


  app.use('/api/offers', router);
};