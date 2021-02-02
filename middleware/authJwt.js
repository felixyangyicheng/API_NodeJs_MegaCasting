const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const AspnetUsers = db.aspnetusers;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.Id = decoded.Id;
    next();
  });
};

isAdmin = (req, res, next) => {
  AspnetUsers.findByPk(req.Id).then(aspnetusers => {
    aspnetusers.findByPk(req.Id).then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "Administrator") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};

isPartner = (req, res, next) => {
  AspnetUsers.findByPk(req.Id).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "Partner") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Partner Role!"
      });
    });
  });
};

isPartnerOrAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "Partner") {
          next();
          return;
        }

        if (roles[i].name === "Administrator") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Partner or Admin Role!"
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isPartner: isPartner,
  isPartnerOrAdmin: isPartnerOrAdmin
};
module.exports = authJwt;