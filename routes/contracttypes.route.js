
module.exports = app => {
  const contracttypes = require("../controllers/contracttypes.controller.js");
  const { authJwt } = require("../middleware");
  var router = require("express").Router();


  // Retrieve all contracttypes
  router.get("/",  contracttypes.findAll);


  app.use('/api/contracttypes', router);
};