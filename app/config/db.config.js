module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "zanimaux",
    dialect: "mysql",
    pool: {
      max: 10000,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };