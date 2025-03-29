'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init({
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

    nim: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'NIM is required'
        },
        notNull: {
          args: true,
          msg: 'NIM is required'
        }
      }
    },

    jurusan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Jurusan is required'
        },
        notNull: {
          args: true,
          msg: 'Jurusan is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};