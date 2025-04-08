'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
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

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username is required'
        },
        notNull: {
          args: true,
          msg: 'Username is required'
        }
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password is required'
        },
        notNull: {
          args: true,
          msg: 'Password is required'
        }
      }
    },

    role: {
      type: DataTypes.ENUM('admin','mahasiswa','dosen'),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Role is required'
        },
        notNull: {
          args: true,
          msg: 'Role is required'
        }
      }
    }

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};