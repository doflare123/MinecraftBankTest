import { DataTypes } from "sequelize";
import connection from "../db/postgresClient";
import Users from './users';



const bankAccount = connection.define('bankAccount', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true, 
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: 'id', 
      },
      allowNull: false, 
    },

})

Users.hasOne(bankAccount, { foreignKey: 'user_id', as: 'BankAccount' });
bankAccount.belongsTo(Users, { foreignKey: 'user_id', as: 'User' });


module.exports = bankAccount