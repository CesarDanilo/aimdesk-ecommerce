'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      endereco: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      bairro: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      referencia: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      contato: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('Users');

  }
};