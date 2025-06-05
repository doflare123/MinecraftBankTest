import { DataTypes } from "sequelize";
import connection from "../db/postgresClient";


const resource = connection.define('Resource', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },
    price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    },
});

module.exports = resource