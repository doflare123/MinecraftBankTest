const connection = require("../db/postgresClient");
const bankAccount = require("./bankAccount");
const resource = require("./resource");

const accountResource = connection.define('AccountResource', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bank_account_id: {
    type: DataTypes.INTEGER,
    references: {
      model: bankAccount,
      key: 'id',
    },
    allowNull: false,
  },
  resource_id: {
    type: DataTypes.INTEGER,
    references: {
      model: resource,
      key: 'id',
    },
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  }
});


bankAccount.hasMany(accountResource, { foreignKey: 'bank_account_id', as: 'Resources' });
accountResource.belongsTo(bankAccount, { foreignKey: 'bank_account_id', as: 'BankAccount' });

resource.hasMany(accountResource, { foreignKey: 'resource_id', as: 'Accounts' });
accountResource.belongsTo(resource, { foreignKey: 'resource_id', as: 'Resource' });

module.exports = accountResource