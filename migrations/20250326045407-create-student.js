'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Students', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'Users', // Ensure this matches the table name in the Users migration
      //   key: 'id'
      // },
      // onDelete: 'CASCADE',
      // onUpdate: 'CASCADE'
    },
    nama: {
      type: Sequelize.STRING
    },
    nim: {
      type: Sequelize.INTEGER
    },
    email: {
      type: Sequelize.STRING,
      unique: true, // Add unique constraint
      allowNull: false
    },
    jurusan: {
      type: Sequelize.STRING
    },
    fakultas: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    // foreignKey: {
    //   name: 'userId',
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   // references: {
    //   //   model: 'Users', // Ensure this matches the table name in the Users migration
    //   //   key: 'id'
    //   // },
    //   onDelete: 'CASCADE',
    //   onUpdate: 'CASCADE'
    // }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Students');
}