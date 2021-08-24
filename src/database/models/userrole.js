"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserRole.belongsTo(models.Role, {
        as: "role",
        foreignKey: "role_id",
      });

      UserRole.belongsTo(models.User, {
        as: "user",
        foreignKey: "user_id",
      });
    }
  }
  UserRole.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: DataTypes.INTEGER,
      role_id: DataTypes.INTEGER,
    },

    {
      sequelize,
      modelName: "users_roles",
      underscored: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return UserRole;
};
