'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hijo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hijo.belongsTo(models.Padre,  {
        foreignKey:'IdPadre',
        as: 'Padres',
        onUpdate: 'CASCADE'
      },
      );
      Hijo.belongsTo(models.Madre,  {
        foreignKey:'IdMadre',
        as: 'Madres',
        onUpdate: 'CASCADE'
      },
    )
    }
  }
  Hijo.init({
    nombre: DataTypes.STRING,
    telefono: DataTypes.STRING,
    direccion: DataTypes.STRING,
    IdPadre: DataTypes.INTEGER,
    IdMadre: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Hijo',
    tableName: 'hijos'
  });
  return Hijo;
};