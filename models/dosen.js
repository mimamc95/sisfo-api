'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dosens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }

  // Dosens.associate = function (models) {
  //   Dosens.belongsTo(models.Users, {
  //     foreignKey: 'userId'
  //   })
  //   Dosens.hasMany(models.MataKuliahs, {
  //     foreignKey: 'dosenId'
  //   })
  // }

  Dosens.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'User Id is required'
        },
        notNull: {
          args: true,
          msg: 'User Id is required'
        }
      }
    },

    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Nama is required'
        },
        notNull: {
          args: true,
          msg: 'Nama is required'
        }
      }
    },

    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email is required'
        },
        notNull: {
          args: true,
          msg: 'Email is required'
        },
        isEmail: {
          args: true,
          msg: 'Incorrect email format'
        }
      }
    },

    nidn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'NIDN is required'
        },
        notNull: {
          args: true,
          msg: 'NIDN is required'
        },
        isNumeric: {
          args: true,
          msg: 'NIDN must numeric format'
        }
      }
    },

    fakultas: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Fakultas is required'
        },
        notNull: {
          args: true,
          msg: 'Fakultas is required'
        }
      }
    }

  }, {
    sequelize,
    modelName: 'Dosens',
  });
  return Dosens;
};