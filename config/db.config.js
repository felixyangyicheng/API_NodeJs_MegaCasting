module.exports = {
    PORT: 3306,
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Not24get",
  DB: "megasolution",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};