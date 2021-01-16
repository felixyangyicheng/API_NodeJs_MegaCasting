const db = require("../models");
const Contracts = db.contracts;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
   Contracts.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving contracts."
      });
    });
};