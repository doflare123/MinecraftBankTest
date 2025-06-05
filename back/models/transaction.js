const { DataTypes } = require("sequelize");
const connection = require("../db/postgresClient");
const BankAccount = require("./bankAccount");
const Resource = require("./resource");

const Transaction = connection.define('Transaction', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  from_account_id: {
    type: DataTypes.INTEGER,
    references: {
      model: BankAccount,
      key: 'id',
    },
    allowNull: true,
  },
  to_account_id: {
    type: DataTypes.INTEGER,
    references: {
      model: BankAccount,
      key: 'id',
    },
    allowNull: true,
  },
  resource_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Resource,
      key: 'id',
    },
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('deposit', 'withdrawal', 'transfer'),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Transaction;
