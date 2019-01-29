const Sequilize = require("sequelize");

const sequelize = new Sequilize("book-store", "root", "rootroot", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
