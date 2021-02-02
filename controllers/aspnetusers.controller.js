const db = require("../models");
const AspNetUsers = db.aspnetusers;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    AspNetUsers.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "some error occured while retrieving users."
            });
        });
};

exports.create = (req, res) => {
    
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const Id = req.params.Id;

  AspNetUsers.findByPk(Id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la recherche de l'Utilisateur avec id=" + Id
      });
    });
};

exports.find = (req, res) => {
  const UserName = req.params.UserName;

  AspNetUsers.findByName(UserName)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la recherche de l'Utilisateur avec UserName=" + UserName
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const Id = req.params.Id;
    AspNetUsers.update(req.body, {
        where: { Id: Id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Utilisateur mis à jour"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
               message: "erreur de l'utilisateur avec id=" + Id
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};