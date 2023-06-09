// import important parts of sequelize library
const { INTEGER } = require("sequelize");
const { DECIMAL } = require("sequelize");
const { STRING } = require("sequelize");
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    product_id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: STRING,
      allowNull: false,
    },
    price: {
      type: DECIMAL,
      allowNull: false,
      validate: true,
    },
    stock: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
