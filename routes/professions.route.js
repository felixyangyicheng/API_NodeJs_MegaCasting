
module.exports = app => {
  const professions = require("../controllers/professions.controller.js");

  var router = require("express").Router();


  // Retrieve all professions
  router.get("/", professions.findAll);


  app.use('/api/professions', router);
};