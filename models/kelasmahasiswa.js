'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelasMahasiswas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }

  // kelasMahasiswas.associate = function (models) {
  //   kelasMahasiswas.belongsTo(models.Kelas, {
  //     foreignKey: 'kelasId'
  //   })
  //   kelasMahasiswas.belongsTo(models.Students, {
  //     foreignKey: 'mahasiswaId'
  //   })
  // };


  kelasMahasiswas.init({
    kelasId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          message: 'Kelas Id is required'
        },
        notNull: {
          args: true,
          message: 'Kelas Id is required'
        }
      }
    },

    mahasiswaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          message: 'Mahasiswa Id is required'
        },
        notNull: {
          args: true,
          message: 'Mahasiswa Id is required'
        }
      }
    }

  }, {
    sequelize,
    modelName: 'kelasMahasiswas',
  });
  return kelasMahasiswas;
};