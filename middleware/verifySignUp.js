const db = require("../models");
const ROLES = db.ROLES;
const AspnetUsers = db.aspnetusers;


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
    AspnetUsers.findOne({where: {Email: req.body.Email}})
        .then(aspnetusers => {
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
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp; 