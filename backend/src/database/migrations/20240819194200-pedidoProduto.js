'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('PedidoProduto', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      pedido_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Pedido',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      produto_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Produto',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      precoUnitario: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      subtotal: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('PedidoProduto');
  }
};