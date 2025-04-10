'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }

  Kelas.associate = function (models) {
    Kelas.belongsTo(models.MataKuliahs, {
      foreignKey: 'makulId'
    })
    Kelas.belongsToMany(models.Students, {
      through: models.KelasMahasiswas,
      foreignKey: 'kelasId',
    })
  }


  Kelas.init({
    kode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          message: 'Kode is required'
        },
        notNull: {
          args: true,
          message: 'Kode is required'
        }
      }
    },

    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          message: 'Nama is required'
        },
        notNull: {
          args: true,
          message: 'Nama is required'
        }

      }
    },

    makulId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          message: ' Mata Kuliah Id is required'
        },
        notNull: {
          args: true,
          message: ' Mata Kuliah Id is required'
        }
      }
    },

    fakultas: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          message: 'Fakultas is required'
        },
        notNull: {
          args: true,
          message: 'Fakultas is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Kelas',
  });
  return Kelas;
};