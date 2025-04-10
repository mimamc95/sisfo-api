'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }

  // Students.associate = function (models) {
  //   Students.belongsTo(models.Users, {
  //     foreignKey: 'userId'
  //   })
  //   Students.belongsToMany(models.Kelas, {
  //     through: models.KelasMahasiswas,
  //     foreignKey: 'mahasiswaId',
  //   })
  // }

  Students.init({
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
        },
        isNumeric: {
          args: true,
          msg: 'NIM must numeric format'
        }
      }
    },

    email: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email is required'
        },
        notNull: {
          args: true,
          msg: 'Email is required'
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
    modelName: 'Students',
  });
  return Students;
};