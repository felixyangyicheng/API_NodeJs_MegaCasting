const db = require("../models");
const Professions = db.professions;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
   Professions.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Professions."
      });
    });
};