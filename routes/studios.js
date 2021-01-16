
module.exports = app => {
  const studios = require("../controllers/studios.controller.js");

  var router = require("express").Router();


  // Retrieve all studios
  router.get("/", studios.findAll);


  app.use('/api/studios', router);
};