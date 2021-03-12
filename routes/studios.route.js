
module.exports = app => {
  const studios = require("../controllers/studios.controller.js");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();


  // Retrieve all studios
  router.get("/",  [authJwt.verifyToken], studios.findAll);


  app.use('/api/studios', router);
};