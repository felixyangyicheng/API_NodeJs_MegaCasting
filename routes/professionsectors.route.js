
module.exports = app => {
  const professionsectors = require("../controllers/professionsectors.controller.js");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();


  // Retrieve all professions
  router.get("/",  professionsectors.findAll);


  app.use('/api/professionsectors', router);
};