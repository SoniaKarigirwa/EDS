import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/database.js';
import UserModel from './userModel.js';

const EmployeeModel = sequelize.define('employees', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  nationalIdentity: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  telephone: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  laptopManufacturer: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  laptopModel: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  serialNumber: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  added_by: {
    type: DataTypes.UUID,
    references: {
      model: UserModel,
      key: 'id',
    },
    onUpdate: 'cascade',
    onDelete: 'cascade',
    allowNull: true,
  }
},{
    tableName: "employees"
  },
);

EmployeeModel.sync({ alter: true })
  .then(() => {
    console.log("Employee table created successfully");
  })
  .catch((error) => {
    console.error("Error creating Data table:", error);
  });


export default EmployeeModel