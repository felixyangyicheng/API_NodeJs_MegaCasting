const db = require('../models');
const ProfessionSectors = db.professionsectors;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
   ProfessionSectors.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving professionSectors."
      });
    });
};