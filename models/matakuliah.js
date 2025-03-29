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
    makul: DataTypes.STRING,
    kode: DataTypes.INTEGER,
    fakultas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MataKuliah',
  });
  return MataKuliah;
};