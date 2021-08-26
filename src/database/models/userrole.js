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
      //   UserRole.belongsToMany(models.Role, {
      //     as: "roles",
      //     foreignKey: "role_id",
      //   });
      //   UserRole.belongsToMany(models.User, {
      //     as: "users",
      //     foreignKey: "user_id",
      //   });
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
