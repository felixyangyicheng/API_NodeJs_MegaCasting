
module.exports = app => {
  const professionsectors = require("../controllers/professionsectors.controller.js");

  var router = require("express").Router();


  // Retrieve all professions
  router.get("/", professionsectors.findAll);


  app.use('/api/professionsectors', router);
};