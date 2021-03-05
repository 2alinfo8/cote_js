const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.demande = require("../models/demande-accouplement.model.js")(sequelize, Sequelize);
<<<<<<< HEAD
db.consultation = require("../models/consultation.model.js")(sequelize, Sequelize);
=======
db.accessoire = require("../models/accessoire.model.js")(sequelize, Sequelize);
>>>>>>> 2430a7ea888cb66a36d358a8fa6ba731f9f9b508

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.consultation.belongsTo(db.user,{
    targetKey: "id",
    foreignKey:"patient"
});

db.consultation.belongsTo(db.user,{
  targetKey: "id",
  foreignKey:"vet"
});

// db.user.belongsToMany(db.role, {
//   through: "user_roles",
//   foreignKey: "userId",
//   otherKey: "roleId"
// });

// db.consultation.HasOne(db.user,{
//     foreignKey: "patientId"
// })
// db.consultation.HasOne(db.user,{
//   foreignKey: "vetId"
// })
// db.demande.belongsTo(db.user,{
//     targetKey: "username",
//     foreignKey:"from"
// });
// db.demande.belongsTo(db.user,{
//     targetKey: "username",
//     foreignKey:"to"
// });
db.ROLES = ["user", "veto"];

module.exports = db;
