module.exports = app => {
  const contracts = require("../controllers/contracts.controller.js");

  var router = require("express").Router();


  // Retrieve all contracts
  router.get("/", contracts.findAll);


  app.use('/api/contracts', router);
};