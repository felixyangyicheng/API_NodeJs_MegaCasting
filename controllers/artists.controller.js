const db = require("../models");
const Artists = db.artists;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
   Artists.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving artists."
      });
    });
};