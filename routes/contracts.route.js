module.exports = app => {
  const contracts = require("../controllers/contracts.controller.js");
  const { authJwt } = require("../middleware");
  var router = require("express").Router();


  // Retrieve all contracts
  router.get("/", [authJwt.verifyToken], contracts.findAll);


  app.use('/api/contracts', router);
};