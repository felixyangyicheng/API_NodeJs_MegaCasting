const db = require("../models");
const config = require("../config/auth.config");
const AspNetUsers = db.aspnetusers;
const AspNetRoles = db.aspnetroles;
const AspNetUserRoles = db.aspnetuserroles;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const crypto = require("crypto");


AspNetRoles.belongsToMany(AspNetUsers, { through: AspNetUserRoles, foreignKey: "RoleId", otherKey: "UserId" });
AspNetUsers.belongsToMany(AspNetRoles, { through: AspNetUserRoles, foreignKey: "UserId", otherKey: "RoleId" });


const hashedPwd = "'AQAAAAEAACcQAAAAED0D5PQokFNGHfjhSXni4RPrFkQJFrJ3+SQquPMamEjOo36FJ4DWcJ+xl+f8itAH/A=='";
const hashedPasswordBytes = new Buffer(hashedPwd, 'base64');
const hexChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

let salt_string = "";
let storedSubKeyString = "";

// build strings of octets for the salt and the stored key
for (let i = 1; i < hashedPasswordBytes.length; i++) {
    if (i > 12 && i <= 28) {

        salt_string += hexChar[(hashedPasswordBytes[i] >> 4) & 0x0f] + hexChar[hashedPasswordBytes[i] & 0x0f]
    }
    if (i > 0 && i > 28) {
        storedSubKeyString += hexChar[(hashedPasswordBytes[i] >> 4) & 0x0f] + hexChar[hashedPasswordBytes[i] & 0x0f];
    }
}

// password provided by the user        
const password = 'P@ssword1';

var nodeCrypto = crypto.pbkdf2Sync(
    new Buffer(password),
    new Buffer(salt_string, 'hex'), 10000, 256, 'SHA256');


var derivedKeyOctets = nodeCrypto.toString('hex').toUpperCase();


if (derivedKeyOctets.indexOf(storedSubKeyString) === 0) {
    console.log('"passwords match!"');
} else {
    console.log('"passwords does not match!"');
}

function compare_password_hashed(db, input) {

    let hashedPasswordBytes = new Buffer(db, 'base64');
    const hexChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    let salt_string = "";
    let storedSubKeyString = "";

    // build strings of octets for the salt and the stored key
    for (let i = 1; i < hashedPasswordBytes.length; i++) {
        if (i > 12 && i <= 28) {

            salt_string += hexChar[(hashedPasswordBytes[i] >> 4) & 0x0f] + hexChar[hashedPasswordBytes[i] & 0x0f]
        }
        if (i > 0 && i > 28) {
            storedSubKeyString += hexChar[(hashedPasswordBytes[i] >> 4) & 0x0f] + hexChar[hashedPasswordBytes[i] & 0x0f];
        }
    }

    // password provided by the user        


    var nodeCrypto = crypto.pbkdf2Sync(
        new Buffer(input),
        new Buffer(salt_string, 'hex'), 10000, 256, 'SHA256');


    var derivedKeyOctets = nodeCrypto.toString('hex').toUpperCase();


    if (derivedKeyOctets.indexOf(storedSubKeyString) === 0) {
        return true;
    } else {
        return false;
    }
}

// exports.signup = (req, res) => {
//   // Save User to Database
//     AspnetUsers.create({
//         Id:req.body.Id,
//         UserName: req.body.UserName,
//         Email: req.body.Email,
//         PasswordHash: bcrypt.hashSync(req.body.PasswordHash, 10),
//         EmailConfirmed: 0,
//         PhoneNumberConfirmed: 0,
//         TwoFactorEnabled: 0,
//         LockoutEnabled: 1,
//         AccessFailedCount:0
//   })
//     .then(AspnetUsers => {
//       if (req.body.AspnetRoles) {
//         AspnetRoles.findAll({
//           where: {
//             name: {
//               [Op.or]: req.body.AspnetRoles
//             }
//           }
//         }).then(AspnetRoles => {
//           AspnetUsers.setRoles(AspnetRoles).then(() => {
//             res.send({ message: "User was registered successfully!" });
//           });
//         });
//       } else {
//         // user role = 1
//         AspnetUsers.setRoles([5]).then(() => {
//           res.send({ message: "User was registered successfully!" });
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({ message: err.message });
//     });
// };


AspNetRoles.belongsToMany(AspNetUsers, { through: AspNetUserRoles, foreignKey: "RoleId", otherKey: "UserId" });
AspNetUsers.belongsToMany(AspNetRoles, { through: AspNetUserRoles, foreignKey: "UserId", otherKey: "RoleId" });



exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.SignInBoard = (req, res) => {
    res.status(200).send("Signin Content.");
};

// exports.adminBoard = (req, res) => {
//   res.status(200).send("Admin Content.");
// };

// exports.partnerBoard = (req, res) => {
//   res.status(200).send("Partner Content.");
// };




function verifyRole(db) {
    if (db == "[{\"Name\":\"Partner\"}]") return true;
    else return false;
}


exports.signin = (req, res) => {

    AspNetUsers.findOne({
            where: {
                UserName: req.body.UserName
            },
            include: [{
                model: AspNetRoles,
                as: 'AspNetRoles',
                attributes: ["Name"],
                through: {
                    attributes: [],
                }
            }, ],
        })
        .then(AspNetUsers => {
            if (!AspNetUsers) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = compare_password_hashed(
                AspNetUsers.PasswordHash, req.body.PasswordHash
            );
            console.log((JSON.stringify(AspNetUsers.AspNetRoles)));
            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }
            var RoleIsPartner = verifyRole(JSON.stringify(AspNetUsers.AspNetRoles));

            if (!RoleIsPartner) {
                return res.status(403).send({
                    accessToken: null,
                    message: "Accès est réservé aux partenaires de diffusion",

                })
            }
            var token = jwt.sign({ Id: AspNetUsers.Id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });
            res.status(200).send({
                Id: AspNetUsers.Id,
                UserName: AspNetUsers.UserName,
                Email: AspNetUsers.Email,

                accessToken: token
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
}