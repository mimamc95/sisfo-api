'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MataKuliahs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }

  MataKuliahs.associate = function (models) {
    MataKuliahs.belongsTo(models.Dosens, {
      foreignKey: 'dosenId'
    })
    MataKuliahs.hasMany(models.Kelas, {
      foreignKey: 'makulId'
    })
  };


  MataKuliahs.init({
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

    dosenId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Dosen Id required'
        },
        notNull: {
          args: true,
          msg: 'Dosen Id required'
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
    modelName: 'MataKuliahs',
  });
  return MataKuliahs;
};