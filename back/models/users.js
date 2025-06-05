const { DataTypes } = require("sequelize");
const connection = require("../db/postgresClient");


const users = connection.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userName:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        minecraftName:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        password:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        salt: {
            type: DataTypes.TEXT,
            allowNull: false
        }
})


module.exports = users