const db = require("../models");
const DiffusionPartners = db.diffusionpartners; //must be all lowercases
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
   DiffusionPartners.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving diffusionPartners."
      });
    });
};