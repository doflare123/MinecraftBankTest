import { DataTypes } from "sequelize";
import connection from "../db/postgresClient";


const Users = connection.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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

export default Users;