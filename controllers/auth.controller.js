const db = require("../models");
const config = require("../config/auth.config");
const AspnetUsers = db.aspnetusers;
const AspnetRoles = db.aspnetroles;
const AspnetUserRoles = db.aspnetuserroles;
const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");