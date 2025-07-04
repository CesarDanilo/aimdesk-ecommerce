'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produto', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      preco: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      estoque: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      imagem: {
        type: Sequelize.STRING, // Usa o tipo BLOB para armazenar grandes quantidades de dados binários
        allowNull: true // Permitindo valores nulos caso a imagem não seja obrigatória
      },
      categoria: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      marca: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      peso: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      altura: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      largura: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      profundidade: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      sku: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      destaque: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      desconto: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      avaliacao: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      quantidade_vendida: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Produto');
  }
};
