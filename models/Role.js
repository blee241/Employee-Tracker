const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {}

// This is the Role table schema
Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.VARCHAR(30),
            allowNull: false
        },
        salary: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        department_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'department',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'role'
    }
);

module.exports = Role;