'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dosen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dosen.init({
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

    nip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'NIP is required'
        },
        notNull: {
          args: true,
          msg: 'NIP is required'
        },
        isNumeric:{
          args:true,
          msg:'NIP must numeric format'
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
    modelName: 'Dosen',
  });
  return Dosen;
};