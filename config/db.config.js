module.exports = {
    PORT: 3307,
  HOST: "localhost",
  USER: "root",
  PASSWORD: "123456",
  DB: "Test",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};