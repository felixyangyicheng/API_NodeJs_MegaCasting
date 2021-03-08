module.exports = app => {
  const aspnetusers = require("../controllers/aspnetusers.controller.js");
  const { authJwt } = require("../middleware");
  var router = require("express").Router();


  // Retrieve all contracts
  router.get("/", aspnetusers.findAll);
  router.get("/username", aspnetusers.find);

  app.use('/api/aspnetusers', router);
};