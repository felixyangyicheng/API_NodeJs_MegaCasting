const db = require("../models");
const Studios = db.studios;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
   Studios.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving studios."
      });
    });
};