'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MataKuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MataKuliah.init({

    makul: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Mata Kuliah is required'
        },
        notNull: {
          args: true,
          msg: 'Mata Kuliah is required'
        }
      }
    },

    kode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Kode is required'
        },
        notNull: {
          args: true,
          msg: 'Kode is required'
        },
        isNumeric: {
          args: true,
          msg: 'Kode must numeric format'
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
    modelName: 'MataKuliah',
  });
  return MataKuliah;
};