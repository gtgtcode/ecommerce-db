const { INTEGER } = require("sequelize");
const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");
const Product = require("./Product");
const Tag = require("./Tag");

class ProductTag extends Model {}

ProductTag.init(
  {
    product_tag_id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: INTEGER,
      references: Product.product_id,
    },
    tag_id: {
      type: INTEGER,
      references: Tag.tag_id,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
