"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Role.belongsToMany(models.User, {
        through: models.UserRole,
        as: "users",
        foreignKey: "user_id",
      });
    }
  }
  Role.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      description: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "roles",
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Role;
};
