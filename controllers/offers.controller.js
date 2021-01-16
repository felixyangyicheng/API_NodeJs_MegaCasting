const db = require("../models");
const Offers = db.offers;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
   Offers.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving offers."
      });
    });
};