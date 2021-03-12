const db = require("../models");
const AspNetUsers = db.aspnetusers;
const AspNetRoles = db.aspnetroles;
const AspNetUserRoles = db.aspnetuserroles;

const Op = db.Sequelize.Op;

AspNetRoles.belongsToMany(AspNetUsers, { through: AspNetUserRoles, foreignKey: "RoleId", otherKey: "UserId" });
AspNetUsers.belongsToMany(AspNetRoles, { through: AspNetUserRoles, foreignKey: "UserId", otherKey: "RoleId" });



exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.customerBoard = (req, res) => {
  res.status(200).send("Customer Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.partnerBoard = (req, res) => {
  res.status(200).send("Partner Content.");
};


exports.findAll = (req, res) => {
  AspNetUsers.findAll({
    include: [
      {
        model: AspNetRoles,
        as:'AspNetRoles',
        attributes: ["Name"],
        through: {
          attributes: [],
          }
        },
      ],
    })
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

// exports.create = (req, res) => {
    
// };


exports.findOne = (req, res) => {
  const Id = req.params.Id;

  AspNetUsers.findByPk(Id, {
    include: [
      {
        model: AspNetRoles,
        as:'AspNetRoles',
        attributes: ["Name"],
        through: {
          attributes: [],
          }
        },
      ],})
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

  AspNetUsers.findByName(UserName, {
    include: [
      {
        model: AspNetRoles,
        as:'AspNetRoles',
        attributes: ["Name"],
        through: {
          attributes: [],
          }
        },
      ],})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la recherche de l'Utilisateur avec UserName=" + UserName
      });
    });
};



// exports.update = (req, res) => {
//     const Id = req.params.Id;
//     AspNetUsers.update(req.body, {
//         where: { Id: Id }
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Utilisateur mis à jour"
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                message: "erreur de l'utilisateur avec id=" + Id
//             });
//         });
// };

