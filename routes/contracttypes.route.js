
module.exports = app => {
  const contracttypes = require("../controllers/contracttypes.controller.js");

  var router = require("express").Router();


  // Retrieve all contracttypes
  router.get("/", contracttypes.findAll);


  app.use('/api/contracttypes', router);
};