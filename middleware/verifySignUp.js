const db = require("../models");
const AspnetRoles = db.aspnetroles;
const AspnetUsers = db.aspnetusers;
const AspnetUserRoles = db.aspnetuserroles;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
    AspnetUsers.findOne({
    where: {
      UserName: req.body.UserName
    }
  }).then(aspnetusers => {
    if (aspnetusers) {
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
      return;
      }
    AspnetUsers.findOne({
      where: {
        Email: req.body.Email
      }
    }).then(aspnetusers => {
      if (aspnetusers) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
    AspnetRoles.findOne({
        where: {
          Name: req.body.Name
      }
  }).then(aspnetroles => {
    if (!aspnetroles) {
      res.status(400).send({
        message: "Failed! Role does not exist = " + req.body.Name
      });
      return;
  
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;