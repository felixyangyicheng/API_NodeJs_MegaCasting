
module.exports = app => {
  const diffusionpartners = require("../controllers/diffusionpartners.controller.js");

  var router = require("express").Router();


  // Retrieve all diffusionpartners
  router.get("/", diffusionpartners.findAll);


  app.use('/api/diffusionpartners', router);
};