const db = require("../models");
const config = require("../config/auth.config");
const AspnetUsers = db.aspnetusers;
const AspnetRoles = db.aspnetroles;
const AspnetUserRoles = db.aspnetuserroles;
const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
    AspnetUsers.create({
        Id:req.body.Id,
        UserName: req.body.UserName,
        Email: req.body.Email,
        PasswordHash: bcrypt.hashSync(req.body.PasswordHash, 10),
        EmailConfirmed: 0,
        PhoneNumberConfirmed: 0,
        TwoFactorEnabled: 0,
        LockoutEnabled: 1,
        AccessFailedCount:0
  })
    .then(AspnetUsers => {
      if (req.body.AspnetRoles) {
        AspnetRoles.findAll({
          where: {
            name: {
              [Op.or]: req.body.AspnetRoles
            }
          }
        }).then(AspnetRoles => {
          AspnetUsers.setRoles(AspnetRoles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 1
        AspnetUsers.setRoles([5]).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};


exports.signin = (req, res) => {
  AspnetUsers.findOne({
    where: {
      UserName: req.body.UserName
    }
  })
    .then(AspnetUsers => {
      if (!AspnetUsers) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.PasswordHash,
        AspnetUsers.PasswordHash
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ Id: AspnetUsers.Id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      AspnetUsers.getRoles().then(AspnetRoles => {
        for (let i = 0; i < AspnetRoles.length; i++) {
          authorities.push(AspnetRoles[i].name.toUpperCase());
        }
        res.status(200).send({
          Id: AspnetUsers.Id,
          UserName: AspnetUsers.UserName,
          Email: AspnetUsers.Email,
          AspnetRoles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

