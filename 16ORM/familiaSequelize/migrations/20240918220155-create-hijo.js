'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hijos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefono: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      direccion: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      IdPadre: {
        type: Sequelize.INTEGER,
        
        references:{
          model: 'Padre',
          key:'id'
        },
        onUpdate: 'CASCADE',
      },
      IdMadre: {
        type: Sequelize.INTEGER,
      
        references:{
          model: 'Madre',
          key:'id'
        },
        onUpdate: 'CASCADE',
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Hijos');
  }
};