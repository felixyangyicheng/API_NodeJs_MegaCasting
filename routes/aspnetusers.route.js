module.exports = app => {
  const aspnetusers = require("../controllers/aspnetusers.controller.js");

  var router = require("express").Router();


  // Retrieve all contracts
  router.get("/", aspnetusers.findAll);
  router.get("/username", aspnetusers.find);

  app.use('/api/aspnetusers', router);
};