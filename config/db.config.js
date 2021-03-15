module.exports = {
    PORT: 3307,
    HOST: "172.16.1.114",
    USER: "root",
    PASSWORD: "123456",
    DB: "mysql-megasolution",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};