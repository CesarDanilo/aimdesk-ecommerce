'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('Pedido', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      usuario_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      status: {
        type: Sequelize.STRING(30), // Ex: 'pendente', 'pago', 'enviado', 'cancelado'
        allowNull: false,
        defaultValue: 'pendente'
      },
      valorTotal: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      endereco_entrega: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      forma_pagamento: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      observacao: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pedido');
  }
};