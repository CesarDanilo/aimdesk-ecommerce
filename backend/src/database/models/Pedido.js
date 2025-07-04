'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Pedido extends Model {
        static associate(models) {
            Pedido.hasMany(models.PedidoProduto, { foreignKey: 'pedido_id' });
        }
    };

    Pedido.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        status: {
            type: DataTypes.STRING(30), // Ex: 'pendente', 'pago', 'enviado', 'cancelado'
            allowNull: false,
            defaultValue: 'pendente'
        },
        valorTotal: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        endereco_entrega: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        forma_pagamento: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        observacao: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        sequelize,
        modelName: 'Pedido',
        tableName: 'Pedido',
        timestamps: true
    });

    return Pedido;
};
