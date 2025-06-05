const connection = require("../db/postgresClient");
const users = require("./users");



const bankAccount = connection.define('bankAccount', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true, 
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: users,
        key: 'id', 
      },
      allowNull: false, 
    },

})

users.hasMany(Contact, { foreignKey: 'user_id', as: 'Contacts' });
bankAccount.belongsTo(User, { foreignKey: 'user_id', as: 'User' });


module.exports = bankAccount